"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.kanjiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const kanji_entity_1 = require("./entity/kanji.entity");
let kanjiService = class kanjiService {
    constructor(kanjiRepository) {
        this.kanjiRepository = kanjiRepository;
    }
    async getAllKotoba() {
        const data = await this.kanjiRepository.find();
        return {
            data,
            totalItems: data.length,
        };
    }
    async getAllkanji(limit, page, kategori) {
        let queryBuilder = this.kanjiRepository.createQueryBuilder('kanji');
        if (kategori) {
            queryBuilder = queryBuilder.where('kanji.kategori = :kategori', {
                kategori,
            });
        }
        const [data, total] = await queryBuilder
            .skip((page - 1) * limit)
            .take(limit)
            .getManyAndCount();
        const totalPages = Math.ceil(total / limit);
        return {
            data,
            page,
            totalPages,
            totalItems: total,
        };
    }
    async getById(id) {
        return await this.kanjiRepository.findOne({
            where: { id },
        });
    }
    async create(data) {
        const newkanji = await this.kanjiRepository.create(data);
        await this.kanjiRepository.save(newkanji);
        return newkanji;
    }
    async update(id, data) {
        await this.kanjiRepository.update({ id }, data);
        const updatekanji = await this.kanjiRepository.findOne({
            where: { id },
        });
        if (!updatekanji) {
            throw new common_1.NotFoundException(`data dengan ID ${id} tidak ditemukan`);
        }
        return {
            message: `Data berhasil diubah`,
            status: common_1.HttpStatus.OK,
            data: updatekanji,
        };
    }
    async deletekanji(id) {
        await this.kanjiRepository.delete(id);
        return { deleted: true };
    }
};
exports.kanjiService = kanjiService;
exports.kanjiService = kanjiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(kanji_entity_1.kanji)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], kanjiService);
//# sourceMappingURL=kanji.service.js.map