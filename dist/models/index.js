"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sequelize_1 = require("sequelize");
const config_1 = tslib_1.__importDefault(require("../config/config"));
const env = process.env.NODE_ENV || 'development';
const config = config_1.default[env];
const sequelize = new sequelize_1.Sequelize(config.database, 'manga', config.password, {
    dialect: config.dialect,
    host: config.host,
});
exports.default = sequelize;
//# sourceMappingURL=index.js.map