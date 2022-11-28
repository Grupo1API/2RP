import { DataTypes, Model, Optional } from "sequelize";
import { db } from "../database/db";
import CentroDeResultados from "./CentroDeResultadosModel";
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
  crId:Number;
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
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'colaborador',
    validate: {
        customValidator: (value: string) => {
            const enums = ['colaborador', 'gestor','administrador']
            if (!enums.includes(value)) {
                throw new Error('not a valid option')
            }
        } 
    }
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
  turnoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  crId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

UsuariosModel.belongsTo(TurnosModel, {as:'turno', foreignKey: "turnoId" });

export default UsuariosModel;
