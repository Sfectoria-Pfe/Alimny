import { Module } from '@nestjs/common';
import { ProgrammeModulesService } from './programme-modules.service';
import { ProgrammeModulesController } from './programme-modules.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProgrammeModulesController],
  providers: [ProgrammeModulesService,PrismaService],
})
export class ProgrammeModulesModule {}
