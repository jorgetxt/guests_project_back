import { Department } from 'src/departments/entities/department.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Guest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

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

  @ManyToOne(() => Department, (department) => department.guests, {
    nullable: false,
    cascade: true,
  })
  @JoinColumn({ name: 'departmentId' })
  department: Department;

  @Column()
  note: string;
}
