"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const owner_1 = __importDefault(require("./owner"));
const pet_1 = __importDefault(require("./pet"));
function default_1(app) {
    app.use('/api/owner', owner_1.default);
    app.use('/api/pet', pet_1.default);
}
exports.default = default_1;
