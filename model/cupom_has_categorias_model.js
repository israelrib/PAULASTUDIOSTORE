const conexao = require("../conexao/conexao.js");

//==========================================
// CADASTRAR RELACIONAMENTO
//==========================================

function cadastrar(dados, callback) {

    const sql = `
        INSERT INTO Cupom_has_Categorias
        (
            Cupom_idCupom,
            Categorias_idCategoria
        )
        VALUES (?, ?)
    `;

    conexao.query(
        sql,
        [
            dados.Cupom_idCupom,
            dados.Categorias_idCategoria
        ],
        callback
    );

}

//==========================================
// LISTAR RELACIONAMENTOS
//==========================================

function listar(callback) {

    const sql = `
        SELECT *
        FROM Cupom_has_Categorias
    `;

    conexao.query(sql, callback);

}

//==========================================
// BUSCAR RELACIONAMENTO
//==========================================

function buscarPorId(cupom, categoria, callback) {

    const sql = `
        SELECT *
        FROM Cupom_has_Categorias
        WHERE Cupom_idCupom = ?
        AND Categorias_idCategoria = ?
    `;

    conexao.query(
        sql,
        [
            cupom,
            categoria
        ],
        callback
    );

}

//==========================================
// ATUALIZAR RELACIONAMENTO
//==========================================

function atualizar(cupom, categoria, dados, callback) {

    const sql = `
        UPDATE Cupom_has_Categorias
        SET
            Cupom_idCupom = ?,
            Categorias_idCategoria = ?
        WHERE Cupom_idCupom = ?
        AND Categorias_idCategoria = ?
    `;

    conexao.query(
        sql,
        [
            dados.Cupom_idCupom,
            dados.Categorias_idCategoria,
            cupom,
            categoria
        ],
        callback
    );

}

//==========================================
// EXCLUIR RELACIONAMENTO
//==========================================

function excluir(cupom, categoria, callback) {

    const sql = `
        DELETE FROM Cupom_has_Categorias
        WHERE Cupom_idCupom = ?
        AND Categorias_idCategoria = ?
    `;

    conexao.query(
        sql,
        [
            cupom,
            categoria
        ],
        callback
    );

}

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir

};