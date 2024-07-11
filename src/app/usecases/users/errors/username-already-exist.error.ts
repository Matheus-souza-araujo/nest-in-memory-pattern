import { BadRequestException } from '@nestjs/common';

export class UsernameAlreadyExistError extends BadRequestException {
  constructor() {
    super('This username is already in use');
  }
}
