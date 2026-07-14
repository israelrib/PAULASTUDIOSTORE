const conexao = require("../conexao/conexao.js"); // CONEXÃO COM O BANCO DE DADOS

// =========================
// Cadastrar Produto_has_Tamanho
// =========================

function cadastrar(produto_tamanho, callback) { // FUNÇÃO QUE EXECUTA O COMANDO INSERT PARA CADASTRAR UM NOVO RELACIONAMENTO

    const sql = `INSERT INTO Produto_has_Tamanho
        ( Produto_idProduto,Tamanho_idTamanho )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            produto_tamanho.Produto_idProduto,
            produto_tamanho.Tamanho_idTamanho
        ],
        callback
    );

}

// =========================
// Listar Relacionamentos
// =========================

function listar(callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA LISTAR TODOS OS RELACIONAMENTOS

    const sql = `
        SELECT * FROM Produto_has_Tamanho
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por Produto
// =========================

function buscarPorProduto(idProduto, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR OS TAMANHOS DE UM PRODUTO

    const sql = `
        SELECT *
        FROM Produto_has_Tamanho
        WHERE Produto_idProduto = ?
    `;

    conexao.query(sql, [idProduto], callback);

}

// =========================
// Excluir Relacionamento
// =========================

function excluir(idProduto, idTamanho, callback) {

    const sql = `
        DELETE FROM Produto_has_Tamanho
        WHERE Produto_idProduto = ?
        AND Tamanho_idTamanho = ?
    `;

    conexao.query(sql, [idProduto, idTamanho], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorProduto,
    excluir

};