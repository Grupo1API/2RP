import React, {useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@mui/material/TableRow";
import './style.css'
import converterData from '../../functions/converterData'
import diferencaEntreHorarios from '../../functions/diferencaEntreHorarios'
import verificaDia from "../../functions/verificaDia";



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    alignItems: "center",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  body: {
    backgroundColor: "#fff",
  },
  button: {
    display: "flex",
  },

  modal: {
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    backgroundColor: "rgba(0, 0, 0,0.5)",
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  close: {
    position: "absolute",
    top: "6em",
    right: "13em",
    color: "red",
    padding: "5px",
  },
  aprovar: {
    color: '#198754',
    '&:hover': {
      color: '#156e44',
    },
  },
  reprovar: {
    color: '#871919',
    '&:hover': {
      color: '#6e1515',
    },
  },
});

{/* Funções */}

function Classificacao () {
  const classes = useStyles();
  const [listaAprovs, setListaAprovs] = useState([]);
  const [listaVerbas, setListaVerbas] = useState([]);
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [listaCentroResultados, setlistaCentroResultados] = useState([]);
  const [listaClientes, setListaClientes] = useState([]);


  useEffect(() => {
    listaCliente();
  }, []);

  async function listaCliente() {
    const token = localStorage.getItem("user")
    try {
      const response = await fetch(`http://localhost:3001/clientes/`, {
        method: "GET",
        headers: new Headers({
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
       })
      });
      const data = await response.json();
      setListaClientes(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    listaCentroResultado();
  }, []);

  async function listaCentroResultado() {
    const token = localStorage.getItem("user")
    try {
      const response = await fetch(
        `http://localhost:3001/centro-de-resultados/`,
        {
          method: "GET",
          headers: new Headers({
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
   })
        }
      );
      const data = await response.json();

      setlistaCentroResultados(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }

 useEffect(() => {
    listaAprov();
  }, []);

  async function listaAprov() {
    const token = localStorage.getItem("user")
    try {
      const response = await fetch(`http://localhost:3001/apontamento-horas/`, {
        method: "GET",
        headers: new Headers({
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
       })
      });
      const data = await response.json();
      setListaAprovs(data);

    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    listaVerba();
  }, []);

  async function listaVerba() {
    const token = localStorage.getItem("user")
    try {
      const response = await fetch(`http://localhost:3001/verbas/`, {
        method: "GET",
        headers: new Headers({
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
       })
      });
      const data = await response.json();
      setListaVerbas(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    listaUsuario();
  }, []);

  async function listaUsuario() {
    const token = localStorage.getItem("user")
    try {
      const response = await fetch(`http://localhost:3001/usuarios`, {
        method: "GET",
        headers: new Headers({
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
       })
      });
      const data = await response.json();
      setListaUsuarios(data);
    } catch (error) {
      console.log(error.message);
    }
  }


  return (
    <div className="pagina" id="classificacao">
      <h2>Horas Classificadas</h2>

      <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">CR</StyledTableCell>
                <StyledTableCell align="left">Cliente</StyledTableCell>
                <StyledTableCell align="left">Projeto</StyledTableCell>
                <StyledTableCell align="left">Colaborador</StyledTableCell>
                <StyledTableCell align="left">Modalidade</StyledTableCell>
                <StyledTableCell align="left">Horário Início</StyledTableCell>
                <StyledTableCell align="left">Horário FIm</StyledTableCell>
                <StyledTableCell align="left">Justificativa</StyledTableCell>
                <StyledTableCell align="left">Verba</StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
                <StyledTableCell align="center">Total de Horas</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody className={classes.body}>

              {listaAprovs.map((ap: any) => (
                <StyledTableRow key={ap.id}>

                  {/*CR*/}
                  <StyledTableCell align="left">
                    {listaCentroResultados.map((cr: any) => listaUsuarios.map((u: any) => (
                      <div key={u.id}>
                        {cr.id === u.crId && u.id === ap.usuarioId ? <p>{cr.nome}</p> : <div></div>}
                      </div>
                    ))
                    )}
                  </StyledTableCell>


                  {/*Cliente*/}
                  <StyledTableCell align="left">
                    {listaClientes.map((cli: any) => listaCentroResultados.map((cr: any) => listaUsuarios.map((u: any) => (
                      <div key={u.id}>
                        {cr.id === u.crId && u.id === ap.usuarioId && cli.id === cr.clienteId ? <p>{cli.nome}</p> : <div></div>}
                      </div>))
                    ))}
                  </StyledTableCell>


                  {/*Projeto*/}
                  <StyledTableCell align="left">
                    {listaClientes.map((cli: any) => listaCentroResultados.map((cr: any) => listaUsuarios.map((u: any) => (
                      <div key={u.id}>
                        {cr.id === u.crId && u.id === ap.usuarioId && cli.id === cr.clienteId ? <p>{cli.nome_projeto}</p> : <div></div>}
                      </div>))
                    ))}
                  </StyledTableCell>

                  {/*Colaborador*/}
                  <StyledTableCell align="left">{listaUsuarios.map((u: any) => (
                    <div key={u.id}>
                      {ap.usuarioId === u.id ? <p>{u.nome}</p> : <div></div>}
                    </div>
                  ))}</StyledTableCell>

                  <StyledTableCell component="th" scope="row">{ap.tipo_apontamento}</StyledTableCell>

                  <StyledTableCell align="left">{converterData(ap.horario_inicio)}</StyledTableCell>

                  <StyledTableCell align="left">{converterData(ap.horario_fim)}</StyledTableCell>

                  <StyledTableCell align="left">{ap.justificativa}</StyledTableCell>

                  {/*Verba*/}
                  <StyledTableCell align="left">

                    {listaVerbas.map((verba: any) => (
                      <div key={verba.id}>
                        {verificaDia(verba.dia_semana, ap.horario_inicio) === true ?
                          <p>{verba.codigo}</p> : <div></div>}
                      </div>
                    ))}

                  </StyledTableCell>

                  <StyledTableCell align="left">{ap.statusApontamento}</StyledTableCell>
                  <StyledTableCell align="left" text-align="center" id="horas">
                    {diferencaEntreHorarios(ap.horario_inicio, ap.horario_fim)}
                   
                  </StyledTableCell>

                </StyledTableRow>
              ))}
            </TableBody>
          </Table>

            
        </div>
      
  )
}


export default Classificacao;

