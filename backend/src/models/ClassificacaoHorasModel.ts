import { DataTypes } from "sequelize";
import { db } from "../database/db";
import VerbasModel from "./VerbasModel";
import ApontamentoHorasModel from "./ApontamentoHorasModel";

const ClassificacaoHorasModel = db.define("ClassificacaoHoras", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  quantidadeHoras: {
    type: DataTypes.INTEGER,
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

ClassificacaoHorasModel.belongsTo(VerbasModel, {as: 'verba', foreignKey: 'verbaId'});
ClassificacaoHorasModel.belongsTo(ApontamentoHorasModel,{as: 'apontamento', foreignKey:'apontamentoId'});

export default ClassificacaoHorasModel;
