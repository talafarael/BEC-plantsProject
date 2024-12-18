import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RegisterUserDto } from './user.dto';


@Controller('user')
export class AuthController {
  constructor(
    @Inject('USER_MICROSERVICE') private readonly user_client: ClientProxy,
  ) {}

  @Get('/')
  async getList() {
    console.log("AAA")
    const data = await this.user_client.send('getList', {}).toPromise();
    console.log(data); // Or any appropriate data to send
    return data; // Provide both the event name and the data
  }
  @Post('/register')
  async registert(@Body() user: RegisterUserDto) {
    console.log("AAA")
    const data = await this.user_client.send('register', user).toPromise();
    console.log(data); // Or any appropriate data to send
    return data; // Provide both the event name and the data
  }


}
