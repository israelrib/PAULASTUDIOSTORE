const mysql = require('mysql2') // conectar com o servidor do node.js ao banco de dados MySQL
const conexao = mysql.createConnection({ //váriavel que vai armazenar a conexão com o banco de dados
    host: 'altaria.proxy.rlwy.net',
    user: 'root',
    port: 19930, // porta padrão do MySQL
    password: 'AEJAoyeRWHrmopiLkOiHUyUuofSetovW', //senha do MySQL
    database: 'railway'
});
conexao.connect((erro) => {
    if (erro) {
        console.log('Erro ao conectar:', erro);
        return;
    }
    console.log('Banco conectado com sucesso!');
 });

 module.exports = conexao;