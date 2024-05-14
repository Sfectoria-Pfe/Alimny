import { Injectable } from '@nestjs/common';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable() 
export class DashboardsService {
  constructor(private readonly prisma:PrismaService){}

 async create(dto: CreateDashboardDto) {
    return await this.prisma.dashboard.create({
      data:dto
    })
  }

  async  findAll() {
    return await this.prisma.dashboard.findMany({})
  }

  async  findOne(id: number) {
    return await this.prisma.dashboard.findFirst({
      where : {
        id
      }
    })
  }

  async  update(id: number, dto: UpdateDashboardDto) {
    return await this.prisma.category.update({
      where : {
        id
      },
      data : dto
    })
  }

  async  remove(id: number) {
    return this.prisma.dashboard.delete({
      where : {
        id
      }
    })
  }
}
