import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypecontentsService } from './typecontents.service';
import { CreateTypecontentDto } from './dto/create-typecontent.dto';
import { UpdateTypecontentDto } from './dto/update-typecontent.dto';

@Controller('typecontents')
export class TypecontentsController {
  constructor(private readonly typecontentsService: TypecontentsService) {}

  @Post()
  create(@Body() createTypecontentDto: CreateTypecontentDto) {
    return this.typecontentsService.create(createTypecontentDto);
  }

  @Get()
  findAll() {
    return this.typecontentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typecontentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypecontentDto: UpdateTypecontentDto) {
    return this.typecontentsService.update(+id, updateTypecontentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typecontentsService.remove(+id);
  }
}
