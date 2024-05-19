import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProgrammeModulesService } from './programme-modules.service';
import { CreateProgrammeModuleDto } from './dto/create-programme-module.dto';
import { UpdateProgrammeModuleDto } from './dto/update-programme-module.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('programme-modules')
@Controller('programme-modules')
export class ProgrammeModulesController {
  constructor(private readonly ProgrammeModulesService: ProgrammeModulesService) {}

  @Post()
  create(@Body() createCategoryDto: CreateProgrammeModuleDto) {
    return this.ProgrammeModulesService.create(createCategoryDto);
  }

  @Get()
  findAll() {
    return this.ProgrammeModulesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ProgrammeModulesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProgrammeModuleDto: UpdateProgrammeModuleDto,
  ) {
    return this.ProgrammeModulesService.update(+id, updateProgrammeModuleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ProgrammeModulesService.remove(+id);
  }
}
