import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should call create method with correct data', async () => {
    const createUserDto: CreateUserDto = { name: 'John Doe' };
    const spy = jest
      .spyOn(userService, 'create')
      .mockImplementation(() => 'This action adds a new user');

    const result = await userController.create(createUserDto);

    expect(spy).toHaveBeenCalledWith(createUserDto);
    expect(result).toBe('This action adds a new user');
  });
});
