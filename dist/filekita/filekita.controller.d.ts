import { filekitaDTO } from './filekita.dto';
import { FilekitaService } from './filekita.service';
export declare class FilekitaController {
    private FilekitaServices;
    constructor(FilekitaServices: FilekitaService);
    lihatOuput(): Promise<any>;
    lihatDetail(id: number): Promise<import("./filekita.entity").FileKita>;
    PostData(data: filekitaDTO): Promise<any>;
    updateDetail(id: number, data: Partial<filekitaDTO>): Promise<any>;
    Delete(id: number): Promise<{
        deleted: boolean;
    }>;
}
