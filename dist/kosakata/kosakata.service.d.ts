import { HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { kosakataDTO } from './kosakata.dto';
import { Kosakata } from './kosakata.entity';
export declare class KosakataService {
    private kosakataRepository;
    constructor(kosakataRepository: Repository<Kosakata>);
    getAllkosakata(limit: number, page: number): Promise<{
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
