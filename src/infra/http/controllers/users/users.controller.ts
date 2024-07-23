import { CreateUserUseCase } from '@app/usecases/users/create-user.usecase';
import { FindOneUserUseCase } from '@app/usecases/users/find-one-user.usecase';
import { CrateUserDTO } from '@infra/http/dto/users/create-user.dto';
import { UserViewModel } from '@infra/http/view-models/user.view-model';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly findOneUserUsecase: FindOneUserUseCase,
  ) {}

  @Post()
  async createUserController(
    @Body()
    {
      username,
      address,
      biography,
      country,
      email,
      fullName,
      password,
      permissions,
      phoneNumber,
      preferredLanguage,
      profilePictureUrl,
      role,
    }: CrateUserDTO,
  ) {
    const user = await this.createUserUseCase.execute({
      username,
      address,
      biography,
      country,
      email,
      fullName,
      password,
      permissions,
      phoneNumber,
      preferredLanguage,
      profilePictureUrl,
      role,
    });

    return UserViewModel.toHttp(user);
  }

  @Get('/:userId')
  async findOneUser(@Param('userId') userId: string) {
    return UserViewModel.toHttp(await this.findOneUserUsecase.execute(userId));
  }

  @Put('/:userId')
  async updateUser() {
    return 'update user';
  }
}
