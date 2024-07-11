import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CrateUserDTO {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsStrongPassword()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  phoneNumber: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  @IsOptional()
  country: string;

  @IsString()
  @IsNotEmpty()
  preferredLanguage: string;

  @IsString()
  @IsNotEmpty()
  role: string;

  @IsArray()
  @IsNotEmpty()
  permissions: string[];

  @IsString()
  @IsOptional()
  profilePictureUrl: string;

  @IsString()
  @IsOptional()
  biography: string;
}
