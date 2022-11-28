import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@mui/material/TableRow";
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './style.css'
import converterData from '../../functions/converterData'
import obterDiaSemana from '../../functions/obterDiaSemana'
import diferencaEntreHorarios from '../../functions/diferencaEntreHorarios'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 16,
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

function classific_horas () {
  const classes = useStyles();
  const [listaAprovs, setListaAprovs] = useState([]);

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
  async function handleAprove(id) {
    const token = localStorage.getItem("user")
    const data = {
      id: id,
    };
    await fetch(`http://localhost:3001/apontamento-horas/aprovar/${id}`, {
      method: "DELETE",
      headers: new Headers({
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
     }),
        body: JSON.stringify(data),
      },

    );
    listaAprov();
  }

  async function handleReprove(id) {
    const token = localStorage.getItem("user")
    const data = {
      id: id,
    };
    await fetch(`http://localhost:3001/apontamento-horas/reprovar/${id}`, {
      method: "DELETE",
      headers: new Headers({
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
     }),
        body: JSON.stringify(data),
      });
    listaAprov();
  }
  

  return (
      <div className="pagina" id ="aprovacao">
      <h2> Classificação de Horas Apontadas</h2>


      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Tipo </StyledTableCell>
            <StyledTableCell align="left">Horário Início</StyledTableCell>
            <StyledTableCell align="left">Horário FIm</StyledTableCell>
            <StyledTableCell align="left">Justificativa</StyledTableCell>
            <StyledTableCell align="left">Verba</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="center">Total de Horas</StyledTableCell>
            <StyledTableCell align="center">Teste de Dia</StyledTableCell>
            <StyledTableCell align="center">Ação</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody className={classes.body}>
          {listaAprovs.map((x: any) => (
            <StyledTableRow key={x.id}>
              <StyledTableCell component="th" scope="row">{x.tipo_apontamento}</StyledTableCell>
              <StyledTableCell align="left">{converterData(x.horario_inicio)}</StyledTableCell>
              <StyledTableCell align="left">{converterData(x.horario_fim)}</StyledTableCell>
              <StyledTableCell align="left">{x.justificativa}</StyledTableCell>
              <StyledTableCell align="left">{x.verba}</StyledTableCell>
              <StyledTableCell align="left">{x.statusApontamento}</StyledTableCell>


              <StyledTableCell align="left">{diferencaEntreHorarios(x.horario_inicio,x.horario_fim)}</StyledTableCell>
              <StyledTableCell align="left">{obterDiaSemana(x.horario_fim)}</StyledTableCell>


              <StyledTableCell align="left" className={classes.button}>
              <IconButton className={classes.aprovar} onClick={() => handleAprove(x.id)}>
                  <CheckCircleIcon />
              </IconButton>
              <IconButton className={classes.reprovar} onClick={() => handleReprove(x.id)}>
                  <CancelIcon />
              </IconButton>

              </StyledTableCell>
            </StyledTableRow>
          ))}
          </TableBody>
      </Table>

      </div>

  );
}

export default classific_horas;