import { DataTypes } from 'sequelize';
import { db } from '../db';
import ColaboradoresModel from './ColaboradoresModel';
import GestoresModel from './GestoresModel';
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

CentroDeResultados.belongsTo(ColaboradoresModel, {foreignKey: 'colaboradorId'});
CentroDeResultados.belongsTo(GestoresModel, {foreignKey: 'gestorId'});

export default CentroDeResultados;