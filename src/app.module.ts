import { Module } from '@nestjs/common';
// import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config';
// import { APP_FILTER } from '@nestjs/core';
// import { HttpErrorFilter } from './shared/http_error.filter';
import { KosakataModule } from './kosakata/kosakata.module';
import { UsersModule } from './users/users.module';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), KosakataModule, UsersModule],

  // controllers: [AppController],
  // providers: [
  //   AppService,
  //   {
  //     provide: APP_FILTER,
  //     useClass: HttpErrorFilter,
  //   },
  // ],
})
export class AppModule {}
