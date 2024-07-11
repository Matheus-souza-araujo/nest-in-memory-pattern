import { BadRequestException } from '@nestjs/common';

export class EmailAlreadyExistError extends BadRequestException {
  constructor() {
    super('This email is already in use');
  }
}
