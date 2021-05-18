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
const owner_1 = __importDefault(require("../models/owner"));
const router = express_1.default.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ownersList = yield owner_1.default.find({});
    res.json({ owners: ownersList, message: 'success' });
}));
router.post('/', express_validator_1.body('fullName').exists().isString().trim().escape(), express_validator_1.body('email').exists().isEmail().normalizeEmail().trim().escape(), express_validator_1.body('phone').exists().isString().trim().escape(), express_validator_1.body('address').exists().isString().trim().escape(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullName, email, phone, address } = req.body;
    const owner = yield owner_1.default.create({
        fullName: fullName,
        email: email,
        phone: phone,
        address: address,
    });
    return res.status(200).json({ owner: owner, message: 'sucess' });
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const ownerWithId = yield owner_1.default.findOne({ _id: id });
    res.status(200).json({ owner: ownerWithId });
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const ownerDeleted = yield owner_1.default.deleteOne({ _id: id });
    res.status(200).json({ owner: ownerDeleted });
}));
exports.default = router;
