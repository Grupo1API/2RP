import { DataTypes } from "sequelize";
import { db } from "../database/db";

const VerbasModel = db.define("verbas", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  codigo: {
    type: DataTypes.ENUM({
      values: ["1601", "1602", "3000", "3001", "1809", "3016"],
    }),
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fator: {
    // fator de multiplicação existe somente para horas extra noturnas correspondente aos códigos 3000 e 3001 ({values: ['1.1428571']})
    type: DataTypes.STRING,
    allowNull: true,
  },
  percentual: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM({ values: ["ativo", "inativo"] }),
    allowNull: false,
    defaultValue: "ativo",
  },
});

export default VerbasModel;
