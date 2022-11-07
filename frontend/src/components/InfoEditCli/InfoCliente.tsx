import TextField from "@material-ui/core/TextField";
import React from "react";
import "./style.css";

export default function InfoCliente({ dados }) {
  return (
    <div className="pagina">
      <h2>Informações do Cliente</h2>

      {/*  nome */}
      <div className="form-floating mb-4">
        <TextField fullWidth
          id="outlined-basic" 
          label="Razão Social"
          value={dados.nome}
          disabled
        >
        </TextField>
        </div>

      {/* cnpj */}
      <div className="form-floating mb-4">
      <TextField fullWidth
          type="number"
          id="outlined-basic" 
          label="CNPJ" 
          value={dados.cnpj}
          disabled
        >
      </TextField>
      </div>

      {/*status*/}
      <div className="form-floating mb-4">
        <TextField fullWidth
          id="outlined-basic" 
          label="Status" 
          disabled
          value={dados.status}
          >
          </TextField>
        </div>

      {/* contato */}
      <div className="form-floating mb-4">
        <TextField fullWidth
          id="outlined-basic" 
          label="Contato" 
          disabled
          value={dados.contato}
          >
          </TextField>
        </div>

    {/*nome do projeto*/}
    <div className="form-floating mb-4">
      <TextField fullWidth
          id="outlined-basic" 
          label="Nome do Projeto" 
          disabled
          value={dados.nome_projeto}
      >
      </TextField>
    </div>


    {/*número do projeto*/}
    <div className="form-floating mb-4">
      <TextField fullWidth
        id="outlined-basic" 
        label="Número do Projeto" 
        disabled
        value={dados.numero_projeto}
        >
      </TextField>
    </div>
    </div>
    
  );
}
