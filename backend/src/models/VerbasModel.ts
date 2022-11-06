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
  fator: {
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
