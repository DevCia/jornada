import { DataTypes } from 'sequelize';
import db from '../db.js';

export default db.define('contact', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  whatsApp: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  status: {
    type: DataTypes.ENUM,
    values: ['ACTIVE', 'BLOCKED', 'INATIVE'],
    defaultValue: 'ACTIVE',
  },
  favorite: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
