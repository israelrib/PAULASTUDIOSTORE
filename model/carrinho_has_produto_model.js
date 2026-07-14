const conexao = require("../conexao/conexao.js"); // CONEXÃO COM O BANCO DE DADOS

// =========================
// Cadastrar Carrinho_has_Produto
// =========================

function cadastrar(carrinho_produto, callback) { // FUNÇÃO QUE EXECUTA O COMANDO INSERT PARA CADASTRAR UM NOVO RELACIONAMENTO

    const sql = `INSERT INTO Carrinho_has_Produto
        ( Carrinho_idCarrinho,Produto_idProduto )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            carrinho_produto.Carrinho_idCarrinho,
            carrinho_produto.Produto_idProduto
        ],
        callback
    );

}

// =========================
// Listar Relacionamentos
// =========================

function listar(callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA LISTAR TODOS OS RELACIONAMENTOS

    const sql = `
        SELECT * FROM Carrinho_has_Produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por Carrinho
// =========================

function buscarPorCarrinho(idCarrinho, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR OS PRODUTOS DE UM CARRINHO

    const sql = `
        SELECT *
        FROM Carrinho_has_Produto
        WHERE Carrinho_idCarrinho = ?
    `;

    conexao.query(sql, [idCarrinho], callback);

}

// =========================
// Excluir Relacionamento
// =========================

function excluir(idCarrinho, idProduto, callback) {

    const sql = `
        DELETE FROM Carrinho_has_Produto
        WHERE Carrinho_idCarrinho = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(sql, [idCarrinho, idProduto], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorCarrinho,
    excluir

};