import { Module } from '@nestjs/common';
import { AgendaService } from './agenda.service';
import { AgendaController } from './agenda.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AgendaController],
  providers: [AgendaService,PrismaService],
})
export class AgendaModule {}
