import TextField from "@mui/material/TextField";
import React, {useState} from "react";
import {ColorButton} from '../../components/Button/styles';
import './style.css'

function Cliente(){
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [contato,setContato] = useState("");


  async function handleSubmit(event: { preventDefault: () => void; }){
    event.preventDefault();
    const dado = {
      nome: nome,
      cnpj: cnpj,
      contato: contato

    };
      try{
        await fetch('http://localhost:3001/clientes', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dado),
        });

        setNome("");
        setCnpj("");
        setContato("");

        return;
      } catch (error) {
        let message = 'Erro desconhecido'
        if (error instanceof Error) message = error.message
        reportError({message})
      }
    }

    return(
      <div className="pagina">

        <h2>Cadastro de Clientes</h2>

        {/*  nome */}
        <div className="form-floating mb-4">
        <TextField fullWidth
          id="outlined-basic" 
          label="Razão Social"
          value={nome}
          required={true}
          onChange={(e) => setNome(e.target.value)}>
        </TextField>
        </div>

        {/* cnpj */}
        <div className="form-floating mb-4">
          <TextField fullWidth
          type="number"
          id="outlined-basic" 
          label="CNPJ" 
          variant="outlined"
          placeholder="XX.XXX.XXX/XXXX-XX"
          value={cnpj}
          required={true}
          onChange={(e) => setCnpj(e.target.value)}>
          </TextField>
        </div>

        {/* contato */}
        <div className="form-floating mb-4">
        <TextField fullWidth
          id="outlined-basic" 
          label="Contato" 
          variant="outlined"
          value={contato}
          onChange={(e) => setContato(e.target.value)}>
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
  }

  export default Cliente;