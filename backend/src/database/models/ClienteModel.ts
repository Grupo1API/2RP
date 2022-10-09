import { DataTypes } from 'sequelize';
import { db } from '../db';

export const ClienteModel = db.define('clientes', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cnpj: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  status: {
    type: DataTypes.ENUM({values: ['ativo', 'inativo']}),
    defaultValue: 'ativo'
  },
  contato: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});