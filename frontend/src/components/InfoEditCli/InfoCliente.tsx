import React from "react";
import "./style.css";

export default function InfoCliente({ dados }) {
  return (
    <div className="pagina">
      <h2>Informaçoes do Cliente</h2>

      {/*  nome */}
      <div className="form-floating mb-4">
        <input
          type="text"
          className="form-control"
          id="floatingInput2"
          placeholder="Digite a Razão Social"
          value={dados.nome}
          disabled
        />
        <label htmlFor="floatingInput2">Razão Social</label>
      </div>

      {/* cnpj */}
      <div className="form-floating mb-4">
        <input
          type="number"
          className="form-control"
          id="floatingInput2"
          placeholder="XX.XXX.XXX/XXXX-XX"
          value={dados.cnpj}
          disabled
        />
        <label htmlFor="floatingInput2">CNPJ</label>
      </div>

      {/*status*/}
      <div className="form-floating mb-4">
        <input
          type="texto"
          className="form-control"
          id="floatingInput2"
          placeholder="Contato"
          value={dados.status}
          disabled
        />
        <label htmlFor="floatingInput2">Status</label>
      </div>

      {/* contato */}
      <div className="form-floating mb-4">
        <input
          type="texto"
          className="form-control"
          id="floatingInput2"
          placeholder="Contato"
          value={dados.contato}
          disabled
        />
        <label htmlFor="floatingInput4">Contato</label>
      </div>
    </div>
  );
}
