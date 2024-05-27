import { Injectable } from '@nestjs/common';
import { CreateProgrammeModuleDto } from './dto/create-programme-module.dto';
import { UpdateProgrammeModuleDto } from './dto/update-programme-module.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable() 
export class ProgrammeModulesService {
  constructor(private readonly prisma:PrismaService){}

 async create(dto: CreateProgrammeModuleDto) {
    return await this.prisma.programmeModule.create({
      data:dto
    })
  }

  async  findAll() {
    return await this.prisma.programmeModule.findMany({})
  }

  async  findOne(id: number) {
    return await this.prisma.programmeModule.findFirst({
      where : {
        id
      }
    })
  }

  async  update(id: number, dto: UpdateProgrammeModuleDto) {
    return await this.prisma.programmeModule.update({
      where : {
        id
      },
      data : dto
    })
  }

  async  remove(id: number) {
    return this.prisma.programmeModule.delete({
      where : {
        id
      }
    })
  }
}
