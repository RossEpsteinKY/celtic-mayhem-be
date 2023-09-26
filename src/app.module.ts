require('dotenv').config();
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";




@Module({

  imports: [
    TypeOrmModule.forFeature([

    ]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.TYPEORM_HOST,
      port: 5432,
      username: 'postgres',
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [

      ],
      // entities: [__dirname + '/src/entity/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/src/migrations/*{.ts,.js}'],
      subscribers: ['src/subscriber/**/*{.ts,.js}'],
      synchronize: false,
    }),],
  controllers: [
    AppController,

  ],
  providers: [
    AppService,

  ],
  exports: [],
})
export class AppModule {}
