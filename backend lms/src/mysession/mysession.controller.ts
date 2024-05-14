import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MysessionService } from './mysession.service';
import { CreateMysessionDto } from './dto/create-mysession.dto';
import { UpdateMysessionDto } from './dto/update-mysession.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('mysession')
@Controller('mysession')
export class MysessionController {
  constructor(private readonly mysessionService: MysessionService) {}

  @Post()
  create(@Body() createMysessionDto: CreateMysessionDto) {
    return this.mysessionService.create(createMysessionDto);
  }

  @Get()
  findAll() {
    return this.mysessionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mysessionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMysessionDto: UpdateMysessionDto) {
    return this.mysessionService.update(+id, updateMysessionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mysessionService.remove(+id);
  }
}
