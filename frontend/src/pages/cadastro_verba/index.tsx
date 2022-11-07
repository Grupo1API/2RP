import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import {ColorButton} from '../../components/Button/styles';
import './style.css'
//import InputLabel from '@mui/material/InputLabel';
//import MenuItem from '@mui/material/MenuItem';
//import FormControl from '@mui/material/FormControl';
//import Select, { SelectChangeEvent } from '@mui/material/Select';
//import Box from "@mui/material/Box";

function Verba(dados){
  const [codigo, setCodigo] = useState("");
  const [fator, setFator] = useState("");
  const [percentual,setPercentual] = useState("");

  async function handleSubmit(event: { preventDefault: () => void; }){
    event.preventDefault();
    const dado = {
    codigo: codigo,
    fator: fator,
    percentual: percentual,

    };
      try{
        await fetch('http://localhost:3001/verbas/', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dado),
        });

        setCodigo("");
        setFator("");
        setPercentual("");

        return;
      } catch (error) {
        let message = 'Erro desconhecido'
        if (error instanceof Error) message = error.message
        reportError({message})
      }
    }

      /*
    async function handleChange(event: SelectChangeEvent) {
        setDescricao(event.target.value as string);
      };*/

    return(
      <div className="pagina">

        <h2>Cadastro de Verbas</h2>

        {/*Descrição da verba*/}
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

        {/* Botão */}
        <div className ="form-btn">
          <ColorButton 
            variant="contained"
            onClick={handleSubmit}
           //onClick={handleShow}
           // hidden={show}
          >
            Enviar
          </ColorButton>
        </div>
      </div>
    );
  }

  export default Verba;