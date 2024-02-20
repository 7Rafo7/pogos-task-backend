import { Controller, Post, Body, Get } from '@nestjs/common';
import { ChatService } from './chat.service';
import { MessageDto } from './dto/message.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('send-message')
  async sendMessage(@Body() messageDto: MessageDto) {
    return this.chatService.addMessage(messageDto);
  }

  @Get('get-messages')
  async getMessages() {
    return this.chatService.getMessages();
  }


}