import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  create() {
    try {
      const res = this.prisma.admin.create({
        data: {
          name: 'name',
          password: 'pass',
        },
      });
      return res;
    } catch (e) {}
  }
}
