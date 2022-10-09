import React, {useState} from "react";
import { useAuth } from "../../hooks";
import './style.css'


export const Login =() =>{
    const [mail, setMail] = useState("")
    const [senha, setSenha] = useState("")
    const [error, setError] = useState("");
    const {login} = useAuth();

    const enviar = async () => {
      setError("");
      const r = await login({mail, senha});
      if (r.error !== ""){
        setError(r.error);
      }
    }
  
    const entrar = async (e:any) => {
        e.preventDefault();
        try {
          const body = {mail, senha};
          const response = await fetch('http://localhost:3001/Login', {
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
        <body>
        <div className="pagina">
          <h2 className="titulo"> Login </h2>
          
            {/* entrada login */}
            <div className="form-floating mb-3">
            <form>
                  <div className="mb-3">
                    <input value={mail} type="email" className="form-control" id="InputEmail" placeholder="Login:" onChange={(e) => setMail(e.target.value) }/>
                  </div>

                  {/*senha */}
                  <div className="mb-3">
                    <input value={senha} type="password" className="form-control" id="InputPassword" placeholder="Senha:" onChange={(e) => setSenha(e.target.value)}/>
                  </div>
                  {error !== "" && <div>{error}</div>}
                  <button onClick={entrar} type="submit" className="btn btn-primary">Entrar</button>
                </form>
                <p> ou </p>
                <a href="">Esqueceu a senha?</a>
           </div>
        </div>
    </body>
)}
export default Login;