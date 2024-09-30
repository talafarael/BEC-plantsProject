import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

import { createMock } from '@golevelup/ts-jest';
import { UserController } from './user.controller';

import { prismaMock } from 'src/singleton';
describe('UserService', () => {
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
      controllers: [UserController],
    })
      .useMocker(createMock)
      .compile();

    userService = module.get<UserService>(UserService);
  });
  describe('create', () => {
    const user = {
      id: 'aaa',
      name: 'Rich',
      password: 'aaaa',
    };
    prismaMock.admin.create.mockResolvedValue(user);
    it('should be defined', async () => {
      expect(userService.create(user)).toEqual(user);
    });
  });
});
