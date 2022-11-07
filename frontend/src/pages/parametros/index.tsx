import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import "./style.css";
import { VisualizarButton } from "../../components/Button/styles";

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
    minWidth: 300,
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
    top: "10em",
    right: "12em",
    color: "red",
    padding: "5px",
  },
  novo: {
    position:"absolute",
    marginLeft:"-90px",
    color: "#03FD90",
  },
});

export const Parametros=()=>{
  const classes = useStyles();

    return(
<div className="pagina" id="parametro">
      <h2> Parâmetros</h2>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Descrição </StyledTableCell>
            <StyledTableCell align="center">Ação</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody className={classes.body}>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">Verbas Salariais</StyledTableCell>
              <StyledTableCell align="center" className={classes.button}>
                <VisualizarButton  onClick={() => {window.location.href='/quadro-verba'}}><InfoIcon/>Visualizar</VisualizarButton>  
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow >
              <StyledTableCell align="left">Turnos</StyledTableCell>
              <StyledTableCell align="center" className={classes.button}>
                <VisualizarButton  onClick={() => {window.location.href='/quadro-turno'}}><InfoIcon/>Visualizar</VisualizarButton>  
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow >
              <StyledTableCell align="left">Adicional Noturno</StyledTableCell>
              <StyledTableCell align="center" className={classes.button}>
                <VisualizarButton  onClick={() => {window.location.href='/#'}}><InfoIcon/>Visualizar</VisualizarButton>  
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow >
              <StyledTableCell align="left">Período de Fechamento</StyledTableCell>
              <StyledTableCell align="center"  className={classes.button}>
                <VisualizarButton  onClick={() => {window.location.href='/#'}}><InfoIcon/>Visualizar</VisualizarButton>  
              </StyledTableCell>
            </StyledTableRow>

        </TableBody>
      </Table>
    </div>

    )

}
export default Parametros;