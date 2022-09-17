import { useState } from "react";
import Pag_Cadastro from "../../components/Pag_Cadastro";

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
      <div className="cadastro_cliente">
      <div className="containerCliente">
        <h1 className="titulo">Cadastro de Clientes</h1>
        <div className="cadastro">
          <form name="cadastroCliente" onSubmit={handleSubmit}>
            <label>
              Razão Social
            <input 
            id="nome"
            type="text"
            required={true}
            placeholder="Digite a Razão Social"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="input"
            />
            </label>
            <label>
              CNPJ
            <input
            id="cnpj"
            type="text" 
            required={true}
            placeholder="XX.XXX.XXX/XXXX-XX"
            value={cnpj}
            onChange={(e)=> setCnpj(e.target.value)}
            className="input"
            />
            </label>
            <div className="bt-container">
              <button type="submit" className="cadastrar" id="botao_cad">
                ENVIAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cliente;