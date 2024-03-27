import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateProgrammeDto {
    @ApiProperty()
    @IsString()
    name : string
    description : string
    categoryId : number
}
