"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilekitaModule = void 0;
const common_1 = require("@nestjs/common");
const filekita_entity_1 = require("./filekita.entity");
const typeorm_1 = require("@nestjs/typeorm");
const filekita_controller_1 = require("./filekita.controller");
const filekita_service_1 = require("./filekita.service");
let FilekitaModule = exports.FilekitaModule = class FilekitaModule {
};
exports.FilekitaModule = FilekitaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([filekita_entity_1.FileKita])],
        controllers: [filekita_controller_1.FilekitaController],
        providers: [filekita_service_1.FilekitaService],
    })
], FilekitaModule);
//# sourceMappingURL=filekita.module.js.map