"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseSource = exports.typeOrmConfig = exports.getDatabaseDataSourceOptions = void 0;
const typeorm_1 = require("typeorm");
const path_1 = require("path");
const getDatabaseDataSourceOptions = ({ port, host, username, database, schema, password, }) => {
    return {
        type: 'postgres',
        port,
        host,
        username,
        database,
        schema,
        password: password,
        entities: [(0, path_1.join)(__dirname, '../', '**', '*.entity.{ts,js}')],
    };
};
exports.getDatabaseDataSourceOptions = getDatabaseDataSourceOptions;
exports.typeOrmConfig = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_NAME,
    password: process.env.DB_PW,
    database: process.env.DB_DATABASE,
    migrations: ['dist/migrations/*.{ts,js}'],
    migrationsTableName: 'typeorm_migrations',
    entities: [(0, path_1.join)(__dirname, '../**/*.entity{.ts,.js}')],
    synchronize: true,
    dropSchema: false,
    logging: true,
};
exports.DatabaseSource = new typeorm_1.DataSource({
    ...(0, exports.getDatabaseDataSourceOptions)(exports.typeOrmConfig),
});
//# sourceMappingURL=typeorm.config.js.map