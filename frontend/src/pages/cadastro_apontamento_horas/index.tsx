import React, { useEffect, useState, ChangeEvent } from 'react';
import './style.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {ColorButton} from '../../components/Button/styles';
import Button from '@mui/material/Button';

function ApontamentoHoras () { 

  const [horario_inicio, setHorarioInicio] = useState("");
  const [horario_fim, setHorarioFim] = useState("");
  const [justificativa, setJustificativa] = useState("");
  const [tipoApontamento,setTipoApontamento] = useState('');


  // Lista Gestores
const[gestores, setGestores] = useState([]);


async function listaGestor() {
  const token = localStorage.getItem("user")
 try {
   const response = await fetch(`http://localhost:3001/usuarios`, {
     method: "GET",
     headers: new Headers({
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
   }),
   });
   const data = await response.json();
   setGestores(data);
 } catch (error) {
   console.log(error.message);
 }
} 

useEffect(() => {
 listaGestor();
}, []); console.log(gestores)



const [gestor, setGestor] = React.useState<string>('');
const [open, setOpen] = React.useState(false);

const handleChanges = (event: SelectChangeEvent<typeof gestor>) => {
  setGestor(event.target.value);
};

const handleClose = () => {
  setOpen(false);
};

const handleOpen = () => {
  setOpen(true);
};

// Lista Cliente/Projeto
const[clientes, setClientes] = useState([]);


async function listaCliente() {
  const token = localStorage.getItem("user")
 try {
   const response = await fetch(`http://localhost:3001/clientes`, {
     method: "GET",
     headers: new Headers({
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
   }),
   });
   const data = await response.json();
   setClientes(data);
 } catch (error) {
   console.log(error.message);
 }
} 

useEffect(() => {
 listaCliente();
}, []); console.log(clientes)



const [cliente, setCliente] = React.useState<string>('');

const [open1, setOpen1] = React.useState(false);
const handleChanges1 = (event: SelectChangeEvent<typeof cliente>) => {
  setCliente(event.target.value);
};





const handleClose1 = () => {
  setOpen1(false);
};

const handleOpen1 = () => {
  setOpen1(true);
};

//------------------------------------

  async function handleSubmit(event){

    event.preventDefault();
    const dado = {
        horario_inicio: horario_inicio, 
        horario_fim: horario_fim,
        justificativa: justificativa, 
        tipo_apontamento: tipoApontamento,
        gestorId: parseFloat(gestor),
        projetoId: parseInt(cliente)
    };
    const token = localStorage.getItem("user")
    try{
      const response = await fetch('http://localhost:3001/apontamento-horas', {
        method: 'POST',
        headers: new Headers({
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
       }),
        body: JSON.stringify(dado)
        });
      
        console.log(response.json);
        // definir rota
        window.location.href='/apontamento-horas'
            
      setHorarioInicio("")
      setHorarioFim("") 
      setJustificativa("")
      setTipoApontamento("");

      return;
      } catch (error) {
        console.log("nao foi")
        console.error(error.message)
      }
    };

    async function handleChange(event: SelectChangeEvent) {
      setTipoApontamento(event.target.value as string);
    };

   
  return (
    <div className="pagina">

      <h2> Apontamento de Horas</h2>
      
      {/*tipo de apontamento*/}
      <div className="form-floating mb-4">
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" >Escolha o tipo de apontamento</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tipoApontamento}
                label="Escolha o tipo de apontamento"
                onChange={handleChange}
              >
                  <MenuItem value={'hora extra'}>Hora Extra</MenuItem>
                  <MenuItem value={'sobreaviso'}>Sobreaviso</MenuItem>
              </Select>
          </FormControl>
        </Box>
      </div>
  
      {/* Entrada 1 */}
      <div className="row g-2">
        <div className="col-md">
        <div className="form-floating mb-4">
          <TextField 
            type="datetime-local" 
            id="outlined-basic" 
            label="Entrada 1" 
            variant="outlined"  
            InputLabelProps={{ shrink: true }}
            value={horario_inicio}
            onChange={e => setHorarioInicio(e.target.value)}
          >
          </TextField>
        </div>
      </div>

      {/* Saída 1 */} 
        <div className="col-md">
          <div className="form-floating mb-4">
            <TextField
              type="datetime-local" 
              id="outlined-basic" 
              label="Saída 1" 
              variant="outlined"  
              InputLabelProps={{ shrink: true }}
              value={horario_fim}
              onChange={e => setHorarioFim(e.target.value)}
            >
            </TextField>
          </div>
        </div>
      </div>

      {/* Justificativa */}
        <div className="form-floating mb-4">
            <TextField
              fullWidth
              multiline
              label="Justificativa"
              value={justificativa}
              onChange={e => setJustificativa(e.target.value)}
            />
        </div>

      <div className="form-floating mb-4">
        <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
          Open the select
        </Button>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-controlled-open-select-label">Gestor</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            label="Gestor"
            onChange={handleChanges}
            value={gestor}

          >
           {gestores.map((y: any) => (
           <MenuItem value={y.id} key={y.id}>{y.nome}</MenuItem>
           ))}
          </Select>
        </FormControl>
      </div>

      <div className="form-floating mb-4">
        <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen1}>
          Open the select
        </Button>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-controlled-open-select-label">Cliente</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open1}
            onClose={handleClose1}
            onOpen={handleOpen1}
            label="Cliente"
            onChange={handleChanges1}
            value={cliente}

          >
           {clientes.map((z: any) => (
           <MenuItem value={z.id} key={z.id}>{z.nome}</MenuItem>
           ))}
          </Select>
        </FormControl>
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
    )
}

export default ApontamentoHoras;