import { Injectable } from '@nestjs/common';
import { Context } from 'src/context';

interface CreateUser {
  name: string;
  password: string;
}
@Injectable()
export class UserService {
  async create(user: CreateUser, ctx: Context) {
    try {
      const res = await ctx.prisma.admin.create({ data: user });
      return res;
    } catch (e) {}
  }
}
