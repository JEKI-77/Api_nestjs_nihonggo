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
exports.KosakataController = void 0;
const common_1 = require("@nestjs/common");
const kosakata_dto_1 = require("./kosakata.dto");
const kosakata_service_1 = require("./kosakata.service");
let KosakataController = exports.KosakataController = class KosakataController {
    constructor(KosakataServices) {
        this.KosakataServices = KosakataServices;
    }
    getKosakata() {
        return this.KosakataServices.getAllkosakata();
    }
    getKosakataById(id) {
        return this.KosakataServices.getById(id);
    }
    PostKosakata(data) {
        return this.KosakataServices.create(data);
    }
    updateKosakata(id, data) {
        return this.KosakataServices.update(id, data);
    }
    deleteKosakata(id) {
        return this.KosakataServices.deleteKosakata(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], KosakataController.prototype, "getKosakata", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], KosakataController.prototype, "getKosakataById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [kosakata_dto_1.kosakataDTO]),
    __metadata("design:returntype", void 0)
], KosakataController.prototype, "PostKosakata", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], KosakataController.prototype, "updateKosakata", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], KosakataController.prototype, "deleteKosakata", null);
exports.KosakataController = KosakataController = __decorate([
    (0, common_1.Controller)('kosakata'),
    __metadata("design:paramtypes", [kosakata_service_1.KosakataService])
], KosakataController);
//# sourceMappingURL=kosakata.controller.js.map