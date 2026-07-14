const conexao = require("../conexao/conexao.js"); // CONEXÃO COM O BANCO DE DADOS

// =========================
// Cadastrar Carrinho
// =========================

function cadastrar(carrinho, callback) { // FUNÇÃO QUE EXECUTA O COMANDO INSERT PARA CADASTRAR UM NOVO CARRINHO

    const sql = `INSERT INTO Carrinho
        ( quantidade_produto,preco_total,Cliente_idCliente )
        VALUES (?, ?, ?)`;

    conexao.query( // EXECUTA O COMANDO INSERT NO BANCO DE DADOS
        sql,
        [
            carrinho.quantidade_produto,
            carrinho.preco_total,
            carrinho.Cliente_idCliente
        ],
        callback
    );

}

// =========================
// Listar Carrinhos
// =========================

function listar(callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA LISTAR TODOS OS CARRINHOS

    const sql = `
        SELECT * FROM Carrinho
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UM CARRINHO PELO ID

    const sql = `
        SELECT *
        FROM Carrinho
        WHERE idCarrinho = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Cliente
// =========================

function buscarPorCliente(idCliente, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR O CARRINHO DE UM CLIENTE

    const sql = `
        SELECT *
        FROM Carrinho
        WHERE Cliente_idCliente = ?
    `;

    conexao.query(sql, [idCliente], callback);

}

// =========================
// Atualizar Carrinho
// =========================

function atualizar(id, carrinho, callback) { // FUNÇÃO QUE EXECUTA O COMANDO UPDATE PARA ATUALIZAR UM CARRINHO EXISTENTE

    const sql = `
        UPDATE Carrinho
        SET

            quantidade_produto = ?,
            preco_total = ?,
            Cliente_idCliente = ?

        WHERE idCarrinho = ?
    `;

    conexao.query( // EXECUTA O COMANDO UPDATE NO BANCO DE DADOS
        sql,
        [
            carrinho.quantidade_produto,
            carrinho.preco_total,
            carrinho.Cliente_idCliente,
            id
        ],
        callback
    );

}

// =========================
// Excluir Carrinho
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Carrinho
        WHERE idCarrinho = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorCliente,
    atualizar,
    excluir

};