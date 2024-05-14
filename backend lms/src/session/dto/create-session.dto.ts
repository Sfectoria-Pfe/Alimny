import { ApiProperty } from "@nestjs/swagger"
import { IsDate, IsNumber, IsString } from "class-validator"

export class CreateSessionDto {
    @ApiProperty()
    @IsNumber()
    programmeId:number
    @IsString()
    @ApiProperty()
    name:string
    @IsString()
    @ApiProperty()
    description:string
    @ApiProperty()
    @IsDate()
    date:Date
}
