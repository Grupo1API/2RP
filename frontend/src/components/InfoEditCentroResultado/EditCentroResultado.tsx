import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {ColorButton} from '../../components/Button/styles';
import "./style.css";

export default function EditCentroResultado({ dados, modalEdit }) {
  const [nome, setNome] = useState(dados.nome);
  const [status, setStatus] = useState("");
  const [numero, setNumero] = useState(dados.numero);
  const [id] = useState(dados.id);

  async function handleUpdate() {
    const dado = {
      nome: nome,
      numero: numero,
    };
    try {
      await fetch(`http://localhost:3001/centro-de-resultado/${id}`, {
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
        <h2>Edição de Centro de Resultado</h2>

      {/*  nome */}
      <div className="form-floating mb-4">
        <TextField fullWidth
          id="outlined-basic" 
          label="Nome do CR"
          value={nome}
          required={true}
          onChange={(e) => setNome(e.target.value)}
          >
        </TextField>
        </div>

      {/* numero */}
      <div className="form-floating mb-4">
      <TextField fullWidth
          type="number"
          id="outlined-basic" 
          label="Número do CR"
          variant="outlined"
          value={numero}
          required={true}
          onChange={(e) => setNumero(e.target.value)}>
        </TextField>
      </div>


        
      {/* Botão */}
      <div className ="form-btn">
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