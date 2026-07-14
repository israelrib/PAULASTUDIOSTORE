const express = require('express'); //express é um framework para criar servidores web em Node.js
const cors = require('cors'); //cors é um middleware que permite que o servidor aceite requisições de diferentes origens (domínios)

const app = express();

app.use(cors());
app.use(express.json());

const conexao = require('./conexao'); // Importa a conexão com o banco de dados

// importar as rotas da aplicação
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});