import { Guest } from 'src/guests/entities/guest.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Guest, (guest) => guest.department)
  guests: Guest[];
}
