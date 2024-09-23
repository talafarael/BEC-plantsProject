import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { HttpService } from '@nestjs/axios';
import { createMock, DeepMocked } from '@golevelup/ts-jest';
describe('UserService', () => {
  let service: UserService;
  let httpService: DeepMocked<HttpService>;
  const mockUserRepository = {
    create: jest.fn(),
    // find: jest.fn(),
    // findOne: jest.fn(),
    // delete: jest.fn(),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    })
      .useMocker(createMock)
      .compile();

    service = module.get<UserService>(UserService);
  });
  describe('create', () => {
    it('should be defined', async () => {
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
