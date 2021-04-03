import { Controller,Get,Post,Put,Delete ,Body,Param} from '@nestjs/common';
import {createItemDto} from './dto/create-item.dto'
import {ItemsService} from './items.service'
import {Item} from '../entities/item.entity'
// import {Request,Response} from 'express'; 

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {
    
  }
  @Get()
  // findAll(@Req() req:Request,@Res() res:Response):Response  {
  //   console.log(req.url);
  //   return res.send('Hello World')
  // }
   findAll():Promise<Item[]>  {

    return this.itemService.findAll();
  }
  @Post()
   create(@Body () createItemDto: createItemDto):Promise<Item>{
    return this.itemService.create(createItemDto);
  }
  @Get(':id')
   findOne(@Param('id') id):Promise<Item>  {
    return this.itemService.findOne(id)
  }
  @Delete(':id')
   delete(@Param('id') id):string {
     this.itemService.delete(id);
    return 'deleted'
  }
  @Put(':id')
   update(@Body() updateItemDto:createItemDto,@Param('id') id):string{
    this.itemService.update(id,updateItemDto)
    return 'updated';
  }
}

