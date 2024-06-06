import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProgrammeModule } from './programme/programme.module';
import { CourseModule } from './course/course.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';

import { SessionModule } from './session/session.module';
import { AgendaModule } from './agenda/agenda.module';
import { ProgrammeModulesModule } from './programme-modules/programme-modules.module';
import { SessionStudentModule } from './session-student/session-student.module';
import { ModulesModule } from './modules/modules.module';
import { MessagesModule } from './messages/messages.module';





@Module({
<<<<<<< HEAD
  imports: [PrismaModule, ProgrammeModule, CourseModule, UsersModule, AuthModule, CategoriesModule, SessionModule, AgendaModule,ModulesModule],
=======
  imports: [PrismaModule, ProgrammeModule, CourseModule, UsersModule, AuthModule, CategoriesModule, SessionModule, AgendaModule, ProgrammeModulesModule, SessionStudentModule, ModulesModule, MessagesModule],
>>>>>>> 1a69133121f5ed22c0faf0e765986025d5a7cccf
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
