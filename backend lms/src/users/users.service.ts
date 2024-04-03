import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt'



@Injectable()
export class UsersService {
  constructor(private   prisma: PrismaService) {


  }
  async create(Dto: CreateUserDto) {
    const {password,...rest}=Dto
    const salt= await bcrypt.genSalt()
    const hashedPassword=await bcrypt.hashSync(password,salt)
    return await this.prisma.user.create({ data:{...rest,password:hashedPassword} });
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
