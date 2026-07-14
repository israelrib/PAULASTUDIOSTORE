const conexao = require("../conexao/conexao.js"); // CONEXÃO COM O BANCO DE DADOS

// =========================
// Cadastrar Produto_has_Promocao
// =========================

function cadastrar(produto_promocao, callback) { // FUNÇÃO QUE EXECUTA O COMANDO INSERT PARA CADASTRAR UM NOVO RELACIONAMENTO

    const sql = `INSERT INTO Produto_has_Promocao
        ( Produto_idProduto,Promocao_idPromocao )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            produto_promocao.Produto_idProduto,
            produto_promocao.Promocao_idPromocao
        ],
        callback
    );

}

// =========================
// Listar Relacionamentos
// =========================

function listar(callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA LISTAR TODOS OS RELACIONAMENTOS

    const sql = `
        SELECT * FROM Produto_has_Promocao
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por Produto
// =========================

function buscarPorProduto(idProduto, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR AS PROMOÇÕES DE UM PRODUTO

    const sql = `
        SELECT *
        FROM Produto_has_Promocao
        WHERE Produto_idProduto = ?
    `;

    conexao.query(sql, [idProduto], callback);

}

// =========================
// Excluir Relacionamento
// =========================

function excluir(idProduto, idPromocao, callback) {

    const sql = `
        DELETE FROM Produto_has_Promocao
        WHERE Produto_idProduto = ?
        AND Promocao_idPromocao = ?
    `;

    conexao.query(sql, [idProduto, idPromocao], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorProduto,
    excluir

};