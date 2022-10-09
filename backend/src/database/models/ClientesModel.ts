import { DataTypes } from 'sequelize';
import { db } from '../db';

const ClientesModel = db.define('clientes', {
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
  cnpj: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  status: {
    type: DataTypes.ENUM({values: ['ativo', 'inativo']}),
    allowNull: false,
    defaultValue: 'ativo'
  },
  contato: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

export default ClientesModel;