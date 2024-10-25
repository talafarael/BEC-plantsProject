import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('plants')
export class PlantsController {
  constructor(
    @Inject('PLANTS_MICROSERVICE') private readonly user_client: ClientProxy,
  ) {}

  @Get('/plants')
  async plants() {
    console.log('Sending message to TCP server');
    const data = { message: 'Hello from NestJS!' }; // Пример данных для отправки
    await this.user_client.emit('pl', data); // Убедитесь, что вы передаете корректные данные
    return { status: 'Message sent' };
  }
}
