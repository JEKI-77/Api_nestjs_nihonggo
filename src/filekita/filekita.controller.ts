import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { filekitaDTO } from './filekita.dto';
import { FilekitaService } from './filekita.service';
// import { FileKita } from './filekita.entity';

@Controller('filekita')
export class FilekitaController {
  constructor(private FilekitaServices: FilekitaService) {}

  //get/ read data dari database
  @Get()
  lihatOuput() {
    return this.FilekitaServices.showAll();
  }

  //get by id
  @Get(':id')
  lihatDetail(@Param('id') id: number) {
    return this.FilekitaServices.getById(id);
  }
  //create data
  @Post()
  PostData(@Body() data: filekitaDTO) {
    return this.FilekitaServices.create(data);
  }

  //Update
  @Put(':id')
  updateDetail(@Param('id') id: number, @Body() data: Partial<filekitaDTO>) {
    return this.FilekitaServices.update(id, data);
  }

  //delte data

  @Delete(':id')
  Delete(@Param('id') id: number) {
    return this.FilekitaServices.hapusData(id);
  }
}

//   @Get(':id')
//   lihatDetail(@Param('id') id: string): string {
//     return 'ini controle detail' + id;
//   }

//   @Get('service')
//   lihatsemua() {
//     return this.FilekitaServices.lihatsemua();
//   }
