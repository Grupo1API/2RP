import { DataTypes } from 'sequelize';
import { db } from '../db';
import ColaboradoresModel from './ColaboradoresModel';
import GestoresModel from './GestoresModel';
import ProjetosModel from './ProjetosModel';

const ApontamentoHorasModel = db.define('apontamento_horas', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  tipo_apontamento: {
    type: DataTypes.ENUM({values: ['hora extra', 'sobreaviso']}),
    allowNull: false,
    defaultValue: 'hora extra'
  },
  horario_inicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  horario_fim: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  justificativa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM({values: ['aprovado', 'reprovado']}),
    allowNull: false,
    defaultValue: 'reprovado'
  }
});

ApontamentoHorasModel.belongsTo(ColaboradoresModel, {foreignKey: 'colaboradorId'});
ApontamentoHorasModel.belongsTo(GestoresModel, {foreignKey: 'gestorId'});
ApontamentoHorasModel.belongsTo(ProjetosModel);

export default ApontamentoHorasModel;