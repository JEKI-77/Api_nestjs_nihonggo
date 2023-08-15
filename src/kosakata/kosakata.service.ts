import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kosakata } from './kosakata.entity';

@Injectable()
export class KosakataService {
  constructor(
    @InjectRepository(Kosakata)
    private kosakataRepository: Repository<Kosakata>,
  ) {}

  async getAllkosakata() {
    return await this.kosakataRepository.find();
  }
}
