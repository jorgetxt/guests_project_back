import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
