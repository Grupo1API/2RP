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
    type: DataTypes.ENUM({ values: ["ativo", "inativo"] }),
    allowNull: false,
    defaultValue: "ativo",
  },
});

ClassificacaoHorasModel.belongsTo(VerbasModel);
ApontamentoHorasModel.belongsTo(VerbasModel);

export default ClassificacaoHorasModel;
