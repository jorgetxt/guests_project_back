import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  roll: string;

  @MinLength(4)
  @MaxLength(12)
  password: string;
}
