import { DataTypes } from 'sequelize';
import { db } from '../db';
import ApontamentoHorasModel from "./ApontamentoHorasModel";

const VerbasModel = db.define('verbas', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  codigo: {
    // códigos da regra de negócio para classificação de horas extras e sobreviso
    type: DataTypes.ENUM({values: ['1601', '1602', '3000', '3001', '1809', '3016']}),
    allowNull: false,
    defaultValue: ''
  },
  fator: {
    // fator de multiplicação existe somente para horas extra noturnas correspondente aos códigos 300 e 3001
    type: DataTypes.ENUM({values: ['1.1428571']}),
    allowNull: false,
    defaultValue: ''
  },
  descricao_verba: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

VerbasModel.belongsTo(ApontamentoHorasModel);

export default VerbasModel;