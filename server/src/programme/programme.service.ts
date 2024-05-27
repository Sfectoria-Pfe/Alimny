import { Injectable } from '@nestjs/common';
import { CreateProgrammeDto } from './dto/create-programme.dto';
import { UpdateProgrammeDto } from './dto/update-programme.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProgrammeService {
  constructor(private prisma: PrismaService) {}
  async create(dto: CreateProgrammeDto) {
    return await this.prisma.programme.create({ data: dto});
  }

  findAll() {
    return this.prisma.programme.findMany({
      include:{Category:true}
    });
  }

  findOne(id: number) {
    return this.prisma.programme.findUnique({ where: { id } });
  }

  update(id: number, updateProgrammeDto: UpdateProgrammeDto) {
    return this.prisma.programme.update({
      where: { id },
      data: updateProgrammeDto,
    });
  }

  remove(id: number) {
    return this.prisma.programme.delete({ where: { id } });
  }
}
