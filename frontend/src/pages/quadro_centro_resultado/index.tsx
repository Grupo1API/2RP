import React, { useState, useEffect } from "react";
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
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircle";
import CentroResultado from "../cadastro_centro_resultado";
import InfoCentroResultado from "../../components/InfoEditCentroResultado/InfoCentroResultado";
import EditCentroResultado from "../../components/InfoEditCentroResultado/EditCentroResultado";
import "./style.css";

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
    top: "3em",
    right: "7em",
    color: "red",
    padding: "5px",
  },
  novo: {
    position:"absolute",
    marginLeft:"-90px",
    color: "#03FD90",
  },
});

function Quadro_resultado() {
  const classes = useStyles();
  const [listaCentroResultados, setlistaCentroResultados] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);
  const [dados, setDados] = useState([]);

  useEffect(() => {
    listaCentroResultado();
  }, []);

  async function listaCentroResultado() {
    try {
      const response = await fetch(
        `http://localhost:3001/centro-de-resultados/`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setlistaCentroResultados(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  async function handleDelete(id) {
    const data = {
      id: id,
    };
    await fetch(`http://localhost:3001/centro-de-resultados/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    listaCentroResultado();
  }

  function handleClose(event: { preventDefault: () => void }) {
    event.preventDefault();
    setModalEdit(false);
    setModalInfo(false);
    setModalAdd(false);
  }

  return (
    <div className="pagina">
      <h2> Quadro de Centro de Resultados </h2>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {/* <StyledTableCell align="left">ID</StyledTableCell>*/}
            <StyledTableCell align="left">Nome </StyledTableCell>
            <StyledTableCell align="left">Numero</StyledTableCell>  
            <StyledTableCell align="left">Status</StyledTableCell>          
            <StyledTableCell></StyledTableCell>
            
            <IconButton className={classes.novo}
              onClick={() => {
                setModalAdd(true);
              }}
            >
              <AddCircleOutlinedIcon fontSize="large"/>
            </IconButton>
          </TableRow>
        </TableHead>

        <TableBody className={classes.body}>
          {listaCentroResultados.map((x: any) => (
            <StyledTableRow key={x.id}>
              {/*mostra o id na tabela*/}
              {/* <StyledTableCell>{x.id}</StyledTableCell>  */}
              <StyledTableCell component="th" scope="row">{x.nome}</StyledTableCell>
              <StyledTableCell align="left">{x.numero}</StyledTableCell>
              <StyledTableCell align="left">{x.status}</StyledTableCell>

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
          <EditCentroResultado dados={dados} modalEdit={modalEdit} />
        </div>
      )}
      {modalInfo && (
        <div className={classes.modal}>
          <IconButton className={classes.close} onClick={handleClose}>
            <CloseIcon fontSize="large" />
          </IconButton>
          <InfoCentroResultado dados={dados} />
        </div>
      )}
      {modalAdd && (
        <div className={classes.modal}>
          <IconButton className={classes.close} onClick={handleClose}>
            <CloseIcon fontSize="large" />
          </IconButton>
          <CentroResultado dados={dados} />
        </div>
      )}
    </div>
  );
}

export default Quadro_resultado;