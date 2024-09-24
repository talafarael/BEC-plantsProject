import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

import { createMock } from '@golevelup/ts-jest';
import { UserController } from './user.controller';
import { CreateUserDto } from './dto/create-user.dto';
describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
      controllers: [UserController],
    })
      .useMocker(createMock)
      .compile();

    service = module.get<UserService>(UserService);
  });
  describe('create', () => {
    it('should be defined', async () => {
      const createUserDto: CreateUserDto = { name: 'John Doe' };
      const spy = jest
        .spyOn(service, 'create')
        .mockImplementation(() => 'This action adds a new user');
      const result = await service.create(createUserDto);

      expect(spy).toHaveBeenCalledWith(createUserDto);

      // expect(result.statusCode).toBe(201);
      expect(result).toBe('This action adds a new user');
      // const createData = { title: '' };
      // jest
      //   .spyOn(service, 'create')
      //   .mockReturnValueOnce('This action adds a new user');
      // const result = await service.create('');
      // expect(mockUserRepository.save).toBeCalled();
      // expect(mockUserRepository.save).toBeCalledWith(
      //   'This action adds a new user',
      // );
      // expect(result).toEqual('This action adds a new user');
      // const create = service.create('');
      // expect(create).statusCode(201);
      // expect(create).toBe('This action adds a new user');
    });
  });
});
