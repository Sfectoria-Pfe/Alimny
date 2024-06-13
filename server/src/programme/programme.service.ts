import { Session } from './../session/entities/session.entity';
import { Injectable } from '@nestjs/common';
import { CreateProgrammeDto } from './dto/create-programme.dto';
import { UpdateProgrammeDto } from './dto/update-programme.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProgrammeService {
  constructor(private prisma: PrismaService) {}
  async create(dto: CreateProgrammeDto) {
    const {programmeModules,...rest} = dto
    const response = await this.prisma.programme.create({
       data: rest
      });
      for(let e of programmeModules) {
        await this.prisma.programmeModule.create({
          data : {
            programmeId : response.id,
            moduleId : e
          }
        })
      }
      return response 
  }

  findAll() {
    return this.prisma.programme.findMany({
      include:{Category:true,session:true,programmemodule:true}
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
