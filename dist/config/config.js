"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
dotenv_1.default.config();
const envVars = process.env;
const config = {
    username: envVars.USERNAME,
    password: envVars.PASSWORD,
    database: envVars.DATABASE,
    host: envVars.HOST,
    port: parseInt(envVars.DB_PORT),
    dialect: envVars.DIALECT,
};
const envConfigs = {
    development: config,
    test: config,
    production: config,
};
exports.default = envConfigs;
//# sourceMappingURL=config.js.map