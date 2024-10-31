import { Injectable, NotFoundException } from '@nestjs/common';

import { RegisterUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { generateAccessToken } from 'utils/generationToken';
import { PrismaService } from '../prisma.service';
import { LoginUserDto } from './dto/loginUser.dto';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async register(dto: RegisterUserDto) {
    try {
      console.log('all goofd');
      const user = await this.prisma.user.findFirst({
        where: {
          name: dto.name,
        },
      });
      console.log(dto);
      if (user) {
        throw new NotFoundException('Name is required');
      }

      dto.password = await bcrypt.hash(dto.password, 7);

      const createUser = await this.prisma.user.create({
        data: dto,
      });
      console.log(createUser);
      const token = generateAccessToken(createUser.id, '1h');

      return { token };
    } catch (e) {
      throw new NotFoundException(e);
    }
  }
  async login(dto: LoginUserDto) {
    try {
    } catch (e) {
      throw new NotFoundException(e);
    }
  }
  async getUser() {
    console.log('get user');
    return 'user get';
  }
}
