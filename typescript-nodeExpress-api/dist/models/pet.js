"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const petSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    breed: {
        type: String,
        required: true,
    },
    ownerId: {
        type: mongoose_1.Types.ObjectId,
        ref: 'Owner',
        required: true,
    },
});
const Pet = mongoose_1.model('Pet', petSchema);
exports.default = Pet;
