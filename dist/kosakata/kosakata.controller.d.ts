import { kosakataDTO } from './dto/kosakata.dto';
import { Kosakata } from './entity/kosakata.entity';
import { KosakataService } from './kosakata.service';
export declare class KosakataController {
    private KosakataServices;
    constructor(KosakataServices: KosakataService);
    getAllKosakata(): Promise<{
        data: Kosakata[];
        totalItems: number;
    }>;
    getKosakata(limit: number, page: number, filter: string): Promise<{
        data: Kosakata[];
        page: number;
        totalPages: number;
        totalItems: number;
    }>;
    getKosakataById(id: number): Promise<Kosakata>;
    PostKosakata(data: kosakataDTO): Promise<Kosakata>;
    updateKosakata(id: number, data: Partial<Kosakata>): Promise<{
        message: string;
        status: import("@nestjs/common").HttpStatus;
        data: Kosakata;
    }>;
    deleteKosakata(id: number): Promise<{
        deleted: boolean;
    }>;
}
