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
});

VerbasModel.belongsTo(ClassificacaoHorasModel);
ApontamentoHorasModel.belongsTo(VerbasModel);

export default ClassificacaoHorasModel;