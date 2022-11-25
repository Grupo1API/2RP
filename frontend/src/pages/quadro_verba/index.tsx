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
import EditVerba from "../../components/InfoEditVerba/EditVerba";
import InfoVerba from "../../components/InfoEditVerba/InfoVerba";
import Verba from "../cadastro_verba";

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


function Quadro_verba (){
  const classes = useStyles();
  const [listaVerbas, setListaVerbas] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);
  const [dados, setDados] = useState([]);

  useEffect(() => {
    listaVerba();
  }, []);

  async function listaVerba() {
    try {
      const response = await fetch(`http://localhost:3001/verbas/`, {
        method: "GET",
      });
      const data = await response.json();
      setListaVerbas(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  async function handleDelete(id) {
    const data = {
      id: id,
    };
    await fetch(`http://localhost:3001/verbas/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    listaVerba();
  }

  function handleClose(event: { preventDefault: () => void }) {
    event.preventDefault();
    setModalEdit(false);
    setModalInfo(false);
    setModalAdd(false);
  }

    return(
      <div className="pagina" id="verba">
      <h2> Quadro de Verbas</h2>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Descrição</StyledTableCell>
            <StyledTableCell align="left">Código </StyledTableCell>
            <StyledTableCell align="left">Percentual</StyledTableCell>
            <StyledTableCell align="left">Fator</StyledTableCell>
            <StyledTableCell align="center">
            <ColorButton  onClick={() => {setModalAdd(true);}}><AddCircle/>Novo</ColorButton>  
            </StyledTableCell> 
            {/*
            <IconButton className={classes.novo}
              onClick={() => {
                setModalAdd(true);
              }}
            >
              <AddCircleOutlinedIcon fontSize="large"/>
            </IconButton>*/}
          </TableRow>
        </TableHead>

        <TableBody className={classes.body}>
          {listaVerbas.map((x: any) => (
            <StyledTableRow key={x.id}>
              <StyledTableCell component="th" scope="row">{x.descricao}</StyledTableCell>
              <StyledTableCell align="left">{x.codigo}</StyledTableCell>
              <StyledTableCell align="left">{x.percentual}</StyledTableCell>
              <StyledTableCell align="left">{x.fator}</StyledTableCell>
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
          <EditVerba dados={dados} modalEdit={modalEdit} />
        </div>
      )}
      {modalInfo && (
        <div className={classes.modal}>
          <IconButton className={classes.close} onClick={handleClose}>
            <CloseIcon fontSize="large" />
          </IconButton>
          <InfoVerba dados={dados} />
        </div>
      )}
      {modalAdd && (
        <div className={classes.modal}>
          <IconButton className={classes.close} onClick={handleClose}>
            <CloseIcon fontSize="large" />
          </IconButton>
          <Verba dados={dados} />
        </div>
      )}
    </div>
    );
}

export default Quadro_verba;