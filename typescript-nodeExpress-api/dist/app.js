"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./utils/db"));
const app = express_1.default();
db_1.default();
const add = (a, b) => {
    return a + b;
};
app.get('/', (req, res) => {
    res.json({ sum: add(10, 4) });
});
app.listen(5000, () => {
    console.log('server running');
});
