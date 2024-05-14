import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateProgrammeModuleDto {
   @IsNumber()
   @ApiProperty()
   programmeId:number
   @IsNumber()
   @ApiProperty()
   moduleId:number
}
