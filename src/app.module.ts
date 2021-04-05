import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import {ItemsModule} from './items/item.module'
import { ItemsService } from './items/items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Item} from './entities/item.entity'
import {UserModule} from './user/user.module'
import { Connection } from 'typeorm';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import config from './config/keys'
import { User } from './entities/user.entity';


@Module({
  imports: [ItemsModule,UserModule,
  TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'sadeeq',
      database: 'm-agro',
      entities: [Item,User],
      synchronize: true,
    }),
  ] ,
  controllers: [AppController, ItemsController, UserController],
  providers: [AppService, ItemsService, UserService],
})
export class AppModule {
}
