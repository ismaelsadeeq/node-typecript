import { Controller,Get,Post,Put,Delete,Body,Param } from '@nestjs/common';
import {createUserDto} from './dto/create-user.dto'
import {UserService} from './user.service'
import {User} from '../entities/user.entity'

@Controller('user')
export class UserController {
  constructor(private readonly userService:UserService) {
    
  }
  @Get()
   findAll():Promise<User[]>  {
    return this.userService.findAll();
  }
  @Post()
   create(@Body () createUserDto: createUserDto):Promise<User>{
    return this.userService.create(createUserDto);
  }
  @Get(':id')
   findOne(@Param('id') id):Promise<User>  {
    return this.userService.findOne(id)
  }
  @Delete(':id')
   delete(@Param('id') id):string {
     this.userService.delete(id);
    return 'deleted'
  }
  @Put(':id')
   update(@Body() updateUserDto:createUserDto,@Param('id') id):string{
    this.userService.update(id,updateUserDto)
    return 'updated';
  }
}
