"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
require("dotenv/config");
const common_1 = require("@nestjs/common");
const path_1 = require("path");
const cors = require("cors");
const swagger_1 = require("@nestjs/swagger");
const roles_guard_1 = require("./auth/guards/roles.guard");
const port = process.env.PORT;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Ecommerce API Documentation')
        .setDescription('The Ecommerce API description')
        .setVersion('1.0')
        .addTag('Ecommerce')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    const reflector = app.get(core_1.Reflector);
    app.useGlobalGuards(new roles_guard_1.RolesGuard(reflector));
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    await app.listen(port);
    common_1.Logger.log(`Running on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map