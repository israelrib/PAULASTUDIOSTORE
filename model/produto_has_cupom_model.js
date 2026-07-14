const conexao = require("../conexao/conexao.js"); // CONEXÃO COM O BANCO DE DADOS

// =========================
// Cadastrar Produto_has_Cupom
// =========================

function cadastrar(produto_cupom, callback) { // FUNÇÃO QUE EXECUTA O COMANDO INSERT PARA CADASTRAR UM NOVO RELACIONAMENTO

    const sql = `INSERT INTO Produto_has_Cupom
        ( Produto_idProduto,Cupom_idCupom )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            produto_cupom.Produto_idProduto,
            produto_cupom.Cupom_idCupom
        ],
        callback
    );

}

// =========================
// Listar Relacionamentos
// =========================

function listar(callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA LISTAR TODOS OS RELACIONAMENTOS

    const sql = `
        SELECT * FROM Produto_has_Cupom
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por Produto
// =========================

function buscarPorProduto(idProduto, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR OS CUPONS DE UM PRODUTO

    const sql = `
        SELECT *
        FROM Produto_has_Cupom
        WHERE Produto_idProduto = ?
    `;

    conexao.query(sql, [idProduto], callback);

}

// =========================
// Excluir Relacionamento
// =========================

function excluir(idProduto, idCupom, callback) {

    const sql = `
        DELETE FROM Produto_has_Cupom
        WHERE Produto_idProduto = ?
        AND Cupom_idCupom = ?
    `;

    conexao.query(sql, [idProduto, idCupom], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorProduto,
    excluir

};