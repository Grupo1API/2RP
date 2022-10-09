import { DataTypes } from 'sequelize';
import { db } from '../db';

export const CentroResultado = db.define('centro-resultados', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  numero: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  status: {
    type: DataTypes.ENUM({values: ['ativo', 'inativo']}),
    defaultValue: 'ativo'
  }
});