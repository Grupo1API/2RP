import React, {useState} from "react";
import './style.css'

function Apont_sobreaviso (){ 
  const [nome, setNome] = useState("")
  const [matricula, setMatricula] = useState("")
  const [entrada1, setEntrada1] = useState("")
  const [saida1, setSaida1] = useState("")
  const [entrada2, setEntrada2] = useState("")
  const [saida2, setSaida2] = useState("")
  const [gestor, setGestor] = useState("")
  const [tipo_apontamento,setTipoApontamento] = useState("")
  const [justificativa, setJustificativa] = useState("")

  const cadastrarHora = async (e:any) => {
    e.preventDefault();
    try {
      const body = {nome, matricula, entrada1, saida1, entrada2, saida2, gestor, justificativa};
      const response = await fetch('http://localhost:3001/sobreaviso', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
        console.log(response.json)
        // definir rota
        window.location.href='/sobreaviso'
    } catch (err:any) {
      console.error(err.message)
    }
  };
  const cancelar=()=>{
    setNome("")
    setMatricula("")
    setEntrada1("")
    setSaida1("")
    setEntrada2("") 
    setSaida2("")
    setGestor("")
    setTipoApontamento("")
    setJustificativa("")
  }

  return (
    <div className="pagina">
      <h2> Apontamento Sobreaviso</h2>
{/*
      <div className="form-floating mb-3">
      <select 
      className="form-select" 
      id="floatingSelect"
      placeholder="Escolha o perfil"
      onChange={(e)=> setTipoApontamento(e.target.value)}
      value={tipo_apontamento}
      >
        <option value="hora_extra">Hora Extra</option>
        <option value="sobreaviso">Sobreaviso</option>
        
    </select> 
    <label htmlFor="floatingSelect">Escolha o tipo de apontamento</label>
    </div>
  */}

      {/* entrada nome */}
      <div className="form-floating mb-3">
        <input type="text" className="form-control" id="floatingInput" placeholder="Nome Completo" value={nome}onChange={e => setNome(e.target.value)}/>
        <label htmlFor="floatingInput">Nome Completo</label>
      </div>
      
      {/* Matrícula */}
      <div className="form-floating mb-3">
        <input type="number" className="form-control" id="floatingInput" placeholder="Matrícula" value={matricula}onChange={e => setMatricula(e.target.value)}/>
        <label htmlFor="floatingInput">Matrícula</label>
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
        <input type="text" className="form-control" id="floatingInput" placeholder="Nome Gestor" value={gestor}onChange={e => setGestor(e.target.value)}/>
        <label htmlFor="floatingInput">Nome Gestor</label>
      </div>

    {/* Justificativa */}
      <div className="form-floating mb-3">
        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" value={justificativa}onChange={e => setJustificativa(e.target.value)}></textarea>
      <label htmlFor="floatingTextarea2">Justificativa</label>
        </div>


      {/* Botão */}
      <div className ="form-btn">
        <button className="btn btn-success" role="button"onClick={cadastrarHora}>Enviar</button>
      </div>
    </div>
  )
}

export default Apont_sobreaviso;