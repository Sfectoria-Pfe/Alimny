import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MessagesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createMessageDto: CreateMessageDto) {
    return await this.prisma.msgs.create({
      data: createMessageDto,
      include : {
        User : true
      }
    });
  }

  findAll() {
    return `This action returns all messages`;
  }

  async findOne(id: number) {
    return await this.prisma.msgs.findMany({
      where: {
        sessionId: id,
      },
      include : {
        User : true
      }
    });
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
