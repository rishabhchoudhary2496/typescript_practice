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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_validator_1 = require("express-validator");
const pet_1 = __importDefault(require("../models/pet"));
const owner_1 = __importDefault(require("../models/owner"));
const mongoose_1 = __importDefault(require("mongoose"));
const router = express_1.default.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const petList = yield pet_1.default.find({}).populate('ownerId');
    res.json({ pets: petList, message: 'success' });
}));
router.post('/', express_validator_1.body('name').exists().isString().trim().escape(), express_validator_1.body('type').exists().isString().trim().escape(), express_validator_1.body('age').exists().isNumeric().trim().escape(), express_validator_1.body('breed').exists().isString().trim().escape(), express_validator_1.body('ownerId').exists().isString().trim().escape(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, type, age, breed, ownerId } = req.body;
    if (!mongoose_1.default.Types.ObjectId.isValid(ownerId)) {
        return res.status(400).json({ error: 'not a valid object id' });
    }
    const owner = yield owner_1.default.findOne({ _id: mongoose_1.default.Types.ObjectId(ownerId) });
    if (!owner)
        return res.status(400).json({ error: 'Owner not found with this id' });
    const pet = yield pet_1.default.create({
        name: name,
        type: type,
        age: age,
        breed: breed,
        ownerId: ownerId,
    });
    return res.status(200).json({ pet: pet, message: 'sucess' });
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const petWithId = yield pet_1.default.findOne({ _id: id });
    res.status(200).json({ pet: petWithId });
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const petDeleted = yield pet_1.default.deleteOne({ _id: id });
    res.status(200).json({ pet: petDeleted });
}));
exports.default = router;
