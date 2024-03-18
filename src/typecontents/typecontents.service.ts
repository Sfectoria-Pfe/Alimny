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
    return this.prisma.typeContect.findUnique({ where: { id } });
  }

  update(id: number, updateTypecontentDto: UpdateTypecontentDto) {
    return this.prisma.typeContect.update({
      where: { id },
      data: updateTypecontentDto,
    });
  }

  remove(id: number) {
    return this.prisma.typeContect.delete({ where: { id } });
  }
}
