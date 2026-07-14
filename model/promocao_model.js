const conexao = require("../conexao/conexao.js"); // CONEXÃO COM O BANCO DE DADOS

// =========================
// Cadastrar Promocao
// =========================

function cadastrar(promocao, callback) { // FUNÇÃO QUE EXECUTA O COMANDO INSERT PARA CADASTRAR UMA NOVA PROMOÇÃO

    const sql = `INSERT INTO Promocao
        ( data_inicio,data_final,valor_promocao,nome,Banner_idBanner )
        VALUES (?, ?, ?, ?, ?)`;

    conexao.query( // EXECUTA O COMANDO INSERT NO BANCO DE DADOS
        sql,
        [
            promocao.data_inicio,
            promocao.data_final,
            promocao.valor_promocao,
            promocao.nome,
            promocao.Banner_idBanner
        ],
        callback
    );

}

// =========================
// Listar Promocoes
// =========================

function listar(callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA LISTAR TODAS AS PROMOÇÕES

    const sql = `
        SELECT * FROM Promocao
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UMA PROMOÇÃO PELO ID

    const sql = `
        SELECT *
        FROM Promocao
        WHERE idPromocao = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Nome
// =========================

function buscarPorNome(nome, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UMA PROMOÇÃO PELO NOME

    const sql = `
        SELECT *
        FROM Promocao
        WHERE nome = ?
    `;

    conexao.query(sql, [nome], callback);

}

// =========================
// Atualizar Promocao
// =========================

function atualizar(id, promocao, callback) { // FUNÇÃO QUE EXECUTA O COMANDO UPDATE PARA ATUALIZAR UMA PROMOÇÃO EXISTENTE

    const sql = `
        UPDATE Promocao
        SET

            data_inicio = ?,
            data_final = ?,
            valor_promocao = ?,
            nome = ?,
            Banner_idBanner = ?

        WHERE idPromocao = ?
    `;

    conexao.query( // EXECUTA O COMANDO UPDATE NO BANCO DE DADOS
        sql,
        [
            promocao.data_inicio,
            promocao.data_final,
            promocao.valor_promocao,
            promocao.nome,
            promocao.Banner_idBanner,
            id
        ],
        callback
    );

}

// =========================
// Excluir Promocao
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Promocao
        WHERE idPromocao = ?
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