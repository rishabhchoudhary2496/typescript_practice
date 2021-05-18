"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./utils/db"));
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
db_1.default();
app.use(express_1.default.json());
routes_1.default(app);
app.get('/', (req, res) => {
    res.json({ message: 'api serving' });
});
app.listen(5000, () => {
    console.log('server running');
});
