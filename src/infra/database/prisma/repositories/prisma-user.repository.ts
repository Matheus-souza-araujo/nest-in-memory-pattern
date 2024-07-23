import { UserEntity } from '@app/entities/user.entity';
import { UserRepository } from '@app/repositories/user.repository';
import { Injectable } from '@nestjs/common';
import { PrismaUserMapper } from '../mappers/prisma-user.mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async create(user: UserEntity): Promise<Partial<UserEntity>> {
    const userToPrisma = PrismaUserMapper.toPrisma(user);

    const createdUser = await this.prismaService.user.create({
      data: userToPrisma,
      select: {
        userId: true,
        username: true,
        password: false,
        fullName: true,
        email: true,
        phoneNumber: true,
        address: true,
        country: true,
        preferredLanguage: true,
        role: true,
        permissions: true,
        profilePictureUrl: true,
        biography: true,
        accountStatus: true,
        lastLogin: true,
        notificationPreferences: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return PrismaUserMapper.toDomain(createdUser);
  }
  findById(userId: string): Promise<UserEntity> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<UserEntity[]> {
    throw new Error('Method not implemented.');
  }
  async findByUserName(username: string, userId?: string): Promise<UserEntity> {
    const user = await this.prismaService.user.findUnique({
      where: {
        username,
        NOT: { userId: userId },
      },
    });

    if (!user) {
      return null;
    }

    return PrismaUserMapper.toDomain(user);
  }

  async findByEmail(email: string, userId?: string): Promise<UserEntity> {
    const user = await this.prismaService.user.findUnique({
      where: { email, NOT: { userId: userId } },
    });

    if (!user) {
      return null;
    }

    return PrismaUserMapper.toDomain(user);
  }
  async update(user: Partial<UserEntity>): Promise<void> {
    await this.prismaService.user.update({
      where: { userId: user.userId },
      data: PrismaUserMapper.toPrisma(user),
    });
  }
  delete(userId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
