import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SessionStudentService } from './session-student.service';
import { CreateSessionStudentDto } from './dto/create-session-student.dto';
import { UpdateSessionStudentDto } from './dto/update-session-student.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('session-student')
@Controller('session-student')
export class SessionStudentController {
  constructor(private readonly sessionStudentService: SessionStudentService) {}

  @Post()
  create(@Body() createSessionStudentDto: CreateSessionStudentDto) {
    return this.sessionStudentService.create(createSessionStudentDto);
  }

  @Get()
  findAll() {
    return this.sessionStudentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sessionStudentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSessionStudentDto: UpdateSessionStudentDto) {
    return this.sessionStudentService.update(+id, updateSessionStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sessionStudentService.remove(+id);
  }
}
