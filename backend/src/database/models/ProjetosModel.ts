import { DataTypes } from 'sequelize';
import { db } from '../db';
import CentroDeResultados from "./CentroDeResultadosModel";
import ClientesModel from "./ClientesModel";

const ProjetosModel = db.define('projetos', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  numero_projeto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
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

ProjetosModel.belongsTo(ClientesModel);

export default ProjetosModel;