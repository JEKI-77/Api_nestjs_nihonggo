import { kosakataDTO } from './kosakata.dto';
import { Kosakata } from './kosakata.entity';
import { KosakataService } from './kosakata.service';
export declare class KosakataController {
    private KosakataServices;
    constructor(KosakataServices: KosakataService);
    getAllKosakata(): Promise<{
        data: any;
        totalItems: any;
    }>;
    getKosakata(limit: number, page: number, filter: string): Promise<{
        data: any;
        page: number;
        totalPages: number;
        totalItems: any;
    }>;
    getKosakataById(id: number): Promise<Kosakata>;
    PostKosakata(data: kosakataDTO): Promise<any>;
    updateKosakata(id: number, data: Partial<Kosakata>): Promise<{
        message: string;
        status: any;
        data: any;
    }>;
    deleteKosakata(id: number): Promise<{
        deleted: boolean;
    }>;
}
