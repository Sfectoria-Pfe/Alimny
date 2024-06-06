import { Injectable } from '@nestjs/common';
import { CreateCourseContentDto } from './dto/create-course-content.dto';
import { UpdateCourseContentDto } from './dto/update-course-content.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CourseContentsService {
  constructor(private readonly prisma:PrismaService){}
 async create(createCourseContentDto: CreateCourseContentDto) {
    return await this.prisma.courseContent.create({
      data : createCourseContentDto
    })
  }

  findAll() {
    return `This action returns all courseContents`;
  }

 async findOne(id: number) {
    return await this.prisma.courseContent.findUnique({
      where  : {
        id : id
      }
    })
  }

  update(id: number, updateCourseContentDto: UpdateCourseContentDto) {
    return `This action updates a #${id} courseContent`;
  }

  remove(id: number) {
    return `This action removes a #${id} courseContent`;
  }
}
