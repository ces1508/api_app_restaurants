"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiErrorHandler = (err, req, res, next) => {
    res.status(err.status).json({ error: false, message: err.message, code: err.code });
    next(new Error(err.message));
};
exports.default = apiErrorHandler;
//# sourceMappingURL=apiErrorHandler.middlewares.js.map