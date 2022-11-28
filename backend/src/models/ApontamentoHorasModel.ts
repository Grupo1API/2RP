import { DataTypes } from "sequelize";
import { db } from "../database/db";
import ClientesModel from "./ClientesModel";
import UsuariosModel from "./UsuariosModel";

const ApontamentoHorasModel = db.define("apontamento_horas", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  tipo_apontamento: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "hora extra",
    validate: {
        customValidator: (value: string) => {
            const enums = ["hora extra", "sobreaviso"]
            if (!enums.includes(value)) {
                throw new Error('not a valid option')
            }
        } 
    }
  },
  horario_inicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  horario_fim: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  justificativa: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  statusApontamento: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "pendente",
    validate: {
        customValidator: (value: string) => {
            const enums = ["aprovado", "reprovado","pendente"]
            if (!enums.includes(value)) {
                throw new Error('not a valid option')
            }
        } 
    }
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

ApontamentoHorasModel.belongsTo(UsuariosModel, { as: 'colaborador',foreignKey: "usuarioId" });
ApontamentoHorasModel.belongsTo(UsuariosModel, {as: 'gestor', foreignKey: "gestorId" });
ApontamentoHorasModel.belongsTo(ClientesModel, {as: 'projeto', foreignKey: "projetoId" });

export default ApontamentoHorasModel;
