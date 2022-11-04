import React, {useState} from "react";


export default function EditCliente({dados, modalEdit}){
  const [nome, setNome] = useState(dados.nome);
  const [status, setStatus] = useState("");
  const [cnpj, setCnpj] = useState(dados.cnpj);
  const [contato,setContato] = useState(dados.contato);


  async function handleUpdate(){

    const dado = {
      nome: nome,
   
      cnpj: cnpj,
      contato: contato
    };
      try{
        await fetch('http://localhost:3001/clientes/:Id', {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dado),
        });

        

        return;
      } catch (error) {
        let message = 'Erro desconhecido'
        if (error instanceof Error) message = error.message
        reportError({message})
      }
    }

    return(
      <div className="pagina">
        <h2>Edição de Cliente</h2>
        {/*  nome */}
        <div className="form-floating mb-4">
            <input
            type="text"
            className="form-control"
            id="floatingInput2"
            placeholder= "Digite a Razão Social"
            value={nome}
            onChange={(e) =>setNome(e.target.value)}
       
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
          onChange={(e) =>setCnpj(e.target.value)}
        />
        <label htmlFor="floatingInput2">CNPJ</label>
        </div>
       
        {/*status*/}
      {/* <div className="form-floating mb-4">
        <input
          type="texto"
          className="form-control"
          id="floatingInput2"
          placeholder="Contato"
          value={status}
          onChange={(e) =>setStatus(e.target.value)}
        />
        <label htmlFor="floatingInput2">Status</label>
      </div> */}

{/* contato */}
      <div className="form-floating mb-4">
        <input
          type="texto"
          className="form-control"
          id="floatingInput2"
          placeholder="Contato"
          value={contato}
          onChange={(e) =>setContato(e.target.value)}
         
        />
        <label htmlFor="floatingInput2">Contato</label>
      </div>

        {/* Botão */}
        <div className ="form-btn">
        <button className="btn btn-success" role="button" onClick={handleUpdate}>
          Editar
        </button>
        </div>
      </div>
    );
  }

   ;