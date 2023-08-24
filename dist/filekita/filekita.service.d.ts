import { Repository } from 'typeorm';
import { filekitaDTO } from './filekita.dto';
import { FileKita } from './filekita.entity';
export declare class FilekitaService {
    private filekitarepository;
    constructor(filekitarepository: Repository<FileKita>);
    showAll(): Promise<any>;
    create(data: filekitaDTO): Promise<any>;
    getById(id: number): Promise<FileKita> | undefined;
    update(id: number, data: Partial<filekitaDTO>): Promise<any>;
    hapusData(id: number): Promise<{
        deleted: boolean;
    }>;
}
