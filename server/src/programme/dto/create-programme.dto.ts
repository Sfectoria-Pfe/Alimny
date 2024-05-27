import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateProgrammeDto {
    @ApiProperty()
    @IsString()
    name : string
    @ApiProperty()
    @IsString()
    description : string
    @ApiProperty()
    @IsNumber()
    categoryId : number
}
