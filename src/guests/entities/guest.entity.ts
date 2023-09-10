import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Guest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  hour: string;

  @Column()
  status: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  cedula: string;

  @Column()
  registerDate: Date;

  @Column()
  reason: string;

  @Column()
  departamentId: string;

  @Column()
  note: string;
}
