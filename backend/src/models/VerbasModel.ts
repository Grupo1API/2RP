import { DataTypes } from "sequelize";
import { db } from "../database/db";

const VerbasModel = db.define("verbas", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  descricao:{
    type: DataTypes.STRING,
  },
  codigo: {
    // códigos da regra de negócio para classificação de horas extras e sobreviso ({values: ['1601', '1602', '3000', '3001', '1809', '3016']}),
    type: DataTypes.STRING,
    allowNull: false,
  },
  fator: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  percentual: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  horario_inicio: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  horario_fim: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  dia_semana:{
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    //defaultValue: [],
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

export default VerbasModel;
