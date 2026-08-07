const conexao = require("../conexao/conexao.js"); // CONEXÃO COM O BANCO DE DADOS

// =========================
// Cadastrar Marca
// =========================

function cadastrar(marca, callback) {

    const sql = `
        INSERT INTO Marca (
            nome,
            logo
        )
        VALUES (?, ?)
    `;

    conexao.query(
        sql,
        [
            marca.nome,
            marca.logo || null
        ],
        callback
    );
}

// =========================
// Listar Marcas
// =========================

function listar(callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA LISTAR TODAS AS MARCAS

    const sql = `
        SELECT * FROM Marca
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UMA MARCA PELO ID

    const sql = `
        SELECT *
        FROM Marca
        WHERE idMarca = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Nome
// =========================

function buscarPorNome(nome, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UMA MARCA PELO NOME

    const sql = `
        SELECT *
        FROM Marca
        WHERE nome = ?
    `;

    conexao.query(sql, [nome], callback);

}

// =========================
// Atualizar Marca
// =========================

function atualizar(id, marca, callback) {

    // Se uma nova logo foi enviada
    if (marca.logo) {

        const sql = `
            UPDATE Marca
            SET
                nome = ?,
                logo = ?
            WHERE idMarca = ?
        `;

        conexao.query(
            sql,
            [
                marca.nome,
                marca.logo,
                id
            ],
            callback
        );

    } else {

        // Se nenhuma nova logo foi enviada,
        // mantém a logo antiga
        const sql = `
            UPDATE Marca
            SET
                nome = ?
            WHERE idMarca = ?
        `;

        conexao.query(
            sql,
            [
                marca.nome,
                id
            ],
            callback
        );
    }
}

// =========================
// Excluir Marca
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Marca
        WHERE idMarca = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorNome,
    atualizar,
    excluir

};