import React from "react";
//import "../components/sidebar/style.css";

// makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     backgroundColor: "#fff",
//     padding: "1em",
//   },
//   campo: {
//     display: "flex",
//     gap: "5px 10px",
//   },
//   text: {
//     marginBottom: "2em",
//   },
//   button: {
//     width: "2em",
//   },
// }));
export default function infoCliente({ dados }) {


  return (
    <div className="pagina">
      <h2>Informaçoes do Cliente</h2>
      {/*  nome */}
      <div className="form-floating mb-4">
        <input
          type="text"
          className="form-control"
          id="floatingInput2"
          placeholder="Digite a Razão Social"
          value={dados.nome}
          required={true}
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
          value={dados.cnpj}
          required={true}
        />
        <label htmlFor="floatingInput2">CNPJ</label>
      </div>
      
      {/*status*/}
      <div className="form-floating mb-4">
        <input
          type="texto"
          className="form-control"
          id="floatingInput2"
          placeholder="Contato"
          value={dados.status}
        
        />
        <label htmlFor="floatingInput2">Status</label>
      </div>

      {/* contato */}
      <div className="form-floating mb-4">
        <input
          type="texto"
          className="form-control"
          id="floatingInput2"
          placeholder="Contato"
          value={dados.contato}
         
        />
        <label htmlFor="floatingInput4" >Contato</label>
      </div>
    </div>
  );
}

// export default function infoCliente({ dados }) {


//   return (
//     <div className="root">
//       <h2>Cadastro de Clientes</h2>
//       {/*  nome */}
//       <div className="campo">
//         <input
//           type="text"
//           className="text"
//           id="floatingInput2"
//           placeholder="Digite a Razão Social"
//           value={dados.nome}
//           required={true}
//         />
//         <label htmlFor="floatingInput2">Razão Social</label>
//       </div>

//       {/* cnpj */}
//       <div className="campo">
//         <input
//           type="number"
//           className="campo"
//           id="floatingInput2"
//           placeholder="XX.XXX.XXX/XXXX-XX"
//           value={dados.cnpj}
//           required={true}
//         />
//         <label htmlFor="floatingInput2">CNPJ</label>
//       </div>

//       {/* contato */}
//       <div className="campo">
//         <input
//           type="texto"
//           className="text"
//           id="floatingInput2"
//           placeholder="Contato"
//           value={dados.contato}
//           required={true}
//         />
//         <label htmlFor="floatingInput2">Contato</label>
//       </div>
//     </div>
//   );
// }
