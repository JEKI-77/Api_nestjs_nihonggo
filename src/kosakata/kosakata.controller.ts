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
import { kosakataDTO } from './kosakata.dto';
import { Kosakata } from './kosakata.entity';
// import { kosakataDTO } from './kosakata.dto';
import { KosakataService } from './kosakata.service';

@Controller('kosakata')
export class KosakataController {
  constructor(private KosakataServices: KosakataService) {}

  //get all

  @Get()
  // getAllKosakata() {
  //   return this.KosakataServices.getAllKosakata();
  // }
  async getKosakata(
    @Query('limit', ParseIntPipe) limit: number = 10,
    @Query('page', ParseIntPipe) page: number = 1,
  ) {
    return this.KosakataServices.getAllkosakata(limit, page);
  }

  //get by id
  @Get(':id')
  getKosakataById(@Param('id') id: number) {
    return this.KosakataServices.getById(id);
  }
  //post
  @Post()
  PostKosakata(@Body() data: kosakataDTO) {
    return this.KosakataServices.create(data);
  }

  //put data
  @Put(':id')
  updateKosakata(@Param('id') id: number, @Body() data: Partial<Kosakata>) {
    return this.KosakataServices.update(id, data);
  }

  //delete
  @Delete('/:id')
  deleteKosakata(@Param('id') id: number) {
    return this.KosakataServices.deleteKosakata(id);
  }
}
