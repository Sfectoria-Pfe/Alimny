import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}
  async create(createCourseDto: CreateCourseDto) {
    return await this.prisma.course.create({ data: createCourseDto });
  }

  async findAll() {
    const result = await this.prisma.course.findMany({
      include : {
        coursecontent : true
      }
    });
    return result;
  }

  async findAllCourses(id:number){
    return await this.prisma.course.findMany({
      where : {
        modules : {
          some : {
            Module : {
              programmemodule : {
                some : {
                  Programme : {
                    session : {
                      some : {
                        id:id
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      include: {
        coursecontent:true
      }
    })
  }
  findOne(id: number) {
    return this.prisma.course.findUnique({ where: { id },include : {
      coursecontent : true
    } });
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
