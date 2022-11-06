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
    // códigos da regra de negócio para classificação de horas extras e sobreviso ({values: ['1601', '1602', '3000', '3001', '1809', '3016']}),
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fator: {
    // fator de multiplicação existe somente para horas extra noturnas correspondente aos códigos 3000 e 3001 ({values: ['1.1428571']})
    type: DataTypes.STRING,
    allowNull: false,
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
