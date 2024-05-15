import { PartialType } from '@nestjs/swagger';
import { CreateSessionStudentDto } from './create-session-student.dto';

export class UpdateSessionStudentDto extends PartialType(CreateSessionStudentDto) {}
