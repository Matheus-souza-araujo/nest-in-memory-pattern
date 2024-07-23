import { UserRepository } from '@app/repositories/user.repository';
import { Injectable } from '@nestjs/common';
import { UsernameAlreadyExistError } from './errors/username-already-exist.error';
import { EmailAlreadyExistError } from './errors/email-already-exist.error';

export type UpdateUserRequest = {
  userId: string;
  username?: string;
  password?: string;
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  country?: string;
  preferredLanguage?: string;
  role?: string;
  permissions?: string[];
  profilePictureUrl?: string;
  biography?: string;
};

@Injectable()
export class UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({
    userId,
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
  }: UpdateUserRequest): Promise<void> {
    const alreadyExistUsername = await this.userRepository.findByUserName(
      username,
      userId,
    );

    if (alreadyExistUsername) {
      throw new UsernameAlreadyExistError();
    }

    const alreadyExistEmail = await this.userRepository.findByEmail(email);

    if (alreadyExistEmail) {
      throw new EmailAlreadyExistError();
    }

    const user = await this.userRepository.findById(userId);

    user.username = username;
    user.password = password;
    user.fullName = fullName;
    user.email = email;
    user.phoneNumber = phoneNumber;
    user.address = address;
    user.country = country;
    user.preferredLanguage = preferredLanguage;
    user.role = role;
    user.permissions = permissions;
    user.profilePictureUrl = profilePictureUrl;
    user.biography = biography;

    await this.userRepository.update(user);
  }
}
