import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KosakataController } from './kosakata.controller';
import { Kosakata } from './entity/kosakata.entity';
import { KosakataService } from './kosakata.service';

@Module({
  imports: [TypeOrmModule.forFeature([Kosakata])],
  controllers: [KosakataController],
  providers: [KosakataService],
})
export class KosakataModule {}
