import { Injectable } from '@nestjs/common';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { UpdateAgendaDto } from './dto/update-agenda.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AgendaService {
  constructor(private readonly prisma:PrismaService){}

 async create(dto: CreateAgendaDto) {
    return await this.prisma.agenda.create({
      data:dto
    })
  }

  async  findAll() {
    return await this.prisma.agenda.findMany({})
  }

  async  findOne(id: number) {
    return await this.prisma.agenda.findFirst({
      where : {
        id
      }
    })
  }

  async  update(id: number, dto: UpdateAgendaDto) {
    return await this.prisma.agenda.update({
      where : {
        id
      },
      data : dto
    })
  }

  async  remove(id: number) {
    return this.prisma.agenda.delete({
      where : {
        id
      }
    })
  }
}
