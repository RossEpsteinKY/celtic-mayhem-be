require('dotenv').config();
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";




@Module({
  controllers: [
    AppController,

  ],
  providers: [
    AppService,

  ],
  exports: [],
})
export class AppModule {}
