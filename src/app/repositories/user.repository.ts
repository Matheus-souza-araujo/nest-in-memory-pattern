import { UserEntity } from '@app/entities/user.entity';

export abstract class UserRepository {
  abstract create(user: UserEntity): Promise<Partial<UserEntity>>;
  abstract findById(userId: string): Promise<UserEntity>;
  abstract findAll(): Promise<UserEntity[]>;
  abstract findByUserName(username: string): Promise<UserEntity>;
  abstract findByEmail(email: string): Promise<UserEntity>;
  abstract update(user: Partial<UserEntity>): Promise<void>;
  abstract delete(userId: string): Promise<void>;
}
