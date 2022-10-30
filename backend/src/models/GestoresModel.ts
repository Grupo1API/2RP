import { DataTypes } from 'sequelize';
import { db } from '../database/db';

const GestoresModel = db.define('gestores', {
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
  status: {
    type: DataTypes.ENUM({values: ['ativo', 'inativo']}),
    allowNull: false,
    defaultValue: 'ativo'
  }
});

export default GestoresModel;