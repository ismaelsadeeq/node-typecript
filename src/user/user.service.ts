import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { getRepository } from 'typeorm'
import { User } from '../entities/user.entity'

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository:Repository<User>) {
    
  }
  async findAll():Promise<User[]> {
    return await this.userRepository.find();
  }
  async findOne(id:string): Promise<User> {
   const newUser = getRepository(User);
   const user = await newUser.findOne({
     where:{
       id:id
     }
   });
   return user
 }
 async create(user:User):Promise<User>{

  const newUser = getRepository(User);
  const iteem = newUser.create(user)
  return await newUser.save(iteem);
 }
 async delete(id:string): Promise<void> {
   await this.userRepository.delete(id);
 }
 async update(id:string,user:User):Promise<void>{
  const newUser = getRepository(User);
  await newUser.update(id,user)
 }

}
