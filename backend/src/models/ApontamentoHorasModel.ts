import { DataTypes } from 'sequelize';
import { db } from '../db';
import ClientesModel from './ClientesModel';
import UsuariosModel from './UsuariosModel';
import VerbasModel from './VerbasModel';
import { db } from '../database/db';
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
    type: DataTypes.ENUM({values: ['aprovado', 'reprovado']}),
    allowNull: false,
    defaultValue: 'reprovado'
  }
});

ApontamentoHorasModel.belongsTo(VerbasModel, {foreignKey:'verbaId'});
ApontamentoHorasModel.belongsTo(UsuariosModel, {foreignKey: 'usuarioId'});
ApontamentoHorasModel.belongsTo(UsuariosModel, {foreignKey: 'gestorId'});
ApontamentoHorasModel.belongsTo(ClientesModel, {foreignKey:'projetoId'});

export default ApontamentoHorasModel;