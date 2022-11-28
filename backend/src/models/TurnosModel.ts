import { DataTypes } from "sequelize";
import { db } from "../database/db";

const TurnosModel = db.define("turnos", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  entrada_1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  saida_1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  entrada_2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  saida_2: {
    type: DataTypes.STRING,
    allowNull: false,
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

});

export default TurnosModel;
