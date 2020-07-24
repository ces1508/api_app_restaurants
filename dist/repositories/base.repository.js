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
class BaseRepository {
    constructor(model) {
        this.model = model;
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newRegistry = yield this.model.create(data);
                return {
                    data: newRegistry,
                    new_records_id: ['1']
                };
            }
            catch (e) {
                const error = new Error();
                error.message = e.message;
                e.status = 500;
                throw error;
            }
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                data,
                updated: true,
                rows_affected: [id]
            };
        });
    }
    find(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.model.find({});
            return data;
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                data: { id }
            };
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('method not implement yet');
        });
    }
}
exports.default = BaseRepository;
//# sourceMappingURL=base.repository.js.map