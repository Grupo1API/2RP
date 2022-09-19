import React, {useState} from "react";
import './style.css'

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
      <div className="pagina">
        <h2>Cadastro de Clientes</h2>
        {/*  nome */}
        <div className="form-floating mb-4">
            <input
            type="text"
            className="form-control"
            id="floatingInput2"
            placeholder= "Digite a Razão Social"
            value={nome}
            required={true}
            onChange={(e) => setNome(e.target.value)}
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
          value={cnpj}
          required={true}
          onChange={(e) => setCnpj(e.target.value)}
        />
        <label htmlFor="floatingInput2">CNPJ</label>
        </div>

        {/* Botão */}
        <div className ="form-btn">
        <button className="btn btn-success" role="button" onClick={handleSubmit}>
          Enviar
        </button>
        </div>
      </div>
    );
  }

  export default Cliente;