import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
@Controller('user')
export class PlantsController {
  constructor(
    @Inject('PLANTS_MICROSERVICE') private readonly user_client: ClientProxy,
  ) {}

  @Get('/plants')
  getList() {
    const data = {}; // Or any appropriate data to send
    this.user_client.emit('/', data); // Provide both the event name and the data
    return;
  }
}
