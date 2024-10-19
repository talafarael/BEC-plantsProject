import { Body, Controller, Get, Post } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';

@Controller('user')
export class PostsController {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'posts',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'posts-consumer',
      },
    },
  })
  client: ClientKafka;
  async onModuleInit() {
    // this.client.subscribeToResponseOf('add.new.post');
    this.client.subscribeToResponseOf('get.posts.list');

    await this.client.connect();
  }

  @Get('/')
  getList() {
    return this.client.send('get.posts.list', '');
  }
}
