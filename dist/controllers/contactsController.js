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
exports.remove = exports.find = exports.edit = exports.store = exports.index = void 0;
const contact_1 = __importDefault(require("../models/contact"));
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contact_1.default.findAll();
    res.send(result);
});
exports.index = index;
const store = (req, res) => {
    var _a;
    const result = contact_1.default.create(Object.assign(Object.assign({}, req.body), { avatar: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path.replace('public/', '') }));
    res.send(result);
};
exports.store = store;
const edit = (req, res) => {
    var _a, _b;
    const data = ((_a = req.file) === null || _a === void 0 ? void 0 : _a.path)
        ? Object.assign(Object.assign({}, req.body), { avatar: (_b = req.file) === null || _b === void 0 ? void 0 : _b.path.replace('public/', '') }) : req.body;
    const result = contact_1.default.update(data, { where: { id: req.params.id } });
    res.send(result);
};
exports.edit = edit;
const find = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contact_1.default.findOne({ where: { id: req.params.id } });
    res.send(result);
});
exports.find = find;
const remove = (req, res) => {
    const result = contact_1.default.destroy({ where: { id: req.params.id } });
    res.send(result);
};
exports.remove = remove;
