const conexao = require("../conexao/conexao.js"); // CONEXÃO COM O BANCO DE DADOS

// =========================
// Cadastrar Cupom
// =========================

function cadastrar(cupom, callback) { // FUNÇÃO QUE EXECUTA O COMANDO INSERT PARA CADASTRAR UM NOVO CUPOM

    const sql = `INSERT INTO Cupom
        ( nome,data_validade,quantidade,desconto,Loja_idLoja )
        VALUES (?, ?, ?, ?, ?)`;

    conexao.query( // EXECUTA O COMANDO INSERT NO BANCO DE DADOS
        sql,
        [
            cupom.nome,
            cupom.data_validade,
            cupom.quantidade,
            cupom.desconto,
            cupom.Loja_idLoja
        ],
        callback
    );

}

// =========================
// Listar Cupons
// =========================

function listar(callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA LISTAR TODOS OS CUPONS

    const sql = `
        SELECT * FROM Cupom
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UM CUPOM PELO ID

    const sql = `
        SELECT *
        FROM Cupom
        WHERE idCupom = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Nome
// =========================

function buscarPorNome(nome, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UM CUPOM PELO NOME

    const sql = `
        SELECT *
        FROM Cupom
        WHERE nome = ?
    `;

    conexao.query(sql, [nome], callback);

}

// =========================
// Atualizar Cupom
// =========================

function atualizar(id, cupom, callback) { // FUNÇÃO QUE EXECUTA O COMANDO UPDATE PARA ATUALIZAR UM CUPOM EXISTENTE

    const sql = `
        UPDATE Cupom
        SET

            nome = ?,
            data_validade = ?,
            quantidade = ?,
            desconto = ?,
            Loja_idLoja = ?

        WHERE idCupom = ?
    `;

    conexao.query( // EXECUTA O COMANDO UPDATE NO BANCO DE DADOS
        sql,
        [
            cupom.nome,
            cupom.data_validade,
            cupom.quantidade,
            cupom.desconto,
            cupom.Loja_idLoja,
            id
        ],
        callback
    );

}

// =========================
// Excluir Cupom
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Cupom
        WHERE idCupom = ?
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