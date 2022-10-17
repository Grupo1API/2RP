import { DataTypes } from 'sequelize';
import { db } from '../db';
import TurnosModel from './TurnosModel';

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
  role:  {
    type: DataTypes.ENUM({values: ['administrador', 'gestor', 'colaborador']}),
    allowNull: false,
    defaultValue: 'colaborador'
  }
});

ColaboradoresModel.belongsTo(TurnosModel);

export default ColaboradoresModel;