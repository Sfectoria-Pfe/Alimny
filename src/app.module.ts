import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TypecontentsModule } from './typecontents/typecontents.module';
import { ProgrammeModule } from './programme/programme.module';

@Module({
  imports: [PrismaModule, TypecontentsModule, ProgrammeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
