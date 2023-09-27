import {EmailService} from "./services/email/email.service";

require('dotenv').config();
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {EmailController} from "./controllers/email/email.controller";




@Module({
  controllers: [
    AppController,
    EmailController
  ],
  providers: [
    AppService,
    EmailService

  ],
  exports: [],
})
export class AppModule {}
