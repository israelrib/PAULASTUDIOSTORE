const conexao = require("../conexao/conexao.js"); // CONEXÃO COM O BANCO DE DADOS

// =========================
// Cadastrar Promocao_has_Categoria
// =========================

function cadastrar(promocao_categoria, callback) { // FUNÇÃO QUE EXECUTA O COMANDO INSERT PARA CADASTRAR UM NOVO RELACIONAMENTO

    const sql = `INSERT INTO Promocao_has_Categoria
        ( Promocao_idPromocao,Categorias_idCategoria )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            promocao_categoria.Promocao_idPromocao,
            promocao_categoria.Categorias_idCategoria
        ],
        callback
    );

}

// =========================
// Listar Relacionamentos
// =========================

function listar(callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA LISTAR TODOS OS RELACIONAMENTOS

    const sql = `
        SELECT * FROM Promocao_has_Categoria
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por Promocao
// =========================

function buscarPorPromocao(idPromocao, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR AS CATEGORIAS DE UMA PROMOÇÃO

    const sql = `
        SELECT *
        FROM Promocao_has_Categoria
        WHERE Promocao_idPromocao = ?
    `;

    conexao.query(sql, [idPromocao], callback);

}

// =========================
// Excluir Relacionamento
// =========================

function excluir(idPromocao, idCategoria, callback) {

    const sql = `
        DELETE FROM Promocao_has_Categoria
        WHERE Promocao_idPromocao = ?
        AND Categorias_idCategoria = ?
    `;

    conexao.query(sql, [idPromocao, idCategoria], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorPromocao,
    excluir

};