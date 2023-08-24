import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path'; // Import join from path module
import 'dotenv/config';
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFilter } from './shared/http_error.filter';
import { FilekitaModule } from './filekita/filekita.module';
import { KosakataModule } from './kosakata/kosakata.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_NAME,
      password: process.env.DB_PW,
      database: process.env.DB_DATABASE,
      migrations: ['dist/migrations/*.{ts,js}'],
      migrationsTableName: 'typeorm_migrations',
      entities: [join(__dirname, '**', '*.entity{.ts,.js}')], // Use join to specify entity paths
      synchronize: true,
      dropSchema: false,
      logging: true,
    }),
    FilekitaModule,
    KosakataModule,
    UserModule,
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
