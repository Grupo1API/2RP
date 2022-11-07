import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {ColorButton} from '../../components/Button/styles';
import "./style.css";

export default function EditVerba({ dados, modalEdit }) {
  const [codigo, setCodigo] = useState(dados.codigo);
  const [fator, setFator] = useState(dados.fator);
  const [percentual,setPercentual] = useState(dados.percentual);
  const [id] = useState(dados.id);

  async function handleUpdate() {
    const dado = {
        codigo: codigo,
        fator: fator,
        percentual: percentual,
    };
    try {
      await fetch(`http://localhost:3001/verbas/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dado),
      });

      return;
    } catch (error) {
      let message = "Erro desconhecido";
      if (error instanceof Error) message = error.message;
      reportError({ message });
    }
  }

  return (
    <div className="pagina">
      <form onSubmit={handleUpdate}>
        <h2>Edição de Verba</h2>

        {/*  código da verba */}
        <div className="form-floating mb-4">
        <TextField fullWidth
          id="outlined-basic" 
          label="Código da Verba"
          variant="outlined" 
          value={codigo}
          required={true}
          onChange={e => setCodigo(e.target.value)}>
        </TextField>
        </div>

        {/* percentual */}
        <div className="form-floating mb-4">
        <TextField fullWidth
          id="outlined-basic" 
          label="Percentual" 
          variant="outlined"
          value={percentual}
          required={true}
          onChange={e => setPercentual(e.target.value)}>
          </TextField>
        </div>

        {/* fator de multiplicação */}
        <div className="form-floating mb-4">
          <TextField fullWidth
          id="outlined-basic" 
          label="Fator" 
          variant="outlined"
          value={fator}
          onChange={e => setFator(e.target.value)}>
          </TextField>
        </div>

        
      {/* Botão */}
      <div>
          <ColorButton 
            variant="contained"
            onClick={handleUpdate}
          >
            Enviar
          </ColorButton>
        </div>

      </form>
    </div>
  );
}