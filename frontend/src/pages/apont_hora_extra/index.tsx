import React, {useState, useEffect} from "react";
import Aprov_hora_extra from "../aprov_hora_extra";
import './style.css'

function Apont_hora_extra () { 
  const [tipo, setTipo] = useState("")
  const [nome, setNome] = useState("")
  const [matricula, setMatricula] = useState("")
  const [entrada1, setEntrada1] = useState("")
  const [saida1, setSaida1] = useState("")
  const [entrada2, setEntrada2] = useState("")
  const [saida2, setSaida2] = useState("")
  const [gestor, setGestor] = useState("")
  const [justificativa, setJustificativa] = useState("")



  const cadastrarHora = async (e:any) => {
    e.preventDefault();
    try {
      const body = {tipo, nome, matricula, entrada1, saida1, entrada2, saida2, gestor, justificativa};
      const response = await fetch('http://localhost:3001/hora-extra', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
        console.log(response.json)
        // definir rota
        window.location.href='/hora-extra'
    } catch (err:any) {
      console.error(err.message)
    }
  };
  const cancelar=()=>{
    setTipo("")
    setNome("")
    setMatricula("")
    setEntrada1("")
    setSaida1("")
    setEntrada2("") 
    setSaida2("")
    setGestor("")
    setJustificativa("")
  }

  return (
     
    <div className="pagina">
      <h2> Apontamento Hora Extra</h2>

      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInput" placeholder="Tipo" value={tipo}onChange={e => setTipo(e.target.value)}/>
        <label htmlFor="floatingInput">Tipo de apontamento</label>
      </div>
      {/* entrada nome */}
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInput" placeholder="Nome Completo" value={nome}onChange={e => setNome(e.target.value)}/>
        <label htmlFor="floatingInput">Nome Completo</label>
      </div>
      

      {/* Matrícula */}
      <div className="form-floating mb-3">
        <input type="number" className="form-control" id="floatingInput2" placeholder="Matrícula" value={matricula}onChange={e => setMatricula(e.target.value)}/>
        <label htmlFor="floatingInput2">Matrícula</label>
      </div>

      {/* Entrada 1 */}
      <div className="row g-2">
      <div className="col-md">
          <div className="form-floating">
          <input type="datetime-local" className="form-control" id="floatingInputGrid" value={entrada1}onChange={e => setEntrada1(e.target.value)} />
          <label htmlFor="floatingInputGrid">Entrada 1</label>
    </div>
    </div>
      {/* Saída 1 */}
      <div className="col-md">
      <div className="form-floating">
      <input type="datetime-local" className="form-control" id="floatingInputGrid" value={saida1}onChange={e => setSaida1(e.target.value)}/>
    <label htmlFor="floatingSelectGrid">Saída 1</label>
    </div>
    </div>
    </div>


        <p></p>
        {/* Entrada 2 */}
        <div className="row g-2">
      <div className="col-md">
          <div className="form-floating">
          <input type="datetime-local" className="form-control" id="floatingInputGrid2" value={entrada2}onChange={e => setEntrada2(e.target.value)} />
          <label htmlFor="floatingInputGrid2">Entrada 2</label>
    </div>
    </div>
      {/* Saída 2 */}
      <div className="col-md">
      <div className="form-floating mb-3">
      <input type="datetime-local" className="form-control" id="floatingInputGrid2" value={saida2}onChange={e => setSaida2(e.target.value)}/>
    <label htmlFor="floatingSelectGrid2">Saída 2</label>
    </div>
    </div>
    </div>


    {/* Nome Gestor */}
    <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInput3" placeholder="Nome Gestor" value={gestor}onChange={e => setGestor(e.target.value)}/>
        <label htmlFor="floatingInput3">Nome Gestor</label>
      </div>


    {/* Justificativa */}
      <div className="form-floating">
        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" value={justificativa}onChange={e => setJustificativa(e.target.value)}></textarea>
      <label htmlFor="floatingTextarea2">Justificativa</label>
        </div>


      {/* Botão */}
      <div className ="form-btn">
        <button className="btn btn-success" role="button" onClick={cadastrarHora}>Enviar</button>
      </div>
    </div>
  )
}

export default Apont_hora_extra;