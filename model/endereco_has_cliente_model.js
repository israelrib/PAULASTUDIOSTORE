const conexao = require("../conexao/conexao.js"); // CONEXÃO COM O BANCO DE DADOS

// =========================
// Cadastrar Endereco_has_Cliente
// =========================

function cadastrar(endereco_cliente, callback) { // FUNÇÃO QUE EXECUTA O COMANDO INSERT PARA CADASTRAR UM NOVO RELACIONAMENTO

    const sql = `INSERT INTO Endereco_has_Cliente
        ( Endereco_idEndereco,Cliente_idCliente )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            endereco_cliente.Endereco_idEndereco,
            endereco_cliente.Cliente_idCliente
        ],
        callback
    );

}

// =========================
// Listar Relacionamentos
// =========================

function listar(callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA LISTAR TODOS OS RELACIONAMENTOS

    const sql = `
        SELECT * FROM Endereco_has_Cliente
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por Cliente
// =========================

function buscarPorCliente(idCliente, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR OS ENDEREÇOS DE UM CLIENTE

    const sql = `
        SELECT *
        FROM Endereco_has_Cliente
        WHERE Cliente_idCliente = ?
    `;

    conexao.query(sql, [idCliente], callback);

}

// =========================
// Excluir Relacionamento
// =========================

function excluir(idEndereco, idCliente, callback) {

    const sql = `
        DELETE FROM Endereco_has_Cliente
        WHERE Endereco_idEndereco = ?
        AND Cliente_idCliente = ?
    `;

    conexao.query(sql, [idEndereco, idCliente], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorCliente,
    excluir

};