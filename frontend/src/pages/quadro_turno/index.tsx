import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import InfoIcon from "@material-ui/icons/Info";
import { AddCircle } from "@mui/icons-material";
import {ColorButton} from '../../components/Button/styles';
import "./style.css";
import EditTurno from "../../components/InfoEditTurno/EditTurno";
import InfoTurno from "../../components/InfoEditTurno/InfoTurno";
import Turno from "../cadastro_turno";

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



function Quadro_turno(){
  const classes = useStyles();
  const [listaTurnos, setListaTurnos] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);
  const [dados, setDados] = useState([]);

  useEffect(() => {
    listaTurno();
  }, []);

  async function listaTurno() {
    const token = localStorage.getItem("user")
    try {
      const response = await fetch(`http://localhost:3001/turnos/`, {
        headers: new Headers({
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
       }),
      }
    );
      const data = await response.json();
      setListaTurnos(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  async function handleDelete(id) {
    const token = localStorage.getItem("user")
    const data = {
      id: id,
    };
    await fetch(`http://localhost:3001/turnos/${id}`, {
      method: "DELETE",
      headers: new Headers({
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
     }),
        body: JSON.stringify(data),
      },

    );
    listaTurno();
  }

  function handleClose(event: { preventDefault: () => void }) {
    event.preventDefault();
    setModalEdit(false);
    setModalInfo(false);
    setModalAdd(false);
  }

    return(
<div className="pagina">
      <h2> Quadro de Turnos</h2>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {/* <StyledTableCell align="left">ID</StyledTableCell>*/}
            <StyledTableCell align="left">Entrada 1 </StyledTableCell>
            <StyledTableCell align="left">Saída 1</StyledTableCell>
            <StyledTableCell align="left">Entrada 2</StyledTableCell>
            <StyledTableCell align="left">Saída 2</StyledTableCell>
            <StyledTableCell align="center">
            <ColorButton  onClick={() => {setModalAdd(true);}}><AddCircle/>Novo</ColorButton>  
            </StyledTableCell> 
          </TableRow>
        </TableHead>

        <TableBody className={classes.body}>
          {listaTurnos.map((x: any) => (
            <StyledTableRow key={x.id}>
              {/*mostra o id na tabela*/}
              {/* <StyledTableCell>{x.id}</StyledTableCell>  */}
              <StyledTableCell component="th" scope="row">{x.entrada_1}</StyledTableCell>
              <StyledTableCell align="left">{x.saida_1}</StyledTableCell>
              <StyledTableCell align="left">{x.entrada_2}</StyledTableCell>
              <StyledTableCell align="left">{x.saida_2}</StyledTableCell>
              <StyledTableCell align="left" className={classes.button}>
                <IconButton
                  color="primary"
                  onClick={() => {
                    setModalInfo(true);
                    setDados(x);
                  }}
                >
                  <InfoIcon />
                </IconButton>

                <IconButton
                  color="primary"
                  onClick={() => {
                    setModalEdit(true);
                    setDados(x);
                  }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton color="primary" onClick={() => handleDelete(x.id)}>
                  <DeleteIcon />
                </IconButton>

              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        </Table>

        {modalEdit && (
        <div className={classes.modal}>
          <IconButton className={classes.close} onClick={handleClose}>
            <CloseIcon fontSize="large" />
          </IconButton>
          <EditTurno dados={dados} modalEdit={modalEdit} />
        </div>
      )}
      {modalInfo && (
        <div className={classes.modal}>
          <IconButton className={classes.close} onClick={handleClose}>
            <CloseIcon fontSize="large" />
          </IconButton>
          <InfoTurno dados={dados} />
        </div>
      )}
      {modalAdd && (
        <div className={classes.modal}>
          <IconButton className={classes.close} onClick={handleClose}>
            <CloseIcon fontSize="large" />
          </IconButton>
          <Turno dados={dados} />
        </div>
      )}
    </div>
    
    );
}
export default Quadro_turno;