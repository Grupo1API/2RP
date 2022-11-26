import TextField from "@mui/material/TextField";
import React, {useState} from "react";
import {ColorButton} from '../../components/Button/styles';
import './style.css'

function Turno(dados){
  const [entrada_1, setEntrada1] = useState("");
  const [saida_1, setSaida1] = useState("");
  const [entrada_2, setEntrada2] = useState("");
  const [saida_2, setSaida2] = useState("");


  async function handleSubmit(event: { preventDefault: () => void; }){
    event.preventDefault();
    const dado = {
    entrada_1: entrada_1,
    saida_1: saida_1,
    entrada_2: entrada_2,
    saida_2: saida_2,

    };
    const token = localStorage.getItem("user")
      try{
        await fetch('http://localhost:3001/turnos/', {
          method: "POST",
          headers: new Headers({
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
         }),
          body: JSON.stringify(dado),
        });

        setEntrada1("");
        setSaida1("");
        setEntrada2("");
        setSaida2("");

        return;
      } catch (error) {
        let message = 'Erro desconhecido'
        if (error instanceof Error) message = error.message
        reportError({message})
      }
    }

    return(
      <div className="pagina">

        <h2>Cadastro de Turnos</h2>

      {/* Entrada 1 */}
      <div className="row g-2">
        <div className="col-md">
        <div className="form-floating mb-3">
          <TextField fullWidth 
            id="outlined-basic" 
            label="Entrada 1" 
            placeholder = "00:00"
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
              placeholder = "00:00"
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
            placeholder = "00:00"
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
              placeholder = "00:00"
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
        <div className ="form-btn">
          <ColorButton 
            variant="contained"
            onClick={handleSubmit}
          >
            Enviar
          </ColorButton>
        </div>
      </div>
    );
  }

  export default Turno;