import { Module } from '@nestjs/common';
// import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config';
// import { APP_FILTER } from '@nestjs/core';
// import { HttpErrorFilter } from './shared/http_error.filter';
import { KosakataModule } from './kosakata/kosakata.module';
import { UsersModule } from './user/users.module';
import { typeOrmConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { KanjiModule } from './kanji/kanji.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    KosakataModule,
    UsersModule,
    AuthModule,
    KanjiModule,
  ],
  // controllers: [kanjiController],

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
