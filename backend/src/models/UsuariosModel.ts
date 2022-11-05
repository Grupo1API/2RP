import { DataTypes,  Model, Optional } from 'sequelize';
import { db } from '../database/db';
import ColaboradoresModel from "./ColaboradoresModel";

interface UserAttributes {
  id: Number;
  role: string;
  email: string;
  senha: string;
}

interface UserCreationAttributes
  extends Optional<UserAttributes, 'id'> {}

interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {
      createdAt?: Date;
      updatedAt?: Date;
    }

const UsuariosModel = db.define<UserInstance>(
  'usuarios', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  role: {
    type: DataTypes.ENUM({values: ['admin', 'gestor', 'colaborador']}),
    allowNull: false,
    defaultValue: 'colaborador'
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

ColaboradoresModel.belongsTo(UsuariosModel);

export default UsuariosModel;