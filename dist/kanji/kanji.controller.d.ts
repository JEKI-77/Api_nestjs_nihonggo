import { kanjiDTO } from './dto/kanji.dto';
import { kanji } from './entity/kanji.entity';
import { kanjiService } from './kanji.service';
export declare class kanjiController {
    private kanjiServices;
    constructor(kanjiServices: kanjiService);
    getAllkanji(): Promise<{
        data: kanji[];
        totalItems: number;
    }>;
    getkanji(limit: number, page: number, filter: string): Promise<{
        data: kanji[];
        page: number;
        totalPages: number;
        totalItems: number;
    }>;
    getkanjiById(id: number): Promise<kanji>;
    Postkanji(data: kanjiDTO): Promise<kanji>;
    updatekanji(id: number, data: Partial<kanji>): Promise<{
        message: string;
        status: import("@nestjs/common").HttpStatus;
        data: kanji;
    }>;
    deletekanji(id: number): Promise<{
        deleted: boolean;
    }>;
}
