"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT = void 0;
const jwt_1 = __importDefault(require("./jwt"));
const SECRET_JWT_KEY = process.env.JWT_SECRET;
const SIGNINJWTOPTIONS = {
    expiresIn: '5m',
    algorithm: 'HS256',
    noTimestamp: false,
    notBefore: '2s'
};
exports.JWT = new jwt_1.default(SECRET_JWT_KEY, SECRET_JWT_KEY, SIGNINJWTOPTIONS);
//# sourceMappingURL=index.js.map