"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = __importStar(require("uuid"));
const repositories_1 = require("../repositories/");
const lib_1 = require("../lib");
class UserController {
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = req.body;
            const newUser = yield repositories_1.UserRepository.create(body);
            if (newUser.error === true)
                return next(newUser);
            let user = newUser.data;
            user = user.toJSON();
            delete user.password;
            delete user.passwordResetToken;
            delete user.passwordResetTokenExpired;
            // console.log(userData)
            try {
                const jwtToken = yield lib_1.JWT.generate(user, { jwtid: uuid.v4(), subject: 'user', notBefore: '2s' });
                res.status(201).json({
                    user,
                    token: jwtToken,
                    created: true
                });
            }
            catch (e) {
                const error = {
                    message: e.message,
                    status: 500
                };
                next(error);
            }
        });
    }
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const { page: number = 1 } = req.params
            const users = yield repositories_1.UserRepository.find({});
            res.status(200).json({ users });
        });
    }
}
exports.default = new UserController();
//# sourceMappingURL=user.controller.js.map