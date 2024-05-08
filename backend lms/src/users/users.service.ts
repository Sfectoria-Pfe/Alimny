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
    console.log(salt,"salt");
    
    const hashedPassword=await bcrypt.hashSync(password,salt)
    console.log(hashedPassword,"hash");
    
    return await this.prisma.user.create({ data:{...rest,password:hashedPassword} });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, UpdateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: UpdateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
