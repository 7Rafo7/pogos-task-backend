import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService } from './chat.service';
import { MessageDto } from './dto/message.dto';

@WebSocketGateway({ cors: { origin: 'http://localhost:3000', credentials: true } })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  constructor(private readonly chatService: ChatService) {}

  handleConnection(socket: Socket) {
    console.log('Client connected:', socket.id);
  }

  handleDisconnect(socket: Socket) {
    console.log('Client disconnected:', socket.id);
  }

  @SubscribeMessage('chatMessage')
  async handleMessage(client: Socket, messageDto: MessageDto) {
    this.chatService.addMessage(messageDto);
    const messages = this.chatService.getMessages();
    this.server.emit('chatMessage', messages);
  }

  @SubscribeMessage('getMessages')
  async handleGetMessages(client: Socket) {
    const messages = this.chatService.getMessages();
    client.emit('getMessages', messages);
  }
}