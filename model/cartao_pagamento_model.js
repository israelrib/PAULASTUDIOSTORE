const conexao = require("../conexao/conexao.js"); // CONEXÃO COM O BANCO DE DADOS

// =========================
// Cadastrar Cartao_Pagamento
// =========================

function cadastrar(cartao_pagamento, callback) { // FUNÇÃO QUE EXECUTA O COMANDO INSERT PARA CADASTRAR UM NOVO CARTÃO DE PAGAMENTO

    const sql = `INSERT INTO Cartao_Pagamento
        ( numero,data_vencimento,cvc,cpf,nome_proprietario,nome_identificacao,bandeira,tipo,ativo,Cliente_idCliente )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    conexao.query( // EXECUTA O COMANDO INSERT NO BANCO DE DADOS
        sql,
        [
            cartao_pagamento.numero,
            cartao_pagamento.data_vencimento,
            cartao_pagamento.cvc,
            cartao_pagamento.cpf,
            cartao_pagamento.nome_proprietario,
            cartao_pagamento.nome_identificacao,
            cartao_pagamento.bandeira,
            cartao_pagamento.tipo,
            cartao_pagamento.ativo,
            cartao_pagamento.Cliente_idCliente
        ],
        callback
    );

}

// =========================
// Listar Cartoes de Pagamento
// =========================

function listar(callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA LISTAR TODOS OS CARTÕES DE PAGAMENTO

    const sql = `
        SELECT * FROM Cartao_Pagamento
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UM CARTÃO DE PAGAMENTO PELO ID

    const sql = `
        SELECT *
        FROM Cartao_Pagamento
        WHERE idCartao_Pagamento = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por CPF
// =========================

function buscarPorCpf(cpf, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UM CARTÃO DE PAGAMENTO PELO CPF

    const sql = `
        SELECT *
        FROM Cartao_Pagamento
        WHERE cpf = ?
    `;

    conexao.query(sql, [cpf], callback);

}

// =========================
// Atualizar Cartao_Pagamento
// =========================

function atualizar(id, cartao_pagamento, callback) { // FUNÇÃO QUE EXECUTA O COMANDO UPDATE PARA ATUALIZAR UM CARTÃO DE PAGAMENTO EXISTENTE

    const sql = `
        UPDATE Cartao_Pagamento
        SET

            numero = ?,
            data_vencimento = ?,
            cvc = ?,
            cpf = ?,
            nome_proprietario = ?,
            nome_identificacao = ?,
            bandeira = ?,
            tipo = ?,
            ativo = ?,
            Cliente_idCliente = ?

        WHERE idCartao_Pagamento = ?
    `;

    conexao.query( // EXECUTA O COMANDO UPDATE NO BANCO DE DADOS
        sql,
        [
            cartao_pagamento.numero,
            cartao_pagamento.data_vencimento,
            cartao_pagamento.cvc,
            cartao_pagamento.cpf,
            cartao_pagamento.nome_proprietario,
            cartao_pagamento.nome_identificacao,
            cartao_pagamento.bandeira,
            cartao_pagamento.tipo,
            cartao_pagamento.ativo,
            cartao_pagamento.Cliente_idCliente,
            id
        ],
        callback
    );

}

// =========================
// Excluir Cartao_Pagamento
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Cartao_Pagamento
        WHERE idCartao_Pagamento = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorCpf,
    atualizar,
    excluir

};