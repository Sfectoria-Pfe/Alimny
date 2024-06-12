import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SessionService } from './session.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Session')
@Controller('session')
export class SessionController {
  constructor(private readonly SessionService: SessionService) {}

  @Post()
  create(@Body() createSessionDto: CreateSessionDto) {
    return this.SessionService.create(createSessionDto);
  }

  @Get()
  findAll() {
    return this.SessionService.findAll();
  }
@Get("/getStudentsBySession/:id")
findAllSessionsForStudents(@Param('id') id:string ){
return this.SessionService.findStudentsBySession(+id)
}
@Get("/getTeachersBySession/:id")
findAllSessionsForTeachers(@Param('id') id:string ){
return this.SessionService.findTeachersBySession(+id)
}
@Get("/getstudents/:id")
findAllstudents(@Param('id') id:string ){
return this.SessionService.findAllStudentsInSession(+id)
}
@Get("/getTeachers/:id")
findAllteachers(@Param('id') id:string ){
return this.SessionService.findAllTeacherInSession(+id)
}


@Get("/get/allStudents")
findAllStudents(){
  return this.SessionService.getAllStudents
}
@Get("/get/getAllTeachers")
findAllTeachers(){
  return this.SessionService.getAllStudents
}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.SessionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSessionDto: UpdateSessionDto,
  ) {
    return this.SessionService.update(+id, updateSessionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.SessionService.remove(+id);
  }
}
