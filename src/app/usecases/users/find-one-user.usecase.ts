import { UserEntity } from '@app/entities/user.entity';
import { UserRepository } from '@app/repositories/user.repository';
import { UserNotFoundError } from './errors/user-not-found.error';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindOneUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userId: string): Promise<UserEntity> {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new UserNotFoundError();
    }

    return user;
  }
}
