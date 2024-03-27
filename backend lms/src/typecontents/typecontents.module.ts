import { Module } from '@nestjs/common';
import { TypecontentsService } from './typecontents.service';
import { TypecontentsController } from './typecontents.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TypecontentsController],
  providers: [TypecontentsService,PrismaService],
})
export class TypecontentsModule {}
