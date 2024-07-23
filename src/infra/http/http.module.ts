import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersUseCaseModule } from '@app/usecases/users/users-usecase.module';

@Module({
  imports: [UsersUseCaseModule],
  providers: [],
  exports: [],
  controllers: [UsersController],
})
export class HttpModule {}
