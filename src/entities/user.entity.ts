import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Item } from './item.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  name:string;

  @Column()
  email:string

  @Column()
  password:string

  @OneToMany(type => Item, (item) => item.user)
  items?: Item[]
}