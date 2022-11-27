import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ColorButton } from "../../components/Button/styles";
//import { useAuth } from "../../../hooks";

export default function Usuario(dados) {
  const [nome,setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [email, setMail] = useState("");
  const [senha, setSenha] = useState("");
  const [role, setRole] = useState("");
  const [turnos,setTurnos] = useState("");
  const [turnoId, setTurnoId] = useState("");
  const [crId, setCrId] = useState("");
  const [cr,setCr] = useState("");
  //const { usuarioCreate } = useAuth();

  async function salvar (event: { preventDefault: () => void; }) {
    event.preventDefault();

    const dado = {
      nome:nome,
      matricula:matricula,
      turnoId: turnoId,
      email: email,
      senha: senha,
      role:role,
      crId:crId

    };
    const token = localStorage.getItem("user")
  try{
    await fetch('http://localhost:3001/usuarios/', {
      method: "POST",
      headers: new Headers({
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
     }),
      body: JSON.stringify(dado),
    });

    setNome("");
    setMatricula("");
    setMail("");
    setSenha("");
    setRole("");
    setTurnoId("");
    setCrId("");

    return;
  } catch (error) {
    let message = 'Erro desconhecido'
    if (error instanceof Error) message = error.message
    reportError({message})
  }
}



useEffect(() => {
  const buscaTurno = async () => {
    const responseTurno = await fetch(`http://localhost:3001/turnos/`,{
      method:'GET'
    });
    
    const turnos = await responseTurno.json();
    console.log(turnos)
    setTurnos(turnos);
  };
  buscaTurno();
}, [turnoId]);

useEffect(() => {
  const buscaCr = async () => {
    const responseCr = await fetch(`http://localhost:3001/centro-de-resultados`,{
      method:'GET'
    });
    
    const cr = await responseCr.json();
    console.log(cr)
    setCr(cr);
  };
  buscaCr();
}, [crId]);

async function handleChange(event: SelectChangeEvent) {
  setTurnoId(event.target.value);
};

async function handleChangeRole(event: SelectChangeEvent) {
  setRole(event.target.value as string);
};

async function handleChangeCr(event: SelectChangeEvent) {
  setCrId(event.target.value);
};

  return (
    <div>
      <div className="pagina">

      <h2>Cadastro de Usuário</h2>

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
             {`${x.id}`}
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
          required={true}
          onChange={(e) => setNome(e.target.value)}>
        </TextField>
      </div>

      {/*  matricula */}
      <div className="form-floating mb-4">
        <TextField fullWidth
          id="outlined-basic" 
          label="Matrícula do Colaborador"
          value={matricula}
          required={true}
          onChange={(e) => setMatricula(e.target.value)}>
        </TextField>
      </div>

        {/*  email */}
        <div className="form-floating mb-4">
        <TextField fullWidth
          id="outlined-basic" 
          label="E-mail"
          value={email}
          required={true}
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
          required={true}
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

      {/* Centro de Resultado */}
      <div className="form-floating mb-4">
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth variant="outlined" className="select input">
        <InputLabel id="demo-simple-select-outlined-label">
                  Centro de Resultado
        </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={crId}
            onChange={handleChangeCr}
            label="Turno"
            >
            {cr && cr.map((y,nome) => (
            <MenuItem value={y.id}>
             {`${y.nome}`}
            </MenuItem>
             ))}
          </Select>
      </FormControl>
      </Box>
      </div>

      {/* Botão */}
        <div className ="form-btn">
        <ColorButton 
          type="submit"
          variant="contained"
          onClick={salvar}
          >
          Enviar
        </ColorButton>
    </div>
    </div>
    </div>
  );
}


