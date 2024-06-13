import { ApiProperty } from '@nestjs/swagger';
export class CreateTeacherDto {
    @ApiProperty()
    sessionId:number
    @ApiProperty()
    employeeId : number
}
