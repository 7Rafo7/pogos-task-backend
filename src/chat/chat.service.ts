import { Injectable, Scope } from "@nestjs/common";
import { MessageDto } from "./dto/message.dto";
import { Message } from "./interfaces/message.interface";

@Injectable()
export class ChatService {
  private messages: Message[] = [];

  addMessage(messageDto: MessageDto): Message {
    const message: Message = {
      senderId: messageDto.senderId,
      sender: messageDto.sender,
      message: messageDto.message,
      timestamp: new Date(),
    };
    this.messages.push(message);
    return message;
  }

  getMessages(): Message[] {
    return this.messages;
  }
}