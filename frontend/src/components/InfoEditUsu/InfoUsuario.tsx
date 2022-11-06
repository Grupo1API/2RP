import React from "react";
import {  InputLabel,TextField } from "@mui/material";
import "./style.css";

export default function InfoUsuario({ dados }) {
  return (
    <div className="pagina">
      <h2>Informaçoes do Usuário</h2>

      {/* Turno */}
      <div className="form-floating mb-4">
        <TextField fullWidth      
            id="outlined-basic"
            value={dados.turnoId}
            label="Turno"
            disabled
        >
        </TextField>
      </div>

      {/*  nome */}
      <div className="form-floating mb-4">
        <TextField fullWidth
          id="outlined-basic" 
          label="Nome do Colaborador"
          value={dados.nome}
          disabled
        >
        </TextField>
      </div>

      {/*  matricula */}
      <div className="form-floating mb-4">  
        <TextField fullWidth
          id="outlined-basic" 
          label="Matrícula do Colaborador"
          value={dados.matricula}
          disabled
          >
        </TextField>
      </div>

        {/*  email */}
        <div className="form-floating mb-4">  
        <TextField fullWidth
          id="outlined-basic" 
          label="E-mail"
          value={dados.email}
          disabled
          >
        </TextField>
      </div>
        
      {/*  perfil */}
      <div className="form-floating mb-4">
       <TextField fullWidth
            id="outlined-basic"
            label="Perfil"
            value={dados.role}
            disabled
            >
        </TextField>
      </div>
    </div>
  );
}