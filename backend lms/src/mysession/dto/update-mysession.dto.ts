import { PartialType } from '@nestjs/swagger';
import { CreateMysessionDto } from './create-mysession.dto';

export class UpdateMysessionDto extends PartialType(CreateMysessionDto) {}
