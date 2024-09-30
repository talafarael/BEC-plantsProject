import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

import { createMock } from '@golevelup/ts-jest';
import { UserController } from './user.controller';
import { MockContext, Context, createMockContext } from '../context';

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
  describe('create', () => {
    const user = {
      id: 'aaa',
      name: 'Rich',
      password: 'aaaa',
    };

    it('should be defined', async () => {
      await mockCtx.prisma.admin.create.mockResolvedValue(user);
      expect(userService.create(user, ctx)).resolves.toEqual(user);
    });
  });
});
