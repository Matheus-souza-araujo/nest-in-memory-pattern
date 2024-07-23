import { AccountStatusEnum, UserEntity } from '@app/entities/user.entity';
import { User } from '@prisma/client';

export class PrismaUserMapper {
  static toPrisma(user: Partial<UserEntity>): User {
    return {
      userId: user.userId,
      username: user.username,
      password: user.password,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      address: user.address,
      country: user.country,
      preferredLanguage: user.preferredLanguage,
      notificationPreferences: user.notificationPreferences,
      role: user.role,
      permissions: user.permissions,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      lastLogin: user.lastLogin,
      accountStatus: user.accountStatus,
      profilePictureUrl: user.profilePictureUrl,
      biography: user.biography,
    };
  }

  static toDomain(user: Partial<User>): UserEntity {
    return new UserEntity(
      {
        username: user.username,
        password: user.password,
        fullName: user.fullName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        address: user.address,
        country: user.country,
        preferredLanguage: user.preferredLanguage,
        notificationPreferences: user.notificationPreferences,
        role: user.role,
        permissions: user.permissions,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        lastLogin: user.lastLogin,
        accountStatus:
          user.accountStatus === AccountStatusEnum.ACTIVE
            ? AccountStatusEnum.ACTIVE
            : AccountStatusEnum.INACTIVE,
        profilePictureUrl: user.profilePictureUrl,
        biography: user.biography,
      },
      user.userId,
    );
  }
}
