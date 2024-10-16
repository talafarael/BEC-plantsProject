import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

import { createMock } from '@golevelup/ts-jest';
import { UserController } from './user.controller';
import { MockContext, Context, createMockContext } from '../context';
import { RegisterUserDto } from './dto/create-user.dto';
import { generateAccessToken } from 'utils/generationToken';

describe('UserService', () => {
  let userService: UserService;
  let mockCtx: MockContext;
  let ctx: Context;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
      controllers: [UserController],
    })
      .useMocker(createMock)
      .compile();
    mockCtx = createMockContext();
    ctx = mockCtx as unknown as Context;
    userService = module.get<UserService>(UserService);
  });
  describe('register', () => {
    const user: RegisterUserDto = {
      name: 'Rich',
      password: 'aaaa',
    };
    const userMock = {
      id: 'aa',
      name: 'Rich',
      password: 'aaaa',
    };
    beforeEach(() => {
      jest.clearAllMocks();
    });
    it('Name is required', async () => {
      await mockCtx.prisma.user.findFirst.mockResolvedValue(userMock);

      expect(userService.register(user, ctx)).rejects.toThrowError(
        'Name is required',
      );
    });
    it('user successful create', async () => {
      mockCtx.prisma.user.findFirst.mockResolvedValue(undefined);
      mockCtx.prisma.user.create.mockResolvedValue(userMock);
      const token = generateAccessToken(userMock.id, '1h');
      console.log(token);
      await expect(userService.register(user, ctx)).resolves.toBe({
        token,
      });
    });
  });
});
