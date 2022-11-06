import TextField from "@mui/material/TextField";
import React, {useState} from "react";
import {ColorButton} from '../../components/Button/styles';
import  Modal  from "react-bootstrap/esm/Modal";
import Button from "react-bootstrap/esm/Button";
import './style.css'
import { ModalTitle } from "react-bootstrap";

function Adicional(){
  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");
  
  async function handleSubmit(event: { preventDefault: () => void; }){
    event.preventDefault();
    const dado = {
      inicio: inicio,
      fim: fim,

    };
      try{
        await fetch('http://localhost:3001/adicional', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dado),
        });

        setInicio("");
        setFim("");

        return;
      } catch (error) {
        let message = 'Erro desconhecido'
        if (error instanceof Error) message = error.message
        reportError({message})
      }
    }
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

        <h2>Adicional Noturno</h2>

        {/* Inicio */}
        <div className="form-floating mb-4">
          <TextField fullWidth
          type="time"
          InputLabelProps={{
            shrink: true
          }}
          id="outlined-basic" 
          label="Inicio Horario Noturno" 
          variant="outlined"
          value={inicio}
          required={true}
          onChange={(e) => setInicio(e.target.value)}>
          </TextField>
        </div>

        {/* Fim */}
        <div className="form-floating mb-4">
          <TextField fullWidth
          type="time"
          InputLabelProps={{
            shrink: true
          }}
          id="outlined-basic" 
          label="Fim Horario Noturno" 
          variant="outlined"
          value={fim}
          required={true}
          onChange={(e) => setFim(e.target.value)}>
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

  export default Adicional;