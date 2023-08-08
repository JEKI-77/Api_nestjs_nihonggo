import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilekitaModule } from './filekita/filekita.module';
import { join } from 'path'; // Import join from path module
import 'dotenv/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '1234',
      database: 'nestjs',
      entities: [join(__dirname, '**', '*.entity{.ts,.js}')], // Use join to specify entity paths
      synchronize: true,
      dropSchema: false,
      logging: true,
    }),
    FilekitaModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
