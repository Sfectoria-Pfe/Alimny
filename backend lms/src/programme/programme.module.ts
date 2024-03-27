import { Module } from '@nestjs/common';
import { ProgrammeService } from './programme.service';
import { ProgrammeController } from './programme.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProgrammeController],
  providers: [ProgrammeService,PrismaService],
  imports: [PrismaModule],
})
export class ProgrammeModule {}
