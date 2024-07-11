import { UserRepository } from '@app/repositories/user.repository';
import { Injectable } from '@nestjs/common';
import { UsernameAlreadyExistError } from './errors/username-already-exist.error';
import { AccountStatusEnum, UserEntity } from '@app/entities/user.entity';
import { EmailAlreadyExistError } from './errors/email-already-exist.error';

export type CreateUserRequest = {
  username: string;
  password: string;
  fullName: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  country?: string;
  preferredLanguage: string;
  role: string;
  permissions: string[];
  profilePictureUrl?: string;
  biography?: string;
};

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({
    username,
    password,
    fullName,
    email,
    phoneNumber,
    address,
    country,
    preferredLanguage,
    role,
    permissions,
    profilePictureUrl,
    biography,
  }: CreateUserRequest): Promise<Partial<UserEntity>> {
    const alreadyExistUsername =
      await this.userRepository.findByUserName(username);

    if (alreadyExistUsername) {
      throw new UsernameAlreadyExistError();
    }

    const alreadyExistEmail = await this.userRepository.findByEmail(email);

    if (alreadyExistEmail) {
      throw new EmailAlreadyExistError();
    }

    const user = new UserEntity({
      username,
      password,
      fullName,
      email,
      phoneNumber,
      address,
      country,
      preferredLanguage,
      role,
      permissions,
      profilePictureUrl,
      biography,
      accountStatus: AccountStatusEnum.ACTIVE,
    });

    return await this.userRepository.create(user);
  }
}
