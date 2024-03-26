import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateTypecontentDto {
    @ApiProperty()
    @IsString()
    desription: string
    name: string 
    
}
