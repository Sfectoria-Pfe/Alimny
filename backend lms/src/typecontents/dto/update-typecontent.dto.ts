import { PartialType } from '@nestjs/mapped-types';
import { CreateTypecontentDto } from './create-typecontent.dto';

export class UpdateTypecontentDto extends PartialType(CreateTypecontentDto) {}
