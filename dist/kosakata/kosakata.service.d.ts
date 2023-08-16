import { Repository } from 'typeorm';
import { kosakataDTO } from './kosakata.dto';
import { Kosakata } from './kosakata.entity';
export declare class KosakataService {
    private kosakataRepository;
    constructor(kosakataRepository: Repository<Kosakata>);
    getAllkosakata(): Promise<Kosakata[]>;
    getById(id: number): Promise<Kosakata> | undefined;
    create(data: kosakataDTO): Promise<Kosakata>;
    update(id: number, data: Partial<kosakataDTO>): Promise<Kosakata>;
    deleteKosakata(id: number): Promise<{
        deleted: boolean;
    }>;
}
