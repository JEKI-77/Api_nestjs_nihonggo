import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { kanjiDTO } from './dto/kanji.dto';
import { kanji } from './entity/kanji.entity';
import { kanjiService } from './kanji.service';

@Controller('kanji')
export class kanjiController {
  constructor(private kanjiServices: kanjiService) {}

  //get all
  @Get('all')
  getAllkanji() {
    return this.kanjiServices.getAllKotoba();
  }

  //get limit, pagination, filter
  @Get()
  async getkanji(
    @Query('limit', ParseIntPipe) limit: number = 10,
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('kategori') filter: string,
  ) {
    return this.kanjiServices.getAllkanji(limit, page, filter);
  }

  //get by id
  @Get(':id')
  getkanjiById(@Param('id') id: number) {
    return this.kanjiServices.getById(id);
  }
  //post
  @Post()
  Postkanji(@Body() data: kanjiDTO) {
    return this.kanjiServices.create(data);
  }

  //put data
  @Put(':id')
  updatekanji(@Param('id') id: number, @Body() data: Partial<kanji>) {
    return this.kanjiServices.update(id, data);
  }

  //delete
  @Delete('/:id')
  deletekanji(@Param('id') id: number) {
    return this.kanjiServices.deletekanji(id);
  }
}
