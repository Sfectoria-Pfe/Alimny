import { Programme } from './../programme/entities/programme.entity';
import { Injectable } from '@nestjs/common';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ModulesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createModuleDto: CreateModuleDto) {
    const {Courses,...rest} = createModuleDto
    return await this.prisma.module.create({
      data: {
        ...rest,
        Courses : {
         create : Courses?.map(e=>{
          return {
            courseId : e
          }
         })
        },
      }
    });
  }

  async findAll() {
    return await this.prisma.module.findMany({
      include: {
        programmemodule: {
          include: { Programme: true },
        },
        Courses : {
          include : {
            Course : {
              include : {
                coursecontent : true
              }
            }
          }
        }
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.module.findUnique({ where: { id } });
  }

  async update(id: number, updateModuleDto: UpdateModuleDto) {
    const {Courses,...rest} = updateModuleDto
    return await this.prisma.module.update({
      where: {
        id,
      },
      data: rest
      
    });
  }

  async remove(id: number) {
    return await this.prisma.module.delete({ where: { id } });
  }
}
