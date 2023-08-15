import { Repository } from 'typeorm';
import { Kosakata } from './kosakata.entity';
export declare class KosakataService {
    private kosakataRepository;
    constructor(kosakataRepository: Repository<Kosakata>);
    getAllkosakata(): Promise<Kosakata[]>;
}
