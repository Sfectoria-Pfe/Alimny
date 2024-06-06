import { ApiProperty } from "@nestjs/swagger";

export class CreateMessageDto {
    @ApiProperty()
    text : string 
    @ApiProperty()
    sessionId : number
    @ApiProperty()
    senderId : number
}
