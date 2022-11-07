import TextField from "@material-ui/core/TextField";
import React from "react";
import "./style.css";

export default function InfoTurno ({ dados }) {
  return (
    <div className="pagina">
      <h2>Informações da Turno</h2>

            {/* Entrada 1 */}
            <div className="row g-2">
        <div className="col-md">
        <div className="form-floating mb-3">
          <TextField fullWidth 
            id="outlined-basic" 
            label="Entrada 1" 
            InputLabelProps={{ shrink: true }}
            value={dados.entrada_1}
            disabled
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
              InputLabelProps={{ shrink: true }}
              value={dados.saida_1}
              disabled
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
            value={dados.entrada_2}
            disabled
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
              InputLabelProps={{ shrink: true }}
              value={dados.saida_2}
              disabled
            >
            </TextField>
          </div>
        </div>
      </div>
    </div>
  );
}