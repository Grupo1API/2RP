import React from "react";
import { Table } from "react-bootstrap";
import { AddCircleOutline, DeleteOutline, EditOutlined, AddCircle } from "@mui/icons-material";
import "./styled.css";

export const Quadro_verba=()=>{

    return(<>
    <div className="area">
        <div className="cabecalho">
        <h3>Verbas Salariais</h3>
        <a className="btn btn-success"><AddCircle/>Novo</a>
        </div>
    <Table borderless hover className="tabela">
      <thead>
        <tr>
          <th>Descriçao</th>
          <th>Codigo</th>
          <th>Percentual</th>
          <th>Fator</th>
          <th><AddCircleOutline/></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td><DeleteOutline/> <EditOutlined/></td>
        </tr>
      </tbody>
    </Table>
    </div>
    </>)

}
export default Quadro_verba;