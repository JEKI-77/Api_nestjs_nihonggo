import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilekitaModule } from './filekita/filekita.module';
import { join } from 'path'; // Import join from path module
import 'dotenv/config';
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from './shared/http_error.filter';
import { KosakataModule } from './kosakata/kosakata.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5433,
      username: process.env.DB_NAME,
      password: process.env.DB_PW,
      database: process.env.DB_DATABASE,
      entities: [join(__dirname, '**', '*.entity{.ts,.js}')], // Use join to specify entity paths
      synchronize: false,
      dropSchema: false,
      logging: true,
    }),
    FilekitaModule,
    KosakataModule,
  ],

  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },
  ],
})
export class AppModule {}
