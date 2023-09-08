import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  roll: string;

  @Column({ select: false })
  password: string;
}
