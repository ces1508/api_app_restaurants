"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const index_secrets_1 = require("./secrets/index.secrets");
const app = express_1.default();
// middilewares
app.use(helmet_1.default());
app.use(body_parser_1.default.json());
// connect to database
console.log(index_secrets_1.DATABASE_NAME);
console.log(index_secrets_1.DATABASE_USER);
console.log(index_secrets_1.DATABASE_USER_PASSWORD);
mongoose_1.default.connect(`mongodb://${index_secrets_1.DATABASE_HOST}`, {
    user: index_secrets_1.DATABASE_USER,
    pass: index_secrets_1.DATABASE_USER_PASSWORD,
    db: index_secrets_1.DATABASE_NAME,
    useFindAndModify: true,
    useNewUrlParser: true
})
    .then(() => {
    console.log('database connected');
})
    .catch(err => {
    console.log('error connecting to database', err.message);
});
app.use('/', (req, res) => {
    res.send('hola typesript');
});
exports.default = app;
//# sourceMappingURL=app.js.map