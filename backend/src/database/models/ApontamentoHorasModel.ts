import { DataTypes } from 'sequelize';
import { db } from '../db';
import GestoresModel from './GestoresModel';
import ColaboradoresModel from './ColaboradoresModel';
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
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
});

ColaboradoresModel.belongsTo(ApontamentoHorasModel);
GestoresModel.belongsTo(ApontamentoHorasModel);
ProjetosModel.belongsTo(ApontamentoHorasModel);

export default ApontamentoHorasModel;