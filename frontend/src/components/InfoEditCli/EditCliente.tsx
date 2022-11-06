import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {ColorButton} from '../../components/Button/styles';
import "./style.css";

export default function EditCliente({ dados, modalEdit }) {
  const [nome, setNome] = useState(dados.nome);
  const [status, setStatus] = useState("");
  const [cnpj, setCnpj] = useState(dados.cnpj);
  const [contato, setContato] = useState(dados.contato);
  const [nome_projeto,setNomeProjeto] = useState(dados.nome_projeto);
  const [numero_projeto,setNumeroProjeto] = useState(dados.numero_projeto);
  const [id] = useState(dados.id);

  async function handleUpdate() {
    const dado = {
      nome: nome,
      cnpj: cnpj,
      contato: contato,
      nome_projeto: nome_projeto,
      numero_projeto: numero_projeto
    };
    try {
      await fetch(`http://localhost:3001/clientes/${id}`, {
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
        <h2>Edição de Cliente</h2>

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

        {/* nome do projeto */}
        <div className="form-floating mb-4">
        <TextField fullWidth
          id="outlined-basic" 
          label="Nome do Projeto" 
          variant="outlined"
          value={nome_projeto}
          onChange={(e) => setNomeProjeto(e.target.value)}>
          </TextField>
        </div>

        {/* número do projeto */}
        <div className="form-floating mb-4">
        <TextField fullWidth
          id="outlined-basic" 
          label="Número do Projeto" 
          variant="outlined"
          value={numero_projeto}
          onChange={(e) => setNumeroProjeto(e.target.value)}>
          </TextField>
        </div>

        {/* Botão */}
        <div className ="form-btn">
        <ColorButton 
          type="submit"
          variant="contained"
          onClick={handleUpdate}
          >
          Editar
        </ColorButton>

        </div>
      </form>
    </div>
  );
}
