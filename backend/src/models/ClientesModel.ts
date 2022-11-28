import { DataTypes } from "sequelize";
import { db } from "../database/db";

const ClientesModel = db.define("clientes", {
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
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'ativo',
    validate: {
        customValidator: (value: string) => {
            const enums = ['ativo', 'inativo']
            if (!enums.includes(value)) {
                throw new Error('not a valid option')
            }
        } 
    }
  },
  contato: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numero_projeto: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nome_projeto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status_projeto: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'ativo',
    validate: {
        customValidator: (value: string) => {
            const enums = ['ativo', 'inativo']
            if (!enums.includes(value)) {
                throw new Error('not a valid option')
            }
        } 
    }
  },
});

export default ClientesModel;
