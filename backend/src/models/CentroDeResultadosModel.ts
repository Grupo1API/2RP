import { DataTypes } from "sequelize";
import { db } from "../database/db";
import ClientesModel from "./ClientesModel";
import UsuariosModel from "./UsuariosModel";

const CentroDeResultados = db.define("centro_de_resultados", {
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
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
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
  }
}
);

CentroDeResultados.hasMany(UsuariosModel, {as: 'centro_de_resultado',foreignKey:'crId'}); //hasMany cria a chave estrangeira na model de origem (UsuariosModel)
UsuariosModel.belongsTo(CentroDeResultados, {as: 'centro_de_resultado',foreignKey:'crId'});

CentroDeResultados.belongsTo(ClientesModel, { as: 'cliente',foreignKey: "clienteId" });


export default CentroDeResultados;
