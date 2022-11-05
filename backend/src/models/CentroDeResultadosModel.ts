import { DataTypes } from 'sequelize';
import { db } from '../db';
import ClientesModel from './ClientesModel';
import UsuariosModel from './UsuariosModel';

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

CentroDeResultados.belongsTo(UsuariosModel, {foreignKey: 'usuarioId'});
CentroDeResultados.belongsTo(UsuariosModel, {foreignKey: 'gestorId'});
CentroDeResultados.belongsTo(ClientesModel, {foreignKey:'projetoId'});

export default CentroDeResultados;