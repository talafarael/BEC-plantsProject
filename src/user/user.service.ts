import { Injectable, NotFoundException } from '@nestjs/common';
import { Context } from 'src/context';
import { RegisterUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { generateAccessToken } from 'utils/generationToken';
import { PrismaService } from 'src/prisma.service';
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
      if (user) {
        throw new NotFoundException('Name is required');
      }

      dto.password = await bcrypt.hash(dto.password, 7);
      console.log(dto);
      const createUser = await this.prisma.user.create({
        data: dto,
      });

      const token = generateAccessToken(createUser.id, '1h');

      return {
        token,
      };
    } catch (e) {
      throw new NotFoundException(e);
    }
  }
  async login(dto: RegisterUserDto) {
    try {
    } catch (e) {
      throw new NotFoundException(e);
    }
  }
}
