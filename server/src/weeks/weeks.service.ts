import { CourseContent } from './../course-contents/entities/course-content.entity';
import { Injectable } from '@nestjs/common';
import { CreateWeekDto } from './dto/create-week.dto';
import { UpdateWeekDto } from './dto/update-week.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WeeksService {
  constructor(private readonly prisma:PrismaService){}
 async create(createWeekDto: CreateWeekDto) {
    const week = await this.prisma.weeks.create({
      data : {
        name : createWeekDto.name,
        sessionId :createWeekDto.sessionId
      }
    })
    for(let e of createWeekDto.courseContentId) {
      await this.prisma.weekContent.create({
        data : {
          weeksId : week.id,
          courseContentId : e
        }
      })
    }
    return week
  }

  findAll() {
    return `This action returns all weeks`;
  }

 async  findAllWeeksforSession(id:number){
    return await this.prisma.weeks.findMany({
      where : {
        sessionId : id 
      },
      include : {
        weekcontent : {
          include : {
            CourseContent : true
          }
        }
      }
    })
  }
  findOne(id: number) {
    return `This action returns a #${id} week`;
  }

  update(id: number, updateWeekDto: UpdateWeekDto) {
    return `This action updates a #${id} week`;
  }

  remove(id: number) {
    return `This action removes a #${id} week`;
  }
}
