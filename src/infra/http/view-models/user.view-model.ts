import { UserEntity } from '@app/entities/user.entity';

export class UserViewModel {
  static toHttp(user: Partial<UserEntity>) {
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
}
