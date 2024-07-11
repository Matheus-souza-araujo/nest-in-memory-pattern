import { CreateUserUseCase } from '@app/usecases/users/create-user.usecase';
import { CrateUserDTO } from '@infra/http/dto/users/create-user.dto';
import { UserViewModel } from '@infra/http/view-models/user.view-model';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('notifications')
export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

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
}
