import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';

import { RegisterUserDto } from './dto/create-user.dto';
import { ContextCreator } from '@nestjs/core/helpers/context-creator';
import { Context } from 'src/context';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @UsePipes(new ValidationPipe())
  async register(@Body() user: RegisterUserDto, @Body('ctx') ctx: Context) {
    return this.userService.register(user,ctx);
  }
}
