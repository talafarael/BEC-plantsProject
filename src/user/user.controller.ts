import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { Context } from 'src/context';
import { RegisterUserDto } from './dto/create-user.dto';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() user: RegisterUserDto, @Body('ctx') ctx: Context) {
    return this.userService.register(user, ctx);
  }
}
