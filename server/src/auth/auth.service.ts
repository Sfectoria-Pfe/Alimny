
import { UpdateUserDto } from './../users/dto/update-user.dto';
import { UpdateAgendaDto } from './../agenda/dto/update-agenda.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,

  ) {}
  async login(Dto: CreateAuthDto) {
    
    const user = await this.prisma.user.findUnique({ where: { email:Dto.email } ,
    include : {
      Student : true,
      Employee : true
    }});
    if (!user) {
      throw new HttpException('invalid email', HttpStatus.BAD_REQUEST);
    }
    const validpassword = await bcrypt.compare(Dto.password, user.password);
    if (!validpassword) {
      throw new HttpException('invalid Password', HttpStatus.BAD_REQUEST);
    }
    const{password,...rest}=user
    const token = await this.jwtService.signAsync(rest);
    return token;
  }

  async getMyInfo(token: string) {
    const myInfo = this.jwtService.decode(token);
    console.log(myInfo,"myInfo");
    
    return myInfo;
  }
  
  singup(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

 async  update(id: number, dto: UpdateUserDto) {
  console.log(dto)
  const response =  await this.prisma.user.update({
      where: { id },
      data: dto,
    });
    const token = await this.jwtService.signAsync(response);
    return token;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
