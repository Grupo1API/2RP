import React, { useState } from "react";
import {Button, TextField } from '@mui/material';
import useStyles from "./style";

function Cliente(){
  const classes = useStyles();
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");


  async function handleSubmit(event: { preventDefault: () => void; }){
    event.preventDefault();
    const dado = {
      nome: nome,
      cnpj: cnpj,

    };
      try{
        await fetch('http://localhost:3001/cliente', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dado),
        });

        setNome("");
        setCnpj("");

        return;
      } catch (error) {
        let message = 'Erro desconhecido'
        if (error instanceof Error) message = error.message
        reportError({message})
      }
    }

    return(
      <div className="cadastro_cliente">
        <div className="containerCliente">
          <h1  className="titulo">Cadastro de Clientes</h1>
            <form name="cadastroCliente" className={classes.root} onSubmit={handleSubmit}>
            <div className={classes.campo}>
              <TextField
              label= "Razão Social"
              id="nome"
              type="text"
              required={true}
              placeholder="Digite a Razão Social"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="input"
              />
              </div>
              <div className={classes.campo}>
              <TextField
                label ="CNPJ"
              id="cnpj"
              type="text" 
              required={true}
              placeholder="XX.XXX.XXX/XXXX-XX"
              value={cnpj}
              onChange={(e)=> setCnpj(e.target.value)}
              className="input"
              />
              </div>
              <div className="bt-container">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                >
                ENVIAR
               </Button>
              </div>
            </form>

          </div>
        </div>
    );
  }

  export default Cliente;