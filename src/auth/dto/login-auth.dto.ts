import { IsEmail, MaxLength, MinLength, IsNotEmpty } from 'class-validator';

export class LoginAuthDto {
  @IsEmail()
  username: string;

  @MinLength(4)
  @MaxLength(12)
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  roll: string;
}
