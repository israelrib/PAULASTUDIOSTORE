const conexao = require("../conexao/conexao.js"); // CONEXÃO COM O BANCO DE DADOS

// =========================
// Cadastrar Banner_has_Produto
// =========================

function cadastrar(banner_produto, callback) { // FUNÇÃO QUE EXECUTA O COMANDO INSERT PARA CADASTRAR UM NOVO RELACIONAMENTO

    const sql = `INSERT INTO Banner_has_Produto
        ( Banner_idBanner,Produto_idProduto )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            banner_produto.Banner_idBanner,
            banner_produto.Produto_idProduto
        ],
        callback
    );

}

// =========================
// Listar Relacionamentos
// =========================

function listar(callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA LISTAR TODOS OS RELACIONAMENTOS

    const sql = `
        SELECT * FROM Banner_has_Produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por Banner
// =========================

function buscarPorBanner(idBanner, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR OS PRODUTOS DE UM BANNER

    const sql = `
        SELECT *
        FROM Banner_has_Produto
        WHERE Banner_idBanner = ?
    `;

    conexao.query(sql, [idBanner], callback);

}

// =========================
// Excluir Relacionamento
// =========================

function excluir(idBanner, idProduto, callback) {

    const sql = `
        DELETE FROM Banner_has_Produto
        WHERE Banner_idBanner = ?
        AND Produto_idProduto = ?
    `;

    conexao.query(sql, [idBanner, idProduto], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorBanner,
    excluir

};