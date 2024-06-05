import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';

@ApiTags("messages")
@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) {}


    @Post()
    create(@Body() createMessageDto: CreateMessageDto) {
        return this.messagesService.create(createMessageDto)
    }

    @Get(':id')
    findAll(@Param('id') id: string) {
        return this.messagesService.findOne(+id)
    }
}
