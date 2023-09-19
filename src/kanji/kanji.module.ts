import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { kanjiController } from './kanji.controller';
import { kanji } from './entity/kanji.entity';
import { kanjiService } from './kanji.service';

@Module({
  imports: [TypeOrmModule.forFeature([kanji])],
  controllers: [kanjiController],
  providers: [kanjiService],
})
export class KanjiModule {}
