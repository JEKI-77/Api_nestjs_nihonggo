import { kosakataDTO } from './kosakata.dto';
import { Kosakata } from './kosakata.entity';
import { KosakataService } from './kosakata.service';
export declare class KosakataController {
    private KosakataServices;
    constructor(KosakataServices: KosakataService);
    getKosakata(): Promise<Kosakata[]>;
    getKosakataById(id: number): Promise<Kosakata>;
    PostKosakata(data: kosakataDTO): Promise<Kosakata>;
    updateKosakata(id: number, data: Partial<Kosakata>): Promise<Kosakata>;
    deleteKosakata(id: number): Promise<{
        deleted: boolean;
    }>;
}
