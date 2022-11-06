import React, {useState} from "react";
import useAuth from "../../hooks/useAuth";
//import { useAuth } from "../../hooks";
import './style.css'


export const Login =() =>{
    const [email, setMail] = useState("")
    const [senha, setSenha] = useState("")
    const [error, setError] = useState("");
    const {login} = useAuth();

    
    const enviar = async () => {
      setError("");
      const r = await login({ email, senha });
      if (r.error !== "") {
        setError(r.error);
      }
    };


    const entrar = async (e:any) => {
        e.preventDefault();
        try {
          const body = {email, senha};
          const response = await fetch('http://localhost:3001/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(body)
            });
            console.log(response.json)
            // definir rota
            window.location.href='/'
        } catch (err:any) {
          console.error(err.message)
        }
      };
      const cancelar=()=>{
        setMail("")
        setSenha("")
      }

      return (
        <div className="pagina" id="pagina-login">
          <h2 id="titulo"> Login </h2>
          
            {/* entrada login */}

            
                  {/*email*/}
                  <div className="form-floating mb-3" id="floating-login">
                    <input type="email" className="form-control" id="floatingInput" placeholder="E-mail" value={email}  onChange={(e) => setMail(e.target.value) }/>
                    <label htmlFor="floatingInput">E-mail</label>
                  </div>

                  {/*senha */}
                  <div className="form-floating mb-3" id="floating-login">
                    <input type="password" className="form-control" id="floatingInput2" placeholder="Senha" value={senha}  onChange={(e) => setSenha(e.target.value)}/>
                    <label htmlFor="floatingInput2">Senha</label>
                  </div>

                  {/*botão*/}
                  <div className ="form-btn">
                    <button  type="submit" className="btn btn-success" role="button" onClick={entrar}>Entrar</button>
                  </div>
            {/*<p> ou </p>
            <a href="">Esqueceu a senha?</a>*/} {/*posteriormente inserir /update/senha*/}
           </div>

)}
export default Login;