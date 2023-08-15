"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KosakataModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const kosakata_controller_1 = require("./kosakata.controller");
const kosakata_entity_1 = require("./kosakata.entity");
const kosakata_service_1 = require("./kosakata.service");
let KosakataModule = exports.KosakataModule = class KosakataModule {
};
exports.KosakataModule = KosakataModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([kosakata_entity_1.Kosakata])],
        controllers: [kosakata_controller_1.KosakataController],
        providers: [kosakata_service_1.KosakataService],
    })
], KosakataModule);
//# sourceMappingURL=kosakata.module.js.map