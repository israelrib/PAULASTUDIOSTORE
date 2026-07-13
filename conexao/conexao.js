const mysql = require('mysql2') // conectar com o servidor do node.js e o banco de dados MySQL
const conexão = mysql.createConnection({ //váriavel que vai armazenar a conexão com o banco de dados
    host: 'localhost',
    user: 'root',
    password: '', //senha do MySQL
    database: 'PaulaStudioFitness'
});
conexao.connect((erro) => {
    if (erro) {
        console.log('Erro ao conectar:', erro);
        return;
    }
    console.log('Banco conectado com sucesso!');
 });

 module.exports = conexao;