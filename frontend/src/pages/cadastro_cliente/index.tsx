import { MenuItem, Select , FormControl , InputLabel} from "@mui/material";
import TextField from "@mui/material/TextField";
import React, {useState} from "react";
import {ColorButton} from '../../components/Button/styles';
import './style.css'

function Cliente(dados){
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [contato,setContato] = useState("");
  const [nome_projeto,setNomeProjeto] = useState("");
  const [numero_projeto,setNumeroProjeto] = useState("");
  // useEffect(() => {
  //   listaGestor();
  // }, []);


   async function listaGestor() {
    try {
      const response = await fetch(`http://localhost:3001/ex:gestores/`, {
        method: "GET",
      });
      const data = await response.json();
      setListaClientes(data);
    } catch (error) {
      console.log(error.message);
    }
  } 
  async function handleSubmit(event: { preventDefault: () => void; }){
    event.preventDefault();
    const dado = {
      nome: nome,
      cnpj: cnpj,
      contato: contato,
      nome_projeto: nome_projeto,
      numero_projeto: numero_projeto

    };
      try{
        await fetch('http://localhost:3001/cliente/', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dado),
        });

        // definir rota
        window.location.href='/quadro-clientes'

        setNome("");
        setCnpj("");
        setContato("");
        setNomeProjeto("");
        setNumeroProjeto("");

        return;
      } catch (error) {
        let message = 'Erro desconhecido'
        if (error instanceof Error) message = error.message
        reportError({message})
      }
    }
    const gestor:string[] =["gabriel","jose", "silvio"]
    const [listaGestores, setListaGestores] = useState([]);
    return(
      <div className="pagina">

        <h2>Cadastro de Clientes</h2>

        {/*  nome */}
        <div className="form-floating mb-4">
        <TextField fullWidth
          id="outlined-basic" 
          label="Razão Social"
          value={nome}
          required={true}
          onChange={(e) => setNome(e.target.value)}>
        </TextField>
        </div>

        {/* cnpj */}
        <div className="form-floating mb-4">
          <TextField fullWidth
          type="number"
          id="outlined-basic" 
          label="CNPJ" 
          variant="outlined"
          placeholder="XX.XXX.XXX/XXXX-XX"
          value={cnpj}
          required={true}
          onChange={(e) => setCnpj(e.target.value)}>
          </TextField>
        </div>

        {/* contato */}
        <div className="form-floating mb-4">
        <TextField fullWidth
          id="outlined-basic" 
          label="Contato" 
          variant="outlined"
          value={contato}
          onChange={(e) => setContato(e.target.value)}>
          </TextField>
        </div>

        {/* nome do projeto */}
        <div className="form-floating mb-4">
        <TextField fullWidth
          id="outlined-basic" 
          label="Nome do Projeto" 
          variant="outlined"
          value={nome_projeto}
          onChange={(e) => setNomeProjeto(e.target.value)}>
          </TextField>
        </div>

        {/* número do projeto */}
        <div className="form-floating mb-4">
        <TextField fullWidth
          id="outlined-basic" 
          label="Número do Projeto" 
          variant="outlined"
          value={numero_projeto}
          onChange={(e) => setNumeroProjeto(e.target.value)}>
          </TextField>
        </div>

        <div>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
            {gestor.map(x => <MenuItem  key={x} value={x}>{x}</MenuItem>) }
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
    );
  }

  export default Cliente;

  // Trocar para gestor




  