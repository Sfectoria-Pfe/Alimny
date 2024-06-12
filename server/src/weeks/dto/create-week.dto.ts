import { ApiProperty } from "@nestjs/swagger";

export class CreateWeekDto {
    @ApiProperty()
    name: string
    @ApiProperty()
    courseContentId?:[number]
    @ApiProperty()
    sessionId?:number
}
