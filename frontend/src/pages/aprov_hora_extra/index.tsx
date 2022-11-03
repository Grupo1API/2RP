import React, {useState} from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";
import { useNavigate } from "react-router";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './style.css'

    {/* Funções */}

function Aprov_hora_extra () {
  const history = useNavigate()
  const [tipo, setTipo] = useState("") 
  const [nome, setNome] = useState("")
  const [matricula, setMatricula] = useState("")
  const [entrada1, setEntrada1] = useState("")
  const [saida1, setSaida1] = useState("")
  const [entrada2, setEntrada2] = useState("")
  const [saida2, setSaida2] = useState("")
  const [gestor, setGestor] = useState("")
  const [justificativa, setJustificativa] = useState("")


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => {
    setShow2(false)
    history('/')
  };

  const fechar = () => {
    history('/')
  }

  const handleShow2 = () => { 
    setShow2 (true)
    setShow(true)
  };     

  


  const cadastrarHora = async (e:any) => {
    e.preventDefault();
    handleShow2()
    try {
      const body = {tipo, nome, matricula, entrada1, saida1, entrada2, saida2, gestor, justificativa};
      const response = await fetch('http://localhost:3001/aprov-hora-extra', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
        console.log(response.json)
        // definir rota
        window.location.href='/aprov-hora-extra'
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

  return <>
    <div className="pagina">
      <h2> Aceitar/Recusar</h2>

      {/* Hora-extra/Sobreaviso */}
        <input type="text" className="form-control" id="floatingInput-tipo" readOnly placeholder="Hora-Extra/Sobreaviso" value={tipo}onChange={e => setTipo(e.target.value)}/>      

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
          <input type="datetime-local" className="form-control entrada2" id="floatingInputGrid2" value={entrada2}onChange={e => setEntrada2(e.target.value)} />
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


    {/* Justificativa da hora extra */}
      <div className="form-floating">
        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" value={justificativa}onChange={e => setJustificativa(e.target.value)}></textarea>
      <label htmlFor="floatingTextarea2"> Justificativa</label>
        </div>


      {/* Botão Aceitar */}
        <div className ="form-btn-1">
            <button className="btn btn-success-1" onClick={handleShow} role="button" >Aceitar</button>
        </div>

      {/* Botão Recusar */}
        <div className ="form-btn-2">
            <button className="btn btn-success-2" role="button" onClick={handleShow}>Recusar</button>
        </div>
      

      {/* Botão Editar */}
      <div className ="form-btn-3">
            <button className="btn btn-success-3" role="button" onClick={handleShow}>Editar</button>
      </div>
</div>
   

      {/* primeiro popup */}
     <Modal show={show} onHide={handleClose}>
     <Modal.Header className="sair" closeButton> </Modal.Header>

      <ErrorOutlineIcon className="error" sx={{
             
                width: 100,
                height: 100,
            
              color: '#FFD700',
      }}/> 

      <h3></h3>
      <Modal.Title className="atencao">Atenção!</Modal.Title>
       <Modal.Body className="confAcao">Confirmar ação?</Modal.Body>
        <Modal.Footer className="footer">
            <Button variant="primary" onClick={cadastrarHora} className="btnSim">
             Sim
            </Button>
             <Button variant="secondary" onClick={handleClose} className="btnNao">
              Não
            </Button>
        </Modal.Footer>
       </Modal>


        {/* segundo popup */}
       <Modal show={show2} onHide={handleClose2}>
      <Modal.Header className="sair2" closeButton> </Modal.Header>

      <CheckCircleIcon className="sucess" sx={{
              
                width: 100,
                height: 100,
            
              color: '#00CA72',
      }}/> 
 
        <h3></h3>
        <Modal.Title className="sucesso">Sucesso!</Modal.Title>
          <Modal.Body className="operacao">Opereção realizada com sucesso</Modal.Body>
          <Modal.Footer className="footer1">
              <Button variant="primary" onClick={fechar} className="btnOk">
                Ok
              </Button>
          </Modal.Footer>
          </Modal>
    </>

}



export default Aprov_hora_extra;