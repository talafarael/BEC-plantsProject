import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
@Controller('plants')
export class PlantsController {
  constructor(
    @Inject('PLANTS_MICROSERVICE') private readonly user_client: ClientProxy,
  ) {}

  @Get('/plants')
   async plants() {
    console.log('AAAA')
    const data = {}; // Or any appropriate data to send
   await this.user_client.send('pl', data); // Provide both the event name and the data
    return;
  }
}
