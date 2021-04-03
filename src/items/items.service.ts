import { Injectable } from '@nestjs/common';
import { Item } from '../entities/item.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { getRepository } from 'typeorm'

@Injectable()
export class ItemsService {
  constructor(@InjectRepository(Item) private  itemRepository: Repository<Item> ) { 
  }
   async findAll():Promise<Item[]> {
     return await this.itemRepository.find();
   }
   async findOne(id:string): Promise<Item> {
    const newItem = getRepository(Item);
    const item = await newItem.findOne({
      where:{
        id:id
      }
    });
    return item
  }
  async create(item:Item):Promise<Item>{

   const newItem = getRepository(Item);
   const iteem = newItem.create(item)
   return await newItem.save(iteem);
  }
  async delete(id:string): Promise<void> {
    await this.itemRepository.delete(id);
  }
  async update(id: string, item :Item):Promise<void>{
   const newItem = getRepository(Item);
   await newItem.update(id,item)
  }
}
