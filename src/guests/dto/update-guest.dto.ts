import { IsNotEmpty } from 'class-validator';

export class UpdateGuestDto {
  @IsNotEmpty()
  status: string;

  @IsNotEmpty()
  note: string;
}
