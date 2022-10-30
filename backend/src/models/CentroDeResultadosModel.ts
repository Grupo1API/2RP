import { DataTypes } from 'sequelize';
import { db } from '../database/db';
import GestoresModel from "./GestoresModel";
import ColaboradoresModel from "./ColaboradoresModel";
import ProjetosModel from './ProjetosModel';

const CentroDeResultados = db.define('centro_de_resultados', {
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
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  status: {
    type: DataTypes.ENUM({values: ['ativo', 'inativo']}),
    allowNull: false,
    defaultValue: 'ativo'
  }
});

ColaboradoresModel.belongsTo(CentroDeResultados);
GestoresModel.belongsTo(CentroDeResultados);

export default CentroDeResultados;