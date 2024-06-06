import { ApiProperty } from '@nestjs/swagger';
import { TypeContent } from "@prisma/client"
import { IsNumber, IsString } from 'class-validator';

export class CreateCourseContentDto {
    @ApiProperty()
    @IsString()
    name:string
    @ApiProperty()
    type        :TypeContent
    @ApiProperty()
    @IsNumber()
    courseId   :number
    @ApiProperty()
    @IsString()
    path : string 
}
