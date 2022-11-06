import React from "react";
import { Table } from "react-bootstrap";
import "./style.css";


export const Parametros=()=>{

    return(
        <div className="area">
            <h2>Parametros</h2>
            <Table className="tabela" borderless>
      <thead>
        <tr>
          <th>Descriçao</th>
          <th>Açoes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Verba Salarial</td>
          <td><a className="btn btn-primary">Visualizar</a></td>
        </tr>
        <tr>
          <td>Turno</td>
          <td><a className="btn btn-primary">Visualizar</a></td>
        </tr>
        <tr>
          <td>Adicional Noturno</td>
          <td><a className="btn btn-primary">Visualizar</a></td>
        </tr>
        <tr>
          <td>Periodo de Fechamento</td>
          <td><a className="btn btn-primary">Visualizar</a></td>
        </tr>
      </tbody>
    </Table>
        </div>
    )

}
export default Parametros;