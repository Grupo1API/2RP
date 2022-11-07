import TextField from "@material-ui/core/TextField";
import React from "react";
import "./style.css";

export default function InfoVerba({ dados }) {
  return (
    <div className="pagina">
      <h2>Informações da Verba</h2>

     {/*  código da verba */}
      <div className="form-floating mb-4">
        <TextField fullWidth
          id="outlined-basic" 
          label="Código da Verba"
          value={dados.codigo}
          disabled
        >
        </TextField>
        </div>

      {/* percentual */}
      <div className="form-floating mb-4">
      <TextField fullWidth
        id="outlined-basic" 
        label="Percentual" 
        disabled
        value={dados.percentual}
        >
      </TextField>
    </div>

       {/* fator de multiplicação */}
      <div className="form-floating mb-4">
        <TextField fullWidth
          id="outlined-basic" 
          label="Fator" 
          disabled
          value={dados.fator}
         >
         </TextField>
        </div>
    </div>
  );
}