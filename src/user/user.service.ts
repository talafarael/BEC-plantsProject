import { Injectable } from '@nestjs/common';
import prisma from 'src/client';
interface CreateUser {
  name: string;
  password: string;
}
@Injectable()
export class UserService {
  async create(user: CreateUser) {
    try {
      const res = await prisma.admin.create({ data: user });
      return res;
    } catch (e) {}
  }
}
