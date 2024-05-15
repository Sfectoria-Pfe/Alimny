import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateSessionStudentDto {
    @IsNumber()
    @ApiProperty()
    sessionId: number;
    @IsNumber()
    @ApiProperty()
    studentId: number;
}
