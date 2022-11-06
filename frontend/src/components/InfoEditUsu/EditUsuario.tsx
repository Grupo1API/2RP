import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { ColorButton } from "../Button/styles";

export default function EditUsuario(dados, modalEdit) {
  const [nome,setNome] = useState(dados.nome);
  const [matricula, setMatricula] = useState(dados.matricula);
  const [email, setMail] = useState(dados.email);
  const [senha, setSenha] = useState(dados.senha);
  const [role, setRole] = useState(dados.role);
  const [turnos,setTurnos] = useState("");
  const [turnoId, setTurnoId] = useState(dados.turnoId);
  const [id] = useState(dados.id);

  async function handleUpdate () {
    const dado = {
        nome:nome,
        matricula:matricula,
        turnoId: turnoId,
        email: email,
        senha: senha,
        role:role,

    };

    try{
      await fetch(`http://localhost:3001/usuarios/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dado),
      });
  
      return;
    } catch (error) {
      let message = 'Erro desconhecido'
      if (error instanceof Error) message = error.message
      reportError({message})
    }
    }

    useEffect(() => {
      const buscaTurno = async () => {
        const responseTurno = await fetch(`http://localhost:3001/turnos`,{
          method:'GET'
        });
        
        const turnos = await responseTurno.json();
        console.log(turnos)
        setTurnos(turnos);
      };
      buscaTurno();
    }, [turnoId]);

    async function handleChange(event: SelectChangeEvent) {
      setTurnoId(event.target.value as string);
    };
    
    async function handleChangeRole(event: SelectChangeEvent) {
      setRole(event.target.value as string);
    };

  return (
    <div>
      <div className="pagina">
      <h2>Editar Usuário</h2>

      {/* Turno */}
      <div className="form-floating mb-4">
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth variant="outlined" className="select input">
        <InputLabel id="demo-simple-select-outlined-label">
                  Turno
        </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={turnoId}
            onChange={handleChange}
            label="Turno"
            >
            {turnos && turnos.map((x) => (
            <MenuItem value={x.id}>
             {`ID: ${x.id}`}
            </MenuItem>
             ))}
          </Select>
      </FormControl>
      </Box>
      </div>

      {/*  nome */}
      <div className="form-floating mb-4">
        <TextField fullWidth
          id="outlined-basic" 
          label="Nome do Colaborador"
          value={nome}
          onChange={(e) => setNome(e.target.value)}>
        </TextField>
      </div>

      {/*  matricula */}
      <div className="form-floating mb-4">
        <TextField fullWidth
          id="outlined-basic" 
          label="Matrícula do Colaborador"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}>
        </TextField>
      </div>

        {/*  email */}
        <div className="form-floating mb-4">
        <TextField fullWidth
          id="outlined-basic" 
          label="E-mail"
          value={email}
          onChange={(e) => setMail(e.target.value)}>
        </TextField>
      </div>

        {/*  senha */}
        <div className="form-floating mb-4">
        <TextField fullWidth
          type="password"
          id="outlined-basic" 
          label="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}>
        </TextField>
      </div>
        
      {/*  perfil */}
      <div className="form-floating mb-4">
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" >Escolha o perfil</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={role}
                label="Escolha o tipo de apontamento"
                onChange={handleChangeRole}
              >
                  <MenuItem value={'colaborador'}>Colaborador</MenuItem>
                  <MenuItem value={'gestor'}>Gestor</MenuItem>
                  <MenuItem value={'admin'}>Administrador</MenuItem>
              </Select>
          </FormControl>
        </Box>
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
      </div>
    </div>
  );
}
