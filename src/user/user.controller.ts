import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { Context } from 'src/context';

interface CreateUser {
  name: string;
  password: string;
}
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() user: CreateUser, @Body('ctx') ctx: Context) {
    return this.userService.create(user, ctx);
  }
}
