import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { CreateUserUseCase } from './create-user.usecase';
import { FindOneUserUseCase } from './find-one-user.usecase';
import { UpdateUserUseCase } from './update-user.usecase';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [CreateUserUseCase, FindOneUserUseCase, UpdateUserUseCase],
  exports: [CreateUserUseCase, FindOneUserUseCase, UpdateUserUseCase],
})
export class UsersUseCaseModule {}
