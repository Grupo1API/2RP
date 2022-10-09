import { DataTypes } from 'sequelize';
import { db } from '../db';

export const SobreavisoModel = db.define('sobreavisos', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  matricula: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  nome_completo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  entrada_1: {
    type: DataTypes.DATE,
    allowNull: false
  },
  saida_1: {
    type: DataTypes.DATE,
    allowNull: false
  },
  entrada_2: {
    type: DataTypes.DATE,
    allowNull: false
  },
  saida_2: {
    type: DataTypes.DATE,
    allowNull: false
  },
  nome_gestor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM({values: ['ativo', 'inativo']}),
    defaultValue: 'ativo'
  }
});