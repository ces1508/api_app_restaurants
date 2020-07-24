"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appHandlerError = (err, req, res, next) => {
    var _a, _b;
    const httpStatus = (_a = err.status) !== null && _a !== void 0 ? _a : 500;
    const message = (_b = err.message) !== null && _b !== void 0 ? _b : 'INTERNAL_SERVER';
    res
        .status(httpStatus)
        .json({
        error: 'trsue',
        status: httpStatus,
        message: message
    });
    next(err);
};
exports.default = appHandlerError;
//# sourceMappingURL=errors.middlewares.js.map