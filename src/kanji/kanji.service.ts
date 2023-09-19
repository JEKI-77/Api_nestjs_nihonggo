import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { kanjiDTO } from './dto/kanji.dto';
import { kanji } from './entity/kanji.entity';

@Injectable()
export class kanjiService {
  constructor(
    @InjectRepository(kanji)
    private kanjiRepository: Repository<kanji>,
  ) {}

  // get all data
  async getAllKotoba() {
    const data = await this.kanjiRepository.find();
    return {
      data,
      totalItems: data.length,
    };
  }

  async getAllkanji(limit: number, page: number, kategori?: string) {
    let queryBuilder = this.kanjiRepository.createQueryBuilder('kanji');

    if (kategori) {
      queryBuilder = queryBuilder.where('kanji.kategori = :kategori', {
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
  async getById(id: number): Promise<kanji> | undefined {
    return await this.kanjiRepository.findOne({
      where: { id },
    });
  }

  //post data
  async create(data: kanjiDTO) {
    const newkanji = await this.kanjiRepository.create(data);
    await this.kanjiRepository.save(newkanji);

    return newkanji;
  }

  //update data
  async update(id: number, data: Partial<kanjiDTO>) {
    await this.kanjiRepository.update({ id }, data);
    const updatekanji = await this.kanjiRepository.findOne({
      where: { id },
    });
    if (!updatekanji) {
      throw new NotFoundException(`data dengan ID ${id} tidak ditemukan`);
    }
    return {
      message: `Data berhasil diubah`,
      status: HttpStatus.OK,
      data: updatekanji,
    };
  }

  //delete
  async deletekanji(id: number) {
    await this.kanjiRepository.delete(id);
    return { deleted: true };
  }
}
