import { Injectable } from '@nestjs/common';
import { CreateTypecontentDto } from './dto/create-typecontent.dto';
import { UpdateTypecontentDto } from './dto/update-typecontent.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TypecontentsService {
  constructor(private prisma: PrismaService) {}
  create(createTypecontentDto: CreateTypecontentDto) {
    return this.prisma.typeContect.create({data:createTypecontentDto})
   
  }

  findAll() {
    return this.prisma.typeContect.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} typecontent`;
  }

  update(id: number, updateTypecontentDto: UpdateTypecontentDto) {
    return `This action updates a #${id} typecontent`;
  }

  remove(id: number) {
    return `This action removes a #${id} typecontent`;
  }
}
