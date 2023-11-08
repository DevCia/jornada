"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_js_1 = __importDefault(require("../db.js"));
exports.default = db_js_1.default.define('contact', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    whatsApp: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM,
        values: ['ACTIVE', 'BLOCKED', 'INATIVE'],
        defaultValue: 'ACTIVE',
    },
    favorite: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    avatar: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
});
