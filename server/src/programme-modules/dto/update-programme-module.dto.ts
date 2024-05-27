import { PartialType } from '@nestjs/swagger';
import { CreateProgrammeModuleDto } from './create-programme-module.dto';

export class UpdateProgrammeModuleDto extends PartialType(CreateProgrammeModuleDto) {}
