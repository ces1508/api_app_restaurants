"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/promise-function-async */
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class HandleJWT {
    constructor(secretOrPrivateKey, secretOrPublicKey, options) {
        this.secretOrPrivateKey = secretOrPrivateKey;
        this.secretOrPublicKey = secretOrPublicKey;
        this.options = options;
    }
    generate(payload, jwtOptions) {
        return new Promise((resolve, reject) => {
            jsonwebtoken_1.default.sign(payload, this.secretOrPrivateKey, Object.assign(Object.assign({}, jwtOptions), this.options), (err, token) => {
                if (err !== null)
                    return reject(err.message);
                resolve(token);
            });
        });
    }
    refreshToken(token, refreshOption) {
        const payload = jsonwebtoken_1.default.verify(token, this.secretOrPublicKey, refreshOption);
        delete payload.iat;
        delete payload.jwtid;
        delete payload.expiredIn;
        delete payload.jti;
        const jwtSignOptions = Object.assign(Object.assign({}, this.options), refreshOption);
        return this.generate(payload, jwtSignOptions);
    }
}
exports.default = HandleJWT;
//# sourceMappingURL=jwt.js.map