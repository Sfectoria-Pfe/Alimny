import { Injectable } from '@nestjs/common';
import { CreateTypecontentDto } from './dto/create-typecontent.dto';
import { UpdateTypecontentDto } from './dto/update-typecontent.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TypecontentsService {
  constructor(private prisma: PrismaService) {}
 async create(createTypecontentDto: CreateTypecontentDto) {
    return await this.prisma.typeContent.create({data:createTypecontentDto})
   

  }

  findAll() {
    return this.prisma.typeContent.findMany();
  }

  findOne(id: number) {
    return this.prisma.typeContent.findUnique({ where: { id } });
  }

  update(id: number, updateTypecontentDto: UpdateTypecontentDto) {
    return this.prisma.typeContent.update({
      where: { id },
      data: updateTypecontentDto,
    });
  }

  remove(id: number) {
    return this.prisma.typeContent.delete({ where: { id } });
  }
}
