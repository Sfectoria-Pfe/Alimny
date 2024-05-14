import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, isEmail } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  fullName: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  isStudent: boolean;
  @ApiProperty()
role : any
}
