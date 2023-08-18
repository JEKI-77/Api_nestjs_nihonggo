import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
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

  // get all data
  async getAllKotoba() {
    const data = await this.kosakataRepository.find();
    return {
      data,
      totalItems: data.length,
    };
  }

  async getAllkosakata(limit: number, page: number, kategori?: string) {
    let queryBuilder = this.kosakataRepository.createQueryBuilder('kosakata');

    if (kategori) {
      queryBuilder = queryBuilder.where('kosakata.kategori = :kategori', {
        kategori,
      });
    }

    const [data, total] = await queryBuilder
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    const totalPages = Math.ceil(total / limit);

    return {
      data,
      page,
      totalPages,
      totalItems: total,
    };
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
    const updateKosakata = await this.kosakataRepository.findOne({
      where: { id },
    });
    if (!updateKosakata) {
      throw new NotFoundException(`data dengan ID ${id} tidak ditemukan`);
    }
    return {
      message: `Data berhasil diubah`,
      status: HttpStatus.OK,
      data: updateKosakata,
    };
  }

  //delete
  async deleteKosakata(id: number) {
    await this.kosakataRepository.delete(id);
    return { deleted: true };
  }
}
