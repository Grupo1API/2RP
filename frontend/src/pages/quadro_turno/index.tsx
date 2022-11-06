import React from "react";
import { Table } from "react-bootstrap";
import { AddCircleOutline, DeleteOutline, EditOutlined, AddCircle } from "@mui/icons-material";
import "./style_turno.css";

export const Quadro_turno=()=>{

    return(<>
    <div className="area">
        <div className="cabecalho">
        <h3>Turnos</h3>
        <a className="btn btn-success"><AddCircle/>Novo</a>
        </div>
    <Table borderless hover className="tabela">
      <thead>
        <tr>
          <th>Descriçao</th>
          <th>Entrada 1</th>
          <th>Saida 1</th>
          <th>Entrada 2</th>
          <th>Saida 2</th>
          <th><AddCircleOutline/></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>bbwg</td>
          <td><DeleteOutline/> <EditOutlined/></td>
        </tr>
      </tbody>
    </Table>
    </div>
    </>)

}
export default Quadro_turno;