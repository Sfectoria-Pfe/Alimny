import { Module } from '@nestjs/common';
import { CourseContentsService } from './course-contents.service';
import { CourseContentsController } from './course-contents.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CourseContentsController],
  providers: [CourseContentsService,PrismaService],
})
export class CourseContentsModule {}
