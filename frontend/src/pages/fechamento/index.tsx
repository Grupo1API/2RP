import TextField from "@mui/material/TextField";
import React, {useState} from "react";
import {ColorButton} from '../../components/Button/styles';
import './style.css'

function Fechamento(){
  const [data_fecha, setData_fecha] = useState("");
  
  async function handleSubmit(event: { preventDefault: () => void; }){
    event.preventDefault();
    const dado = {
      data_fecha: data_fecha,

    };
      try{
        await fetch('http://localhost:3001/fechamento', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dado),
        });

        setData_fecha("");

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

        <h2>Periodo de Fechamento</h2>

        {/* Inicio */}
        <div className="form-floating mb-4">
          <TextField fullWidth
          type="date"
          InputLabelProps={{
            shrink: true
          }}
          id="outlined-basic" 
          label="Dia do Fechamento" 
          variant="outlined"
          value={data_fecha}
          required={true}
          onChange={(e) => setData_fecha(e.target.value)}>
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

  export default Fechamento;