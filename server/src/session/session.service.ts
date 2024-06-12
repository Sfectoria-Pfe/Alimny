import { ProgrammeModule } from './../programme-modules/entities/programme-module.entity';
import { Injectable } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable() 
export class SessionService {
  constructor(private readonly prisma:PrismaService){}

 async create(dto: CreateSessionDto) {
    return await this.prisma.session.create({
      data:dto
    })
  }

  async findStudentsBySession(id: number) {
    return this.prisma.sessionStudent.findMany({
      where : {
        sessionId : id,
        
      }
    })
      
    }

  async  findAll() {
    return await this.prisma.session.findMany({
      include: {
        Programme :{
            include : {
              programmemodule : {
                include : {
                  Module : true
                }
              }
            }
        },
        weeks  :true,
        sessionteacher : true , 
        sessionstudent : true
      }
    })
  }

  async  findOne(id: number) {
    return await this.prisma.session.findFirst({
      where : {
        id
      }
    })
  }

  async  update(id: number, dto: UpdateSessionDto) {
    return await this.prisma.session.update({
      where : {
        id
      },
      data : dto
    })
  }

  async  remove(id: number) {
    return this.prisma.session.delete({
      where : {
        id
      }
    })
  }
}
