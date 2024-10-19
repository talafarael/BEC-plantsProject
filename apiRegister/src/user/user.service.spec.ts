import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

import { createMock } from '@golevelup/ts-jest';
import { UserController } from './user.controller';

import { RegisterUserDto } from './dto/create-user.dto';
import { prismaMock } from '../singleton';
import prisma from '../client';
import { PrismaService } from '../prisma.service';
// import { generateAccessToken } from 'utils/generationToken';
const userMock = {
  id: 'aa',
  name: 'Rich',
  password: 'aaaa',
};
const db = {
  user: {
    create: jest.fn().mockReturnValue(userMock),
  },
};
describe('UserService', () => {
  let userService: UserService;
  let prisma: PrismaService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, { provide: PrismaService, useValue: db }],
      controllers: [UserController],
    }).compile();

    userService = module.get<UserService>(UserService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  describe('register', () => {
    const user: RegisterUserDto = {
      name: 'Rich',
      password: 'aaaa',
    };

    beforeEach(() => {
      jest.clearAllMocks();
    });
    // it('Name is required', async () => {
    //   await prismaMock.user.findFirst.mockResolvedValue(userMock);

    //   expect(userService.register(user)).rejects.toThrowError(
    //     'Name is required',
    //   );
    // });
    it('user successful create', async () => {
      // prismaMock.user.findFirst.mockResolvedValue(undefined);
      jest.spyOn(prisma.user, 'create').mockResolvedValue(userMock);
      // const token = generateAccessToken(userMock.id, '1h');
      // console.log(token);
      await expect(userService.register(user)).resolves.toEqual({
        name: 'Rich',
      });
    });
  });
});
