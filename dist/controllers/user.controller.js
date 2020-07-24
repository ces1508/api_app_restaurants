"use strict";
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
const repositories_1 = require("../repositories/");
class UserController {
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const userData = req.body;
            const newUser = yield repositories_1.UserRepository.create(userData);
            if (newUser.error === true)
                return next(newUser);
            res.status(201).json({
                newUser,
                created: true
            });
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