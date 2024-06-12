import { SessionStudent } from './../session-student/entities/session-student.entity';
import { ProgrammeModule } from './../programme-modules/entities/programme-module.entity';
import { Injectable } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SessionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateSessionDto) {
    return await this.prisma.session.create({
      data: dto,
    });
  }

  async findStudentsBySession(id: number) {
    return this.prisma.session.findMany({
      where: {
        sessionstudent: {
          some: {
            studentId: id,
          },
        },
      },
    });
  }

  async findTeachersBySession(id: number) {
    return this.prisma.session.findMany({
      where: {
        sessionteacher: {
          some: {
            employeeId: id,
          },
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.session.findMany({
      include: {
        Programme: {
          include: {
            programmemodule: {
              include: {
                Module: true,
              },
            },
          },
        },
        weeks: true,
        sessionteacher: true,
        sessionstudent: true,
      },
    });
  }

  async getAllTeachers(){
    return await this.prisma.user.findMany({
      where : {
        role : "teacher"
      }
    })
  }

  async getAllStudents(){
    return await this.prisma.user.findMany({
      where : {
        role : "student"
      }
    })
  }

  async findOne(id: number) {
    return await this.prisma.session.findFirst({
      where: {
        id,
      },
    });
  }
  async findAllTeacherInSession(id: number) {
    return await this.prisma.employee.findMany({
      where: {
        sessionteacher: {
          some: {
            sessionId: id,
          },
        },
      },
      include : {
        user : true
      }
    });
  }
  async findAllStudentsInSession(id: number) {
    return await this.prisma.student.findMany({
      where: {
        sessionstudent: {
          some: {
            sessionId: id,
          },
        },
      },
      include : {
        user : {
          include : {
            Gouvernorat : true
          }
        }
      }
    });
  }

  async update(id: number, dto: UpdateSessionDto) {
    return await this.prisma.session.update({
      where: {
        id,
      },
      data: dto,
    });
  }

  async remove(id: number) {
    return this.prisma.session.delete({
      where: {
        id,
      },
    });
  }
}
