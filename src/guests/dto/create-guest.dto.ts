import { IsNotEmpty } from 'class-validator';

export class CreateGuestDto {
  @IsNotEmpty()
  date: Date;

  @IsNotEmpty()
  hour: string;

  @IsNotEmpty()
  status: string;

  @IsNotEmpty()
  firstname: string;

  @IsNotEmpty()
  lastname: string;

  @IsNotEmpty()
  cedula: string;

  @IsNotEmpty()
  registerDate: Date;

  @IsNotEmpty()
  reason: string;

  @IsNotEmpty()
  departamentId: string;

  @IsNotEmpty()
  note: string;
}
