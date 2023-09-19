import { HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { kanjiDTO } from './dto/kanji.dto';
import { kanji } from './entity/kanji.entity';
export declare class kanjiService {
    private kanjiRepository;
    constructor(kanjiRepository: Repository<kanji>);
    getAllKotoba(): Promise<{
        data: kanji[];
        totalItems: number;
    }>;
    getAllkanji(limit: number, page: number, kategori?: string): Promise<{
        data: kanji[];
        page: number;
        totalPages: number;
        totalItems: number;
    }>;
    getById(id: number): Promise<kanji> | undefined;
    create(data: kanjiDTO): Promise<kanji>;
    update(id: number, data: Partial<kanjiDTO>): Promise<{
        message: string;
        status: HttpStatus;
        data: kanji;
    }>;
    deletekanji(id: number): Promise<{
        deleted: boolean;
    }>;
}
