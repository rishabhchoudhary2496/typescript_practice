"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ownerSchema = new mongoose_1.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
});
const Owner = mongoose_1.model('Owner', ownerSchema);
exports.default = Owner;
