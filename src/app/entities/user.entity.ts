import { Replace } from '@app/helpers/replace';
import { randomUUID } from 'crypto';

export enum AccountStatusEnum {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}
type UserProps = {
  username: string;
  password: string;
  fullName: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  country?: string;
  preferredLanguage: string;
  notificationPreferences?: string[];
  role: string;
  permissions: string[];
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;
  accountStatus: AccountStatusEnum;
  profilePictureUrl?: string;
  biography?: string;
};

class EmailValidator {
  static validate(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

class PhoneNumberValidator {
  static validate(phoneNumber: string): boolean {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Esta regex é para o formato E.164 internacional
    return phoneRegex.test(phoneNumber);
  }
}

export class UserEntity {
  private _userId: string;
  private props: UserProps;

  private validatePassword(password: string): boolean {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasMinLength = password.length >= minLength;

    return hasUpperCase && hasLowerCase && hasMinLength;
  }

  constructor(
    props: Replace<
      UserProps,
      {
        createdAt?: Date;
        updatedAt?: Date;
      }
    >,
    userId?: string,
  ) {
    this._userId = userId ?? randomUUID();

    if (!this.validatePassword(props.password)) {
      throw new Error('Password does not meet the required criteria.');
    }

    if (!EmailValidator.validate(props.email)) {
      throw new Error('Invalid email address.');
    }

    if (
      props.phoneNumber &&
      !PhoneNumberValidator.validate(props.phoneNumber)
    ) {
      throw new Error('Invalid phone number.');
    }

    this.props = {
      ...props,
      preferredLanguage: props.preferredLanguage ?? 'en',
      notificationPreferences: props.notificationPreferences ?? [],
      permissions: props.permissions ?? [],
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
      accountStatus: props.accountStatus ?? AccountStatusEnum.ACTIVE,
    };
  }

  // Getters
  get userId(): string {
    return this._userId;
  }

  get username(): string {
    return this.props.username;
  }

  get password(): string {
    return this.props.password;
  }

  get fullName(): string {
    return this.props.fullName;
  }

  get email(): string {
    return this.props.email;
  }

  get phoneNumber(): string | undefined {
    return this.props.phoneNumber;
  }

  get address(): string | undefined {
    return this.props.address;
  }

  get country(): string | undefined {
    return this.props.country;
  }

  get preferredLanguage(): string {
    return this.props.preferredLanguage!;
  }

  get notificationPreferences(): string[] {
    return this.props.notificationPreferences!;
  }

  get role(): string {
    return this.props.role;
  }

  get permissions(): string[] {
    return this.props.permissions!;
  }

  get createdAt(): Date {
    return this.props.createdAt!;
  }

  get updatedAt(): Date {
    return this.props.updatedAt!;
  }

  get lastLogin(): Date | undefined {
    return this.props.lastLogin;
  }

  get accountStatus(): string {
    return this.props.accountStatus!;
  }

  get profilePictureUrl(): string | undefined {
    return this.props.profilePictureUrl;
  }

  get biography(): string | undefined {
    return this.props.biography;
  }

  // Setters
  set username(value: string) {
    this.props.username = value;
  }

  set password(value: string) {
    if (!this.validatePassword(value)) {
      throw new Error('Password does not meet the required criteria.');
    }
    this.props.password = value;
  }

  set fullName(value: string) {
    this.props.fullName = value;
  }

  set email(value: string) {
    if (!EmailValidator.validate(value)) {
      throw new Error('Invalid email address.');
    }
    this.props.email = value;
  }

  set phoneNumber(value: string | undefined) {
    if (value && !PhoneNumberValidator.validate(value)) {
      throw new Error('Invalid phone number.');
    }
    this.props.phoneNumber = value;
  }

  set address(value: string | undefined) {
    this.props.address = value;
  }

  set country(value: string | undefined) {
    this.props.country = value;
  }

  set preferredLanguage(value: string) {
    this.props.preferredLanguage = value;
  }

  set notificationPreferences(value: string[]) {
    this.props.notificationPreferences = value;
  }

  set role(value: string) {
    this.props.role = value;
  }

  set permissions(value: string[]) {
    this.props.permissions = value;
  }

  set createdAt(value: Date) {
    this.props.createdAt = value;
  }

  set updatedAt(value: Date) {
    this.props.updatedAt = value;
  }

  set lastLogin(value: Date | undefined) {
    this.props.lastLogin = value;
  }

  set accountStatus(value: AccountStatusEnum) {
    this.props.accountStatus = value;
  }

  set profilePictureUrl(value: string | undefined) {
    this.props.profilePictureUrl = value;
  }

  set biography(value: string | undefined) {
    this.props.biography = value;
  }
}
