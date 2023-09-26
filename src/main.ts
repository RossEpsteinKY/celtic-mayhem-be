// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
//
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();
import { NestFactory } from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import { AppModule } from './app.module';
import http from "http";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const swaggerOptions = new DocumentBuilder()
      .setTitle('API Documentation')
      .setDescription('Endpoints available on this service')
      .setVersion('1.0')
      .build();
  const swaggerDoc = SwaggerModule.createDocument(app, swaggerOptions);

  SwaggerModule.setup('_docs', app, swaggerDoc);

  const cors = require('cors')

  app.use(cors({
    origin: '*'
  }));

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
  });

  const http = require("http");
  setInterval(function() {
    http.get(process.env.ENVIRONMENT_BE_URL);
    console.log("DON'T YOU HUSH LITTLE BABY",http.get(process.env.ENVIRONMENT_BE_URL))
  }, 300000);

  await app.listen(process.env.PORT || 80, '0.0.0.0', () => {
    console.log("Server is running");
  });

}
bootstrap();
