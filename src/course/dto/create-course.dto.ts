import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateCourseDto {
@ApiProperty()
@IsString()
name:string;
description :string
}