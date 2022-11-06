import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {ColorButton} from '../../components/Button/styles';
import Box from "@mui/material/Box";
import './style.css'


function Verba(){
  const [codigo, setCodigo] = useState("");
  const [descricao,setDescricao] = useState("");
  const [fator, setFator] = useState("");
  const [percentual,setPercentual] = useState("");

  async function handleSubmit(event: { preventDefault: () => void; }){
    event.preventDefault();
    const dado = {
    codigo: codigo,
    descricao:descricao,
    fator: fator,
    percentual: percentual,

    };
      try{
        await fetch('http://localhost:3001/verbas', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dado),
        });

        setCodigo("");
        setDescricao("");
        setFator("");
        setPercentual("");

        return;
      } catch (error) {
        let message = 'Erro desconhecido'
        if (error instanceof Error) message = error.message
        reportError({message})
      }
    }

    async function handleChange(event: SelectChangeEvent) {
        setDescricao(event.target.value as string);
      };

      const [show,setShow]=useState(false)
  const [show2,setShow2]=useState(true)
  const handleClose=()=>{
    setShow(false)
    setShow2(true)}
  const handleShow=()=>{
    setShow(true)
    setShow2(false)}

    return(
      <div className="pagina">

        <h2>Cadastro de Verbas</h2>

        {/*Descrição da verba*/}
        <div className="form-floating mb-4">
        <TextField fullWidth
          id="outlined-basic" 
          label="Descriçao da Verba"
          value={descricao}
          required={true}
          onChange={(e) => setDescricao(e.target.value)}>
        </TextField>
        </div>

        {/*  código da verba */}
        <div className="form-floating mb-4">
        <TextField fullWidth
          id="outlined-basic" 
          label="Código da Verba"
          value={codigo}
          required={true}
          onChange={(e) => setCodigo(e.target.value)}>
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
          onChange={(e) => setPercentual(e.target.value)}>
          </TextField>
        </div>

        {/* fator de multiplicação */}
        <div className="form-floating mb-4">
          <TextField fullWidth
          id="outlined-basic" 
          label="Fator" 
          variant="outlined"
          value={fator}
          onChange={(e) => setFator(e.target.value)}>
          </TextField>
        </div>

        {/* Botão */}
        <div className ="form-btn">
          <ColorButton 
            variant="contained"
            onClick={handleShow}
            hidden={show}
          >
            Editar
          </ColorButton>
        </div>
        <div className="botao" hidden={show2}>
          <a className="btn btn-danger" onClick={handleClose}>Cancelar</a>
          <a className="btn btn-success">Salvar</a>
        </div>
      </div>
    );
  }

  export default Verba;