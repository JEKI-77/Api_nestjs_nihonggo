import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { filekitaDTO } from './filekita.dto';
import { FileKita } from './filekita.entity';
import { FilekitaService } from './filekita.service';

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

  @Post()
  PostData(@Body() data: filekitaDTO) {
    return this.FilekitaServices.create(data);
  }

  //   @Get(':id')
  //   lihatDetail(@Param('id') id: string): string {
  //     return 'ini controle detail' + id;
  //   }

  //   @Get('service')
  //   lihatsemua() {
  //     return this.FilekitaServices.lihatsemua();
  //   }
}
