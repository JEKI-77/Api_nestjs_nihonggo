import { Repository } from 'typeorm';
import { filekitaDTO } from './filekita.dto';
import { FileKita } from './filekita.entity';
export declare class FilekitaService {
    private filekitarepository;
    constructor(filekitarepository: Repository<FileKita>);
    showAll(): Promise<FileKita[]>;
    create(data: filekitaDTO): Promise<FileKita>;
    getById(id: number): Promise<FileKita> | undefined;
    update(id: number, data: Partial<filekitaDTO>): Promise<FileKita>;
    hapusData(id: number): Promise<{
        deleted: boolean;
    }>;
}
