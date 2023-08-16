import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { kosakataDTO } from './kosakata.dto';
import { Kosakata } from './kosakata.entity';

@Injectable()
export class KosakataService {
  constructor(
    @InjectRepository(Kosakata)
    private kosakataRepository: Repository<Kosakata>,
  ) {}

  //get all data
  async getAllkosakata() {
    return await this.kosakataRepository.find();
  }

  //getBy id
  async getById(id: number): Promise<Kosakata> | undefined {
    return await this.kosakataRepository.findOne({
      where: { id },
    });
  }

  //post data
  async create(data: kosakataDTO) {
    const newKosakata = await this.kosakataRepository.create(data);
    await this.kosakataRepository.save(newKosakata);
    return newKosakata;
  }

  //update data
  async update(id: number, data: Partial<kosakataDTO>) {
    await this.kosakataRepository.update({ id }, data);
    return await this.kosakataRepository.findOne({ where: { id } });
  }

  //delete
  async deleteKosakata(id: number) {
    await this.kosakataRepository.delete(id);
    return { deleted: true };
  }
}
