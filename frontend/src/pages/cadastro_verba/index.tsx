import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import {ColorButton} from '../../components/Button/styles';
import './style.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function Verba(dados){
  const [codigo, setCodigo] = useState("");
  const [fator, setFator] = useState("");
  const [percentual,setPercentual] = useState("");
  const [descricao,setDescricao] = useState("");
  const [horario_inicio,setHorario_inicio] = useState("");
  const [horario_fim,setHorario_fim] = useState("");
  const [dia_semana,setDia_semana] = useState(['']);


  async function handleSubmit(event: { preventDefault: () => void; }){
    event.preventDefault();
    const dado = {
    codigo: codigo,
    fator: fator,
    percentual: percentual,
    descricao: descricao,
    horario_inicio: horario_inicio,
    horario_fim: horario_fim,
    dia_semana:dia_semana,

    };
    const token = localStorage.getItem("user")
      try{
        await fetch('http://localhost:3001/verbas/', {
          method: "POST",
          headers: new Headers({
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         }),
          body: JSON.stringify(dado),
        });

        setCodigo("");
        setFator("");
        setPercentual("");
        setDescricao("");
        setHorario_inicio("");
        setHorario_fim("");
        setDia_semana(['']);

        return;
      } catch (error) {
        let message = 'Erro desconhecido'
        if (error instanceof Error) message = error.message
        reportError({message})
      }
    }
    
    /*
    async function withEvent(func: Function): Promise<React.ChangeEventHandler<any>> {
      return (event: React.ChangeEvent<any>) => {
        const { target } = event;
        func(target.value);
      };
    }
    */
    //wrap function permite inserção de array string[]
    //<TextField label="code" value={code} onChange={withEvent(setCode)} />


    const handleChange = (event: SelectChangeEvent<typeof dia_semana>) => {
      const {
        target: { value },
      } = event;
      setDia_semana(
        typeof value === 'string' ? value.split(',') : value,
      );
    };

      /* Descrição Select
    async function handleChange(event: SelectChangeEvent) {
        setDescricao(event.target.value as string);
      };*/

      const dias = [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado"
      ];

      

    return(
      <div className="pagina">

        <h2>Cadastro de Verbas</h2>

        {/*Select opções pré-definidas de Descrição da verba*/}
        {/*
        <div className="form-floating mb-4">
            <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" >Escolha o tipo de verba</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={descricao}
                    label="Escolha o tipo de verba"
                    onChange={handleChange}
                >
                    <MenuItem value={'hora extra'}>Hora extra</MenuItem>
                    <MenuItem value={'sobreaviso'}>Sobreaviso</MenuItem>
                    <MenuItem value={'hora extra noturna'}>Hora extra noturna</MenuItem>
                    <MenuItem value={'adicional noturno'}>Adicional noturno</MenuItem>
                </Select>
            </FormControl>
            </Box>
        </div>
        */}

         {/* Input Descrição da verba */}
        <div className="form-floating mb-4">
        <TextField fullWidth
          id="outlined-basic" 
          label="Descrição da Verba"
          variant="outlined" 
          value={descricao}
          required={true}
          onChange={e => setDescricao(e.target.value)}>
        </TextField>
        </div>

        {/*  código da verba */}
        <div className="form-floating mb-4">
        <TextField fullWidth
          id="outlined-basic" 
          label="Código da Verba"
          variant="outlined" 
          value={codigo}
          required={true}
          onChange={e => setCodigo(e.target.value)}>
        </TextField>
        </div>

        {/* percentual */}
        <div className="form-floating mb-4">
        <TextField fullWidth
          id="outlined-basic" 
          label="Percentual" 
          variant="outlined"
          value={percentual}
          required={true}
          onChange={e => setPercentual(e.target.value)}>
          </TextField>
        </div>

        {/* fator de multiplicação */}
        <div className="form-floating mb-4">
          <TextField fullWidth
          id="outlined-basic" 
          label="Fator" 
          variant="outlined"
          value={fator}
          onChange={e => setFator(e.target.value)}>
          </TextField>
        </div>
        
          {/* horário inicio */}
          <div className="form-floating mb-4">
          <TextField fullWidth
          id="outlined-basic" 
          label="Horário de Início" 
          variant="outlined"
          value={horario_inicio}
          onChange={e => setHorario_inicio(e.target.value)}>
          </TextField>
        </div>

           {/* horario fim */}
          <div className="form-floating mb-4">
          <TextField fullWidth
          id="outlined-basic" 
          label="Horário Final" 
          variant="outlined"
          value={horario_fim}
          onChange={e => setHorario_fim(e.target.value)}>
          </TextField>
          </div>

        {/* dias da semana */}
        <div className="form-floating mb-4">
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>

        <InputLabel id="demo-multiple-name-label">Dia da Semana</InputLabel>
        <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            multiple
            value={dia_semana}
            onChange={handleChange}
            input={<OutlinedInput label="Dia da Semana"/>}
            MenuProps={MenuProps}
          >
            {dias.map((index,name) => (
              <MenuItem
                key={index}
                value={name}
              >
                {index}
              </MenuItem>
            ))}
          </Select>
        
        </FormControl>
        </Box>
        </div>
        {/*PS:  o array está indo para o banco de dados com uma virgula antes do primeiro valor*/ }

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

  export default Verba;