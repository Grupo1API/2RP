import TextField from "@material-ui/core/TextField";
import React from "react";
import "./style.css";

export default function InfoCentroResultado({ dados }) {
  return (
    <div className="pagina">
      <h2>Informações do Centro Resultado</h2>

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

      {/* numero */}
      <div className="form-floating mb-4">
      <TextField fullWidth
        id="outlined-basic" 
        label="Número do Projeto" 
        disabled
        value={dados.numero}
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
    </div>
  );
}