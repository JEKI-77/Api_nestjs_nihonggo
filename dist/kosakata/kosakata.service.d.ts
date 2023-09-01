import { HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { kosakataDTO } from './dto/kosakata.dto';
import { Kosakata } from './entity/kosakata.entity';
export declare class KosakataService {
    private kosakataRepository;
    constructor(kosakataRepository: Repository<Kosakata>);
    getAllKotoba(): Promise<{
        data: Kosakata[];
        totalItems: number;
    }>;
    getAllkosakata(limit: number, page: number, kategori?: string): Promise<{
        data: Kosakata[];
        page: number;
        totalPages: number;
        totalItems: number;
    }>;
    getById(id: number): Promise<Kosakata> | undefined;
    create(data: kosakataDTO): Promise<Kosakata>;
    update(id: number, data: Partial<kosakataDTO>): Promise<{
        message: string;
        status: HttpStatus;
        data: Kosakata;
    }>;
    deleteKosakata(id: number): Promise<{
        deleted: boolean;
    }>;
}
