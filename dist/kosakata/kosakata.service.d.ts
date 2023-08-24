import { Repository } from 'typeorm';
import { kosakataDTO } from './kosakata.dto';
import { Kosakata } from './kosakata.entity';
export declare class KosakataService {
    private kosakataRepository;
    constructor(kosakataRepository: Repository<Kosakata>);
    getAllKotoba(): Promise<{
        data: any;
        totalItems: any;
    }>;
    getAllkosakata(limit: number, page: number, kategori?: string): Promise<{
        data: any;
        page: number;
        totalPages: number;
        totalItems: any;
    }>;
    getById(id: number): Promise<Kosakata> | undefined;
    create(data: kosakataDTO): Promise<any>;
    update(id: number, data: Partial<kosakataDTO>): Promise<{
        message: string;
        status: any;
        data: any;
    }>;
    deleteKosakata(id: number): Promise<{
        deleted: boolean;
    }>;
}
