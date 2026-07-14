const conexao = require("../conexao/conexao.js"); // CONEXÃO COM O BANCO DE DADOS

// =========================
// Cadastrar Pedidos_has_Produto
// =========================

function cadastrar(pedido_produto, callback) { // FUNÇÃO QUE EXECUTA O COMANDO INSERT PARA CADASTRAR UM NOVO RELACIONAMENTO

    const sql = `INSERT INTO Pedidos_has_Produto
        ( Pedidos_idPedidos,Produto_idProduto )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            pedido_produto.Pedidos_idPedidos,
            pedido_produto.Produto_idProduto
        ],
        callback
    );

}

// =========================
// Listar Relacionamentos
// =========================

function listar(callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA LISTAR TODOS OS RELACIONAMENTOS

    const sql = `
        SELECT * FROM Pedidos_has_Produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por Pedido
// =========================

function buscarPorPedido(idPedido, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR OS PRODUTOS DE UM PEDIDO

    const sql = `
        SELECT *
        FROM Pedidos_has_Produto
        WHERE Pedidos_idPedidos = ?
    `;

    conexao.query(sql, [idPedido], callback);

}

// =========================
// Excluir Relacionamento
// =========================

function excluir(idPedido, idProduto, callback) {

    const sql = `
        DELETE FROM Pedidos_has_Produto
        WHERE Pedidos_idPedidos = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(sql, [idPedido, idProduto], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorPedido,
    excluir

};