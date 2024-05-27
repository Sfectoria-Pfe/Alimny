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

  async  findAll() {
    return await this.prisma.session.findMany({})
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
