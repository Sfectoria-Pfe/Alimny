import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}
  async create(createCourseDto: CreateCourseDto) {
    return await this.prisma.course.create({ data: createCourseDto });
  }

  async findAll() {
    const result = await this.prisma.course.findMany();
    return result;
  }

  findOne(id: number) {
    return this.prisma.course.findUnique({ where: { id } });
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return this.prisma.course.update({
      where: { id },
      data: updateCourseDto,
    });
  }

  remove(id: number) {
    return this.prisma.course.delete({ where: { id } });
  }
}
