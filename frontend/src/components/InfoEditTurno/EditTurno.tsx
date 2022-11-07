import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {ColorButton} from '../../components/Button/styles';
import "./style.css";

export default function EditTurno({ dados, modalEdit }) {
    const [entrada_1, setEntrada1] = useState(dados.entrada_1);
    const [saida_1, setSaida1] = useState(dados.saida_1);
    const [entrada_2, setEntrada2] = useState(dados.entrada_2);
    const [saida_2, setSaida2] = useState(dados.saida_2);
    const [id] = useState(dados.id);

  async function handleUpdate() {
    const dado = {
        entrada_1: entrada_1,
        saida_1: saida_1,
        entrada_2: entrada_2,
        saida_2: saida_2,
    };
    try {
      await fetch(`http://localhost:3001/turnos/${id}`, {
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
        <h2>Edição de Turno</h2>

      {/* Entrada 1 */}
      <div className="row g-2">
        <div className="col-md">
        <div className="form-floating mb-3">
          <TextField fullWidth 
            id="outlined-basic" 
            label="Entrada 1" 
            variant="outlined"  
            InputLabelProps={{ shrink: true }}
            value={entrada_1}
            onChange={e => setEntrada1(e.target.value)}
          >
          </TextField>
        </div>
      </div>

      {/* Saída 1 */} 
      <div className="col-md">
          <div className="form-floating mb-3">
            <TextField fullWidth
              id="outlined-basic" 
              label="Saída 1" 
              variant="outlined"  
              InputLabelProps={{ shrink: true }}
              value={saida_1}
              onChange={e => setSaida1(e.target.value)}
            >
            </TextField>
          </div>
        </div>
      </div>

      {/* Entrada 2 */}
      <div className="row g-2">
        <div className="col-md">
        <div className="form-floating mb-3">
          <TextField fullWidth
            id="outlined-basic" 
            label="Entrada 2" 
            variant="outlined"  
            InputLabelProps={{ shrink: true }}
            value={entrada_2}
            onChange={e => setEntrada2(e.target.value)}
          >
          </TextField>
        </div>
      </div>

      {/* Saída 2 */} 
      <div className="col-md">
          <div className="form-floating mb-3">
            <TextField fullWidth
              id="outlined-basic" 
              label="Saída 2" 
              variant="outlined"  
              InputLabelProps={{ shrink: true }}
              value={saida_2}
              onChange={e => setSaida2(e.target.value)}
            >
            </TextField>
          </div>
        </div>
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