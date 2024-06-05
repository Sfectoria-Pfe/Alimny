import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class MessagesGateway {
  constructor(private readonly messagesService: MessagesService) {}
  @WebSocketServer() server: Server;

  @SubscribeMessage('message')
  async handleMessage(@MessageBody() data : {sessionId : number , text : string , senderId : number}) {
    const message = await this.messagesService.create(data);
    this.server.emit('message', message);
  }
}
