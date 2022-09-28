import React, {useState} from "react";
import './style.css'


export const Login =() =>{
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

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
            window.location.href='/Login'
        } catch (err:any) {
          console.error(err.message)
        }
      };
      const cancelar=()=>{
        setEmail("")
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
                    <input type="email" className="form-control" id="InputEmail" placeholder="Login:"/>
                  </div>

                  {/*senha */}
                  <div className="mb-3">
                    <input type="password" className="form-control" id="InputPassword" placeholder="Senha:"/>
                  </div>
                  <button type="submit" className="btn btn-primary">Entrar</button>
                </form>
                <p> ou </p>
                <a href="">Esqueceu a senha?</a>
           </div>
        </div>
    </body>
)}
export default Login;