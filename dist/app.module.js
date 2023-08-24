"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const path_1 = require("path");
require("dotenv/config");
const core_1 = require("@nestjs/core");
const http_error_filter_1 = require("./shared/http_error.filter");
const filekita_module_1 = require("./filekita/filekita.module");
const kosakata_module_1 = require("./kosakata/kosakata.module");
const user_module_1 = require("./user/user.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT),
                username: process.env.DB_NAME,
                password: process.env.DB_PW,
                database: process.env.DB_DATABASE,
                migrations: ['dist/migrations/*.{ts,js}'],
                migrationsTableName: 'typeorm_migrations',
                entities: [(0, path_1.join)(__dirname, '**', '*.entity{.ts,.js}')],
                synchronize: true,
                dropSchema: false,
                logging: true,
            }),
            filekita_module_1.FilekitaModule,
            kosakata_module_1.KosakataModule,
            user_module_1.UserModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_FILTER,
                useClass: http_error_filter_1.HttpErrorFilter,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map