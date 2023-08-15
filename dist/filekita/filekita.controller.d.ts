import { filekitaDTO } from './filekita.dto';
import { FilekitaService } from './filekita.service';
export declare class FilekitaController {
    private FilekitaServices;
    constructor(FilekitaServices: FilekitaService);
    lihatOuput(): Promise<import("./filekita.entity").FileKita[]>;
    lihatDetail(id: number): Promise<import("./filekita.entity").FileKita>;
    PostData(data: filekitaDTO): Promise<import("./filekita.entity").FileKita>;
    updateDetail(id: number, data: Partial<filekitaDTO>): Promise<import("./filekita.entity").FileKita>;
    Delete(id: number): Promise<{
        deleted: boolean;
    }>;
}
