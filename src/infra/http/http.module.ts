import { UsersUseCaseModule } from '@app/usecases/users/users-usecase.module';
import { Module } from '@nestjs/common';
import { CreateUserController } from './controllers/users/create-user.controller';

@Module({
  imports: [UsersUseCaseModule],
  providers: [],
  exports: [],
  controllers: [CreateUserController],
})
export class HttpModule {}
