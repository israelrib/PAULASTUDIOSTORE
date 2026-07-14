const conexao = require("../conexao/conexao.js"); // CONEXÃO COM O BANCO DE DADOS

// =========================
// Cadastrar Formas_Pagamento
// =========================

function cadastrar(formas_pagamento, callback) { // FUNÇÃO QUE EXECUTA O COMANDO INSERT PARA CADASTRAR UMA NOVA FORMA DE PAGAMENTO

    const sql = `INSERT INTO Formas_Pagamento
        ( nome,link,ativo )
        VALUES (?, ?, ?)`;

    conexao.query( // EXECUTA O COMANDO INSERT NO BANCO DE DADOS
        sql,
        [
            formas_pagamento.nome,
            formas_pagamento.link,
            formas_pagamento.ativo
        ],
        callback
    );

}

// =========================
// Listar Formas de Pagamento
// =========================

function listar(callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA LISTAR TODAS AS FORMAS DE PAGAMENTO

    const sql = `
        SELECT * FROM Formas_Pagamento
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UMA FORMA DE PAGAMENTO PELO ID

    const sql = `
        SELECT *
        FROM Formas_Pagamento
        WHERE idFormas_Pagamento = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Nome
// =========================

function buscarPorNome(nome, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UMA FORMA DE PAGAMENTO PELO NOME

    const sql = `
        SELECT *
        FROM Formas_Pagamento
        WHERE nome = ?
    `;

    conexao.query(sql, [nome], callback);

}

// =========================
// Atualizar Formas_Pagamento
// =========================

function atualizar(id, forma_pagamento, callback) { // FUNÇÃO QUE EXECUTA O COMANDO UPDATE PARA ATUALIZAR UMA FORMA DE PAGAMENTO EXISTENTE

    const sql = `
        UPDATE Formas_Pagamento
        SET

            nome = ?,
            link = ?,
            ativo = ?

        WHERE idFormas_Pagamento = ?
    `;

    conexao.query( // EXECUTA O COMANDO UPDATE NO BANCO DE DADOS
        sql,
        [
            formas_pagamento.nome,
            formas_pagamento.link,
            formas_pagamento.ativo,
            id
        ],
        callback
    );

}

// =========================
// Excluir Formas_Pagamento
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Forma_Pagamento
        WHERE idFormas_pagamento = ?
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