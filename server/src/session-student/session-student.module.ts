import { Module } from '@nestjs/common';
import { SessionStudentService } from './session-student.service';
import { SessionStudentController } from './session-student.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SessionStudentController],
  providers: [SessionStudentService,PrismaService],
})
export class SessionStudentModule {}
