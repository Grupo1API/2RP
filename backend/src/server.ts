import * as express from "express";
import * as cors from "cors";
import router from "./routes/index";
import { db } from "./database/db";

const PORT = process.env.PORT || 3002;

const app = express(); // cria o servidor

app.use(express.json()); // suporta parâmetros JSON no body da requisição
app.use(cors()); // suporta requisições de qualquer domínio
app.use(router); // usa arquivo de rotas para receber requisições

// inicializa o servidor na porta especificada
app.listen(PORT, async () => {
  await db.sync();
  console.log(`App running on ${PORT}!`);
});
