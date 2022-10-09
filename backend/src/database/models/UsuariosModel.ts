import { DataTypes } from 'sequelize';
import { db } from '../db';
import ColaboradoresModel from "./ColaboradoresModel";

const UsuariosModel = db.define('usuarios', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  role: {
    type: DataTypes.ENUM({values: ['admin', 'gestor', 'colaborador']}),
    allowNull: false,
    defaultValue: 'colaborador'
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

UsuariosModel.belongsTo(ColaboradoresModel, {foreignKey: 'colaboradorId'});

export default UsuariosModel;