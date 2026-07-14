const conexao = require("../conexao/conexao.js"); // CONEXÃO COM O BANCO DE DADOS

// =========================
// Cadastrar Tamanho
// =========================

function cadastrar(tamanho, callback) { // FUNÇÃO QUE EXECUTA O COMANDO INSERT PARA CADASTRAR UM NOVO TAMANHO

    const sql = `INSERT INTO Tamanho
        ( tamanho,imagem )
        VALUES (?, ?)`;

    conexao.query( // EXECUTA O COMANDO INSERT NO BANCO DE DADOS
        sql,
        [
            tamanho.tamanho,
            tamanho.imagem
        ],
        callback
    );

}

// =========================
// Listar Tamanhos
// =========================

function listar(callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA LISTAR TODOS OS TAMANHOS

    const sql = `
        SELECT * FROM Tamanho
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UM TAMANHO PELO ID

    const sql = `
        SELECT *
        FROM Tamanho
        WHERE idTamanho = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Tamanho
// =========================

function buscarPorTamanho(valor, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UM TAMANHO

    const sql = `
        SELECT *
        FROM Tamanho
        WHERE tamanho = ?
    `;

    conexao.query(sql, [valor], callback);

}

// =========================
// Atualizar Tamanho
// =========================

function atualizar(id, tamanho, callback) { // FUNÇÃO QUE EXECUTA O COMANDO UPDATE PARA ATUALIZAR UM TAMANHO EXISTENTE

    const sql = `
        UPDATE Tamanho
        SET

            tamanho = ?,
            imagem = ?

        WHERE idTamanho = ?
    `;

    conexao.query( // EXECUTA O COMANDO UPDATE NO BANCO DE DADOS
        sql,
        [
            tamanho.tamanho,
            tamanho.imagem,
            id
        ],
        callback
    );

}

// =========================
// Excluir Tamanho
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Tamanho
        WHERE idTamanho = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorTamanho,
    atualizar,
    excluir

};