import React, { useState } from "react";

function Cliente(){
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");


  async function handleSubmit(event: { preventDefault: () => void; }){
    event.preventDefault();
    const dado = {
      nome: nome,
      cnpj: cnpj,

    };
      try{
        await fetch('http://localhost:3001/cliente', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dado),
        });

        setNome("");
        setCnpj("");

        return;
      } catch (error) {
        let message = 'Erro desconhecido'
        if (error instanceof Error) message = error.message
        reportError({message})
      }
    }

    return(
      <body>
      <div className="pagina">
        
          <h2>Cadastro de Clientes</h2>
          {/*  nome */}
          <div className="form-floating mb-3">
              <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder= "Digite a Razão Social"
              value={nome}
              required={true}
              onChange={(e) => setNome(e.target.value)}
          />
          <label htmlFor="floatingInput">Razão Social</label>
           </div>
           {/* cnpj */}
          <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingInput2"
            placeholder="XX.XXX.XXX/XXXX-XX"
            value={cnpj}
            required={true}
            onChange={(e) => setCnpj(e.target.value)}
          />
          <label htmlFor="floatingInput2">CNPJ</label>
          </div>

          <a
            className="btn btn-success"
            href=""
            role="button"
            onClick={handleSubmit}
          >
            Enviar
          </a>
        </div>
        </body>
    );
  }

  export default Cliente;