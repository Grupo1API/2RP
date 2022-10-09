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
    type: DataTypes.ENUM({values: ['teste']}),
    allowNull: false,
    defaultValue: 'teste'
  },
  fator: {
    type: DataTypes.INTEGER,
    // como existe um fator de multiplicação correspondente a um unico código verificar se pode haver um defaulte value e ou o fator pode ser setado caso o código seja o certo 
    allowNull: false,
  },
  descricao_verba: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

VerbasModel.belongsTo(ApontamentoHorasModel);


export default VerbasModel;