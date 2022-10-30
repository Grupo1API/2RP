import { DataTypes } from 'sequelize';
import { db } from '../database/db';
import TurnosModel from "./TurnosModel";

const ColaboradoresModel = db.define('colaboradores', {
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
  matricula: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  tipo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
});

TurnosModel.belongsTo(ColaboradoresModel);

export default ColaboradoresModel;