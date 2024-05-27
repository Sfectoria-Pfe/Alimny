import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class CategoriesService {
  constructor(private readonly prisma:PrismaService){}

 async create(dto: CreateCategoryDto) {
    return await this.prisma.category.create({
      data:dto
    })
  }

  async  findAll() {
    return await this.prisma.category.findMany({})
  }

  async  findOne(id: number) {
    return await this.prisma.category.findFirst({
      where : {
        id
      }
    })
  }

  async  update(id: number, dto: UpdateCategoryDto) {
    return await this.prisma.category.update({
      where : {
        id
      },
      data : dto
    })
  }

  async  remove(id: number) {
    return this.prisma.category.delete({
      where : {
        id
      }
    })
  }
}
