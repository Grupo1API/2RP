import React, {useState} from "react";
import './style.css'

function CentroResultado () {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");

  async function cadastrarcentro(event: { preventDefault: () => void; }){
    event.preventDefault();
    const dado = {
      nome: nome,
      numero: numero,
    };

    try{
      await fetch('http://localhost:3001/centro-de-resultados', {
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
    <div className="pagina">
      <h2> Cadastro de Centro de Resultado </h2>
      {/*  nome */}
      <div className="form-floating mb-4">
        <input
          type="text"
          className="form-control"
          id="floatingInput2"
          placeholder="Nome Completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <label htmlFor="floatingInput2">Nome do CR</label>
      </div>

      {/* numero */}
      <div className="form-floating mb-4">
        <input
          type="number"
          className="form-control"
          id="floatingInput2"
          placeholder="Matrícula"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        <label htmlFor="floatingInput2">Número do CR</label>
      </div>

      {/* Botão */}
      <div className ="form-btn">
        <button className="btn btn-success"role="button"onClick={cadastrarcentro}>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default CentroResultado;
