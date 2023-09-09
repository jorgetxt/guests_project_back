import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Guest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  hour: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  cedula: string;

  @Column()
  registerDate: string;

  @Column()
  reason: string;

  @Column()
  departament: string;

  @Column()
  note: string;
}
