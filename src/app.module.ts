import {EmailService} from "./services/email/email.service";

require('dotenv').config();
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {EmailController} from "./controllers/email/email.controller";
import {PaymentService} from "./services/payment/payment.service";
import {PaymentController} from "./controllers/payment/payment.controller";




@Module({
  controllers: [
    AppController,
    EmailController,
    PaymentController
  ],
  providers: [
    AppService,
    EmailService,
    PaymentService

  ],
  exports: [],
})
export class AppModule {}
