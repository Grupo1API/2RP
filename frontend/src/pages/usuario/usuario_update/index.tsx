import React, { useState, useEffect } from "react";
import { useAuth } from "../../../hooks";

export default function UsuarioUpdate() {
  const [email, setMail] = useState("");
  const [senha, setSenha] = useState("");
  const [perfil, setPerfil] = useState("");
  //const [msg, setMsg] = useState("");
  //const { usuarioUpdate, mailLogin } = useAuth();


  async function salvar (event: { preventDefault: () => void; }) {
    event.preventDefault();

    const dado = {
      email: email,
      senha: senha,
      perfil:perfil,

    };

    try{
      await fetch('http://localhost:3001/usuario/update', {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dado),
      });
  
      setMail("");
      setSenha("");
      setPerfil("");
  
      return;
    } catch (error) {
      let message = 'Erro desconhecido'
      if (error instanceof Error) message = error.message
      reportError({message})
    }
    }

  return (
    <div>
      <div className="pagina">
      <h2>Gerenciar Usuário</h2>
      {/*  email */}
      <div className="form-floating mb-4">
        <input
          className="form-control"
          id="floatingInput2"
          value={email}
          required={true}
          onChange={(e) => setMail(e.target.value)}
        />
        <label htmlFor="floatingInput2">E-mail</label>
      </div>

      {/*  senha */}
      <div className="form-floating mb-4">
        <input
          type="password"
          className="form-control"
          id="floatingInput2"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <label htmlFor="floatingInput2">Senha</label>
      </div>

      {/*  perfil */}
      <div className="form-floating mb-4">
          <select
          className="form-select" 
          id="floatingSelect"
          placeholder="Escolha o perfil"
          onChange={(e)=> setPerfil(e.target.value)}
          value={perfil}
          required={true}
          >
              <option value='colaborador'>Colaborador</option>
              <option value='gestor'>Gestor</option>
              <option value='admin'>Administrador</option>
          </select> 
          <label htmlFor="floatingSelect">Escolha o perfil</label>
      </div>

      {/* Botão */}
      <div className ="form-btn">
        <button className="btn btn-success" role="button"  onClick={salvar}>Atualizar</button>
      </div>
      </div>
    </div>
  );
}
