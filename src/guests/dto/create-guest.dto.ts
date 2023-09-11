import { IsNotEmpty } from 'class-validator';

export class CreateGuestDto {
  @IsNotEmpty()
  date: Date;

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
  departmentId: number;

  @IsNotEmpty()
  note: string;
}
