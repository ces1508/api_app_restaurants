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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_repository_1 = __importDefault(require("./base.repository"));
const models_1 = require("../models");
class UserRepository extends base_repository_1.default {
    constructor() {
        super(models_1.User);
    }
    create({ email, password }) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const validateIfUserExits = yield this.findByEmail(email);
                if (validateIfUserExits)
                    throw new Error('user already exits');
                return _super.create.call(this, { email, password });
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    /**
     *
     * @param email user email to search
     *
     * @returns {object } if user exits, return user record,
     * @returns { null } if user doest not exits
     */
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield models_1.User.findOne({ email });
                if (!user)
                    return null;
                return user;
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
}
exports.default = new UserRepository();
//# sourceMappingURL=user.repository.js.map