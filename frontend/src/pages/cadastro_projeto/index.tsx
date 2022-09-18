import React from "react";
import { useState } from "react";

function Projeto () {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");

  async function cadastrarprojeto(event: { preventDefault: () => void; }){
    event.preventDefault();
    const dado = {
      nome: nome,
      numero: numero,
    };

    try{
      await fetch('http://localhost:3001/projeto', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dado),
      });

      setNome("");
      setNumero("");

      return;
    } catch (error) {
      let message = 'Erro desconhecido'
      if (error instanceof Error) message = error.message
      reportError({message})
    }
  }

  return (
    
    <body>
      <div className="pagina">
        <h2> Cadastro de Projeto </h2>
        {/*  nome */}
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Nome Completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <label htmlFor="floatingInput">Nome do Projeto</label>
        </div>

        {/* numero */}
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingInput2"
            placeholder="Matrícula"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
          <label htmlFor="floatingInput2">Número do Projeto</label>
        </div>

        {/* Botão */}
        {/* <center> */}
        <a
            className="btn btn-success"
            href=""
            role="button"
            onClick={cadastrarprojeto}
          >
            Enviar
          </a>
        
        {/* </center>
         */}
      </div>  
    </body>
    
  );
};

export default Projeto;
