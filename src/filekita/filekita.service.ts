import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { filekitaDTO } from './filekita.dto';
import { FileKita } from './filekita.entity';

@Injectable()
export class FilekitaService {
  constructor(
    @InjectRepository(FileKita)
    private filekitarepository: Repository<FileKita>,
  ) {}

  //fungsi get
  async showAll() {
    return await this.filekitarepository.find();
  }

  //fungsi create
  async create(data: filekitaDTO) {
    const newfilekita = await this.filekitarepository.create(data);
    await this.filekitarepository.save(newfilekita);
    return newfilekita;
  }

  //fungsi getbyId
  async getById(id: number): Promise<FileKita> | undefined {
    return await this.filekitarepository.findOne({ where: { id } });
  }

  //fungsi Update
  async update(id: number, data: Partial<filekitaDTO>) {
    await this.filekitarepository.update({ id }, data);
    return await this.filekitarepository.findOne({ where: { id } });
  }

  async hapusData(id: number) {
    await this.filekitarepository.delete(id);
    return { deleted: true };
  }

  //   async lihatsemua() {
  //     return 'ini diservice';
  //   }
}
