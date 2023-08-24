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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilekitaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const filekita_entity_1 = require("./filekita.entity");
let FilekitaService = exports.FilekitaService = class FilekitaService {
    constructor(filekitarepository) {
        this.filekitarepository = filekitarepository;
    }
    async showAll() {
        return await this.filekitarepository.find();
    }
    async create(data) {
        const newfilekita = await this.filekitarepository.create(data);
        await this.filekitarepository.save(newfilekita);
        return newfilekita;
    }
    async getById(id) {
        return await this.filekitarepository.findOne({ where: { id } });
    }
    async update(id, data) {
        await this.filekitarepository.update({ id }, data);
        return await this.filekitarepository.findOne({ where: { id } });
    }
    async hapusData(id) {
        await this.filekitarepository.delete(id);
        return { deleted: true };
    }
};
exports.FilekitaService = FilekitaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(filekita_entity_1.FileKita)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], FilekitaService);
//# sourceMappingURL=filekita.service.js.map