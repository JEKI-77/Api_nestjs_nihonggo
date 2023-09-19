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
exports.kanjiController = void 0;
const common_1 = require("@nestjs/common");
const kanji_dto_1 = require("./dto/kanji.dto");
const kanji_service_1 = require("./kanji.service");
let kanjiController = class kanjiController {
    constructor(kanjiServices) {
        this.kanjiServices = kanjiServices;
    }
    getAllkanji() {
        return this.kanjiServices.getAllKotoba();
    }
    async getkanji(limit = 10, page = 1, filter) {
        return this.kanjiServices.getAllkanji(limit, page, filter);
    }
    getkanjiById(id) {
        return this.kanjiServices.getById(id);
    }
    Postkanji(data) {
        return this.kanjiServices.create(data);
    }
    updatekanji(id, data) {
        return this.kanjiServices.update(id, data);
    }
    deletekanji(id) {
        return this.kanjiServices.deletekanji(id);
    }
};
exports.kanjiController = kanjiController;
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], kanjiController.prototype, "getAllkanji", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('page', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('kategori')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", Promise)
], kanjiController.prototype, "getkanji", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], kanjiController.prototype, "getkanjiById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [kanji_dto_1.kanjiDTO]),
    __metadata("design:returntype", void 0)
], kanjiController.prototype, "Postkanji", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], kanjiController.prototype, "updatekanji", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], kanjiController.prototype, "deletekanji", null);
exports.kanjiController = kanjiController = __decorate([
    (0, common_1.Controller)('kanji'),
    __metadata("design:paramtypes", [kanji_service_1.kanjiService])
], kanjiController);
//# sourceMappingURL=kanji.controller.js.map