const conexao = require("../conexao/conexao.js"); // CONEXÃO COM O BANCO DE DADOS

// =========================
// Cadastrar Categoria
// =========================

function cadastrar(categoria, callback) { // FUNÇÃO QUE EXECUTA O COMANDO INSERT PARA CADASTRAR UMA NOVA CATEGORIA

    const sql = `INSERT INTO Categorias
        ( nome )
        VALUES (?)`;

    conexao.query( // EXECUTA O COMANDO INSERT NO BANCO DE DADOS
        sql,
        [
            categoria.nome
        ],
        callback
    );

}

// =========================
// Listar Categorias
// =========================

function listar(callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA LISTAR TODAS AS CATEGORIAS

    const sql = `
        SELECT * FROM Categorias
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UMA CATEGORIA PELO ID

    const sql = `
        SELECT *
        FROM Categorias
        WHERE idCategoria = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Nome
// =========================

function buscarPorNome(nome, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UMA CATEGORIA PELO NOME

    const sql = `
        SELECT *
        FROM Categorias
        WHERE nome = ?
    `;

    conexao.query(sql, [nome], callback);

}

// =========================
// Atualizar Categoria
// =========================

function atualizar(id, categoria, callback) { // FUNÇÃO QUE EXECUTA O COMANDO UPDATE PARA ATUALIZAR UMA CATEGORIA EXISTENTE

    const sql = `
        UPDATE Categorias
        SET

            nome = ?

        WHERE idCategoria = ?
    `;

    conexao.query( // EXECUTA O COMANDO UPDATE NO BANCO DE DADOS
        sql,
        [
            categoria.nome,
            id
        ],
        callback
    );

}

// =========================
// Excluir Categoria
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Categorias
        WHERE idCategoria = ?
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