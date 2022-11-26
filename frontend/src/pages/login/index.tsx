import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
//import { useAuth } from "../../hooks";
import "./style.css";
import { useCookies } from "react-cookie";

export const Login = () => {
  const [email, setMail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const [cookies, setCookie] = useCookies(["user"]);

  const enviar = async () => {
    setError("");
    const r = await login({ email, senha });
    if (r.error !== "") {
      setError(r.error);
    }
  };

  type Entrar = {
    token: string;
  };

  const entrar = async () => {
    try {
      const { data } = await axios.post<Entrar>(
        "http://localhost:3001/login",
        { email, senha },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log(JSON.stringify(data));
      setCookie("user", data.token, {
        path: "/",
      });

      return window.location.href='/';
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message", error.message);
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error ocurred";
      }
    }
  };

  // const entrar = async (e: any) => {
  //   e.preventDefault();
  //   try {
  //     const body = { email, senha };
  //     const response = fetch("http://localhost:3001/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(body),
  //     }).then((response) => {
  //       console.log("uhueheue");
  //       console.log(response);
  //     });
  //     // Cookies.set("jwt", response.body.token);
  //     // definir rota
  //     // window.location.href='/'
  //   } catch (err: any) {
  //     console.error(err.message);
  //   }
  // };

  const cancelar = () => {
    setMail("");
    setSenha("");
  };

  return (
    <div className="pagina" id="pagina-login">
      <h2 id="titulo"> Login </h2>
      {/* entrada login */}
      {/*email*/}
      <div className="form-floating mb-3" id="floating-login">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setMail(e.target.value)}
        />
        <label htmlFor="floatingInput">E-mail</label>
      </div>
      {/*senha */}
      <div className="form-floating mb-3" id="floating-login">
        <input
          type="password"
          className="form-control"
          id="floatingInput2"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <label htmlFor="floatingInput2">Senha</label>
      </div>
      {/*botão*/}
      <div className="form-btn">
        <button
          type="submit"
          className="btn btn-success"
          role="button"
          onClick={entrar}
        >
          Entrar
        </button>
      </div>
      {/*<p> ou </p>
            <a href="">Esqueceu a senha?</a>*/}{" "}
      {/*posteriormente inserir /update/senha*/}
    </div>
  );
};
export default Login;
