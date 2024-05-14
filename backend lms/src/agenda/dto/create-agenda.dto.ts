import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsString } from "class-validator";

export class CreateAgendaDto {
    @ApiProperty()
    @IsString()
    title: string;
    @ApiProperty()
    @IsString()
    start?:string
}
