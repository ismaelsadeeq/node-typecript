import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column()
  description: string;
  @ManyToOne(type => User, (user) => user.items)
  user:User
}