const conexao = require("../conexao/conexao.js"); // CONEXÃO COM O BANCO DE DADOS

// =========================
// Cadastrar Marca
// =========================

function cadastrar(marca, callback) { // FUNÇÃO QUE EXECUTA O COMANDO INSERT PARA CADASTRAR UMA NOVA MARCA

    const sql = `INSERT INTO Marca
        ( nome,logo )
        VALUES (?, ?)`;

    conexao.query( // EXECUTA O COMANDO INSERT NO BANCO DE DADOS
        sql,
        [
            marca.nome,
            marca.logo
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

function atualizar(id, marca, callback) { // FUNÇÃO QUE EXECUTA O COMANDO UPDATE PARA ATUALIZAR UMA MARCA EXISTENTE

    const sql = `
        UPDATE Marca
        SET

            nome = ?,
            logo = ?

        WHERE idMarca = ?
    `;

    conexao.query( // EXECUTA O COMANDO UPDATE NO BANCO DE DADOS
        sql,
        [
            marca.nome,
            marca.logo,
            id
        ],
        callback
    );

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