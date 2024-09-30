import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

import { createMock } from '@golevelup/ts-jest';
import { UserController } from './user.controller';
import { CreateUserDto } from './dto/create-user.dto';
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
    it('should be defined', async () => {});
  });
});
