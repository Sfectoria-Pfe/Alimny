import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

import { Prisma } from '@prisma/client'; // Import Prisma types
import { UserStatistics } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(Dto: CreateUserDto) {
    const { password, ...rest } = Dto;
    const salt = await bcrypt.genSalt();
    console.log(salt, 'salt');

    const hashedPassword = await bcrypt.hashSync(password, salt);
    if (Dto.role !== 'student') {
      return await this.prisma.employee.create({
        data: {
          fullName: Dto.fullName,
          user: {
            create: { ...rest, password: hashedPassword },
          },
        },
      });
    }
    else {
      return await this.prisma.student.create({
        data : {
          fullName : Dto.fullName,
          user : {
            create: { ...rest, password: hashedPassword },
          }
        }
      })
    }
  }

  async findUsersByGouvernorat() {
    const usersByGouvernorat = await this.prisma.user.groupBy({
      by: ['gouvernoratId'],
      _count: { id: true },
    });

    const usersWithGouvernorat = await Promise.all(
      usersByGouvernorat.map(async (group: Prisma.UserGroupByOutputType) => {
        const gouvernorat = await this.prisma.gouvernorat.findUnique({
          where: { id: group.gouvernoratId },
          select: { name: true },
        });
        return { ...group, gouvernorat };
      }),
    );

    return usersWithGouvernorat.map((group) => ({
      gouvernoratName: group.gouvernorat?.name,
      userCount: group._count.id,
    }));
  }
  async getChartData() {
    const usersCount = await this.prisma.user.count();
    const teachersCount = await this.prisma.user.count({
      where: { role: 'teacher' },
    });
    const studentsCount = await this.prisma.user.count({
      where: { role: 'student' },
    });

    return { usersCount, teachersCount, studentsCount };
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  async findAllStudents() {
    return await this.prisma.user.findMany({ where: { role: 'student' } });
  }

  async findAllTeachers() {
    return await this.prisma.user.findMany({ where: { role: 'teacher' } });
  }
  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, UpdateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: UpdateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
