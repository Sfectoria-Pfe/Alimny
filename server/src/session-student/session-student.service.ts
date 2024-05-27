import { Injectable } from '@nestjs/common';
import { CreateSessionStudentDto } from './dto/create-session-student.dto';
import { UpdateSessionStudentDto} from './dto/update-session-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SessionStudentService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreateSessionStudentDto) {
    return await this.prisma.sessionStudent.create({
      data:dto
    })
  }

  async findAll() {
    return await this.prisma.sessionStudent.findMany({})
  }

  async findOne(id: number) {
    return await this.prisma.sessionStudent.findFirst({
      where : {
        id
      }
    })  }

  async update(id: number, dto: UpdateSessionStudentDto) {

    return await this.prisma.sessionStudent.update({
      where : {
        id
      },
      data : dto
    })  }

  async remove(id: number) {
    return this.prisma.sessionStudent.delete({
      where : {
        id
      }
    })  }
}
