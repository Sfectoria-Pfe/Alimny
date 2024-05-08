import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TypecontentsModule } from './typecontents/typecontents.module';
import { ProgrammeModule } from './programme/programme.module';
import { CourseModule } from './course/course.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DashboardsModule } from './dashboards/dashboards.module';
import { ModulesModule } from './modules/modules.module';
import { ModulesModule } from './modules/modules.module';


@Module({
  imports: [PrismaModule, TypecontentsModule, ProgrammeModule, CourseModule, UsersModule, AuthModule, DashboardsModule, ModulesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
