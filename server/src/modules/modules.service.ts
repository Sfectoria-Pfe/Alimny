import { Injectable } from '@nestjs/common';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ModulesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createModuleDto: CreateModuleDto) {
    return await this.prisma.module.create({
      data :createModuleDto
    })
  }

  async findAll() {
    return await this.prisma.module.findMany({});
  }

 async  findOne(id: number) {
    return await this.prisma.module.findUnique({where : {id}});
  }

  async update(id: number, updateModuleDto: UpdateModuleDto) {
    return await this.prisma.module.update({
      where : {
        id
      },
      data : updateModuleDto
    });
  }

  async remove(id: number) {
    return await this.prisma.module.delete({where : {id}});
  }
}