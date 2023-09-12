import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { Logger } from '@nestjs/common';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cors from 'cors'; // Import the CORS module
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { RolesGuard } from './auth/guards/roles.guard';

const port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Apply CORS middleware
  app.use(
    cors({
      origin: 'https://pintar-nihonggo.vercel.app', //'https://pintar-nihonggo.vercel.app', // Replace with your client's URL 'https://pintar-nihonggo.vercel.app'
      credentials: true, // Allow sending cookies
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Ecommerce API Documentation')
    .setDescription('The Ecommerce API description')
    .setVersion('1.0')
    .addTag('Ecommerce')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // SwaggerModule setup (see https://docs.nestjs.com/recipes/swagger)
  SwaggerModule.setup('api', app, document);

  // Global Guards (see https://docs.nestjs.com/guards#global-guards)
  const reflector = app.get(Reflector);
  app.useGlobalGuards(new RolesGuard(reflector));

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  await app.listen(port);
  Logger.log(`Running on port ${port}`);
}

bootstrap();
