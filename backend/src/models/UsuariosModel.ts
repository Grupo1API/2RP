import { DataTypes, Model, Optional } from "sequelize";
import { db } from "../database/db";
import TurnosModel from "./TurnosModel";

interface UserAttributes {
  id: Number;
  role: string;
  nome: string;
  matricula: string;
  email: string;
  senha: string;
  status: string;
  turnoId: Number;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const UsuariosModel = db.define<UserInstance>("usuarios", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  matricula: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  role: {
    type: DataTypes.ENUM({
      values: ["administrador", "gestor", "colaborador"],
    }),
    allowNull: false,
    defaultValue: "colaborador",
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM({ values: ["ativo", "inativo"] }),
    allowNull: false,
    defaultValue: "ativo",
  },
  turnoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

UsuariosModel.belongsTo(TurnosModel, { foreignKey: "turnoId" });

export default UsuariosModel;
