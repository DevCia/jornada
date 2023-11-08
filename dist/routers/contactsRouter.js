"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const express_1 = require("express");
const contactsController_1 = require("../controllers/contactsController");
const uploadImages_1 = __importDefault(require("../service/uploadImages"));
const removeOldFile_1 = __importDefault(require("../service/removeOldFile"));
const route = (0, express_1.Router)();
exports.default = route;
route.get('/', contactsController_1.index);
route.get('/:id', contactsController_1.find);
route.post('/', uploadImages_1.default.single('avatar'), contactsController_1.store);
route.put('/:id', uploadImages_1.default.single('avatar'), removeOldFile_1.default, contactsController_1.edit);
route.delete('/:id', contactsController_1.remove);
