import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}
  create(createCourseDto: CreateCourseDto) {
    return "babang"
    // this.prisma.course.create({data: createCourseDto });
  }
  findDrafts() {
    return "babang"

    // this.prisma.course.findMany({ where: { published: false } });
  }
  findAll() {
    return "babang"

    // this.prisma.course.findMany({ where: { published: true } });
  }

  findOne(id: number) {
    return this.prisma.course.findUnique({ where: { id } });
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return this.prisma.course.update({
      where: { id },
      data: updateCourseDto,
    });
  }

  remove(id: number) {
    return this.prisma.course.delete({ where: { id } });
  }
}
