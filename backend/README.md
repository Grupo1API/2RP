# :file_folder: Instalação

No diretório do projeto, executar:

##### `npm install`
##### `npm install sequelize`
:wrench: Modo de desenvolvimento:  
##### `npm run dev`
:hammer: Modo de produção: 
#### `npm run start`

Links para realizar o download das tecnologias necessárias para executar o projeto:

[![NodeJS Badge](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/download/)
[![PostgreSQL Badge](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) ](https://www.postgresql.org/download/)

## :card_file_box: Banco de dados  

### Banco de dados local:
Inserir os parâmetros de acesso ao SGBD PostgreSQL no arquivo `src/database/db.ts`.

### Banco de dados hospedado do PostgreSQL no [:elephant:ElephantSQL ](https://www.elephantsql.com/) :
Alterar DATABASE_URL para a URL do seu banco de dados do ElephantSQL no arquivo `.env`
