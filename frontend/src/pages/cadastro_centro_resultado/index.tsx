import TextField from "@mui/material/TextField";
import React, {useState} from "react";
import {ColorButton} from '../../components/Button/styles';
import './style.css'

function CentroResultado (dados) {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [projetoId,setProjetoId] = useState("");

  async function handleSubmit(event: { preventDefault: () => void; }){
    event.preventDefault();
    const dado = {
      nome: nome,
      numero: numero,
      projetoId:projetoId,
    };
    const token = localStorage.getItem("user")
    try{
      await fetch('http://localhost:3001/centro-de-resultado/', {
        method: "POST",
        headers: new Headers({
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
       }),
        body: JSON.stringify(dado),
      });

      setNome("");
      setNumero("");
      setProjetoId("");


      return;
    } catch (error) {
      let message = 'Erro desconhecido'
      if (error instanceof Error) message = error.message
      reportError({message})
    }
  }

  return (
    <div className="pagina">

      <h2> Cadastro de Centro de Resultado </h2>

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
            onClick={handleSubmit}
          >
            Enviar
          </ColorButton>
        </div>
    </div>
  );
};

export default CentroResultado;
