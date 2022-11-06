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
import InfoUsuario from "../../components/InfoEditUsu/InfoUsuario";
import EditUsuario from "../../components/InfoEditUsu/EditUsuario";
import './style.css'

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
    boxShadow: "0",
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
    top: "7em",
    right: "7em",
    color: "red",
    padding: "1px",
  },
});

function Quadro_Usuario() {
  const classes = useStyles();
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);
  const [dados, setDados] = useState([]);

  useEffect(() => {
    listaUsuario();
  }, []);

  async function listaUsuario() {
    try {
      const response = await fetch(`http://localhost:3001/usuarios`, {
        method: "GET",
      });
      const data = await response.json();
      setListaUsuarios(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  async function handleDelete(id) {
    const data = {
      id: id,
    };
    await fetch(`http://localhost:3001/usuarios/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    listaUsuario();
  }

  function handleClose(event: { preventDefault: () => void }) {
    event.preventDefault();
    setModalEdit(false);
    setModalInfo(false);
  }

  return (
    <div className="pagina" id="quadro-usuarios">
      <h2> Quadro de Usuários</h2>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {/* <StyledTableCell align="left">ID</StyledTableCell>*/}
            <StyledTableCell align="left">Nome </StyledTableCell>
            <StyledTableCell align="left">Matrícula</StyledTableCell>
            <StyledTableCell align="left">Perfil</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="left">E-mail</StyledTableCell>
            {/*<StyledTableCell align="left">Senha</StyledTableCell>*/}
            <StyledTableCell align="left">Turno</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.body}>
          {listaUsuarios.map((x: any) => (
            <StyledTableRow key={x.id}>
              {/*mostra o id na tabela*/}
              {/* <StyledTableCell>{x.id}</StyledTableCell>  */}
              <StyledTableCell component="th" scope="row">
                {x.nome}
              </StyledTableCell>
              <StyledTableCell align="left">{x.matricula}</StyledTableCell>
              <StyledTableCell align="left">{x.role}</StyledTableCell>
              <StyledTableCell align="left">{x.status}</StyledTableCell>
              <StyledTableCell align="left">{x.email}</StyledTableCell>
              <StyledTableCell align="left">{x.turnoId}</StyledTableCell>
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
          <EditUsuario dados={dados} modalEdit={modalEdit} />
        </div>
      )}
      {modalInfo && (
        <div className={classes.modal}>
          <IconButton className={classes.close} onClick={handleClose}>
            <CloseIcon fontSize="large" />
          </IconButton>
          <InfoUsuario dados={dados} />
        </div>
      )}
    </div>
  );
}

export default Quadro_Usuario;