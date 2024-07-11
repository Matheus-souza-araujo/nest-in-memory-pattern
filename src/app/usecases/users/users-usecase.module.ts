import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { CreateUserUseCase } from './create-user.usecase';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [CreateUserUseCase],
  exports: [CreateUserUseCase],
})
export class UsersUseCaseModule {}
