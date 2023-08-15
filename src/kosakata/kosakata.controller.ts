import { Controller, Get } from '@nestjs/common';
// import { kosakataDTO } from './kosakata.dto';
import { KosakataService } from './kosakata.service';

@Controller('kosakata')
export class KosakataController {
  constructor(private KosakataServices: KosakataService) {}

  @Get()
  getKosakata() {
    return this.KosakataServices.getAllkosakata();
  }
}
