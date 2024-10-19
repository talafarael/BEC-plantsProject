import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';

import { RegisterUserDto } from './dto/create-user.dto';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Post('register')
  // @UsePipes(new ValidationPipe())
  // async register(@Body() user: RegisterUserDto) {
  //   return this.userService.register(user);
  // }
  @MessagePattern('get.posts.list')
  getPosts() {
    return this.userService.getUser();
  }
}
