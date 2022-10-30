import { DataTypes } from 'sequelize';
import { db } from '../database/db';

const TurnosModel = db.define('turnos', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  entrada_1: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  saida_1: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  entrada_2: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  saida_2: {
    type: DataTypes.TIME,
    allowNull: false,
  }
});

export default TurnosModel;