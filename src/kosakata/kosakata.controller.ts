import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
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
  getKosakata() {
    return this.KosakataServices.getAllkosakata();
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
