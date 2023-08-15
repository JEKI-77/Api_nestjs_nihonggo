import { KosakataService } from './kosakata.service';
export declare class KosakataController {
    private KosakataServices;
    constructor(KosakataServices: KosakataService);
    getKosakata(): Promise<import("./kosakata.entity").Kosakata[]>;
}
