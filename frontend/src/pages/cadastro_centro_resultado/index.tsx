import TextField from "@mui/material/TextField";
import React, {useState} from "react";
import {ColorButton} from '../../components/Button/styles';
import './style.css'

function CentroResultado (dados) {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [colaboradorId,setColaboradorId] = useState("");
  const [gestorId,setGestorId] = useState("");
  const [projetoId,setProjetoId] = useState("");

//   // Lista Gestores
// const[gestores, setGestores] = useState([]);


// async function listaGestor() {
//  try {
//    const response = await fetch(`http://localhost:3001/usuarios`, {
//      method: "GET",
//    });
//    const data = await response.json();
//    setGestores(data);
//  } catch (error) {
//    console.log(error.message);
//  }
// } 

// useEffect(() => {
//  listaGestor();
// }, []); console.log(gestores)



// const [gestor, setGestor] = React.useState<string>('');
// const [open, setOpen] = React.useState(false);

// const handleChanges = (event: SelectChangeEvent<typeof gestor>) => {
//   setGestor(event.target.value);
// };

// const handleClose = () => {
//   setOpen(false);
// };

// const handleOpen = () => {
//   setOpen(true);
// };

  async function handleSubmit(event: { preventDefault: () => void; }){
    event.preventDefault();
    const dado = {
      nome: nome,
      numero: numero,
      colaboradorId: colaboradorId,
      gestorId: gestorId,
      projetoId:projetoId,
    };

    try{
      await fetch('http://localhost:3001/centro-de-resultado/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dado),
      });

      setNome("");
      setNumero("");
      setColaboradorId("");
      setGestorId("");
      setProjetoId("");

      return;
    } catch (error) {
      let message = 'Erro desconhecido'
      if (error instanceof Error) message = error.message
      reportError({message})
    }
  }

  return (
    <div className="pagina">

      <h2> Cadastro de Centro de Resultado </h2>

      {/*  nome */}
        <div className="form-floating mb-4">
        <TextField fullWidth
          id="outlined-basic" 
          label="Nome do CR"
          value={nome}
          required={true}
          onChange={(e) => setNome(e.target.value)}
          >
        </TextField>
        </div>

      {/* numero */}
      <div className="form-floating mb-4">
      <TextField fullWidth
          type="number"
          id="outlined-basic" 
          label="Número do CR"
          variant="outlined"
          value={numero}
          required={true}
          onChange={(e) => setNumero(e.target.value)}>
        </TextField>
      </div>

      {/* <div className="form-floating mb-4">
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
      </div> */}

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
};

export default CentroResultado;
