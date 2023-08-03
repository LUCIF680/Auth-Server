"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const tslib_1 = require("tslib");
const User_1 = tslib_1.__importDefault(require("../models/User"));
const getAllUsers = (req, res, next) => {
    User_1.default.findAll({})
        .then((data) => {
        res.send({ name: 'User Route', data });
    })
        .catch((err) => next(err));
};
exports.getAllUsers = getAllUsers;
//# sourceMappingURL=user.js.map