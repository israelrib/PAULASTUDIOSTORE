const conexao = require("../conexao/conexao.js"); // CONEXÃO COM O BANCO DE DADOS

// =========================
// Cadastrar Banner
// =========================

function cadastrar(banner, callback) { // FUNÇÃO QUE EXECUTA O COMANDO INSERT PARA CADASTRAR UM NOVO BANNER

    const sql = `INSERT INTO Banner
        ( imagem,data_inicio,data_final,status_visibilidade,Loja_idLoja )
        VALUES (?, ?, ?, ?, ?)`;

    conexao.query( // EXECUTA O COMANDO INSERT NO BANCO DE DADOS
        sql,
        [
            banner.imagem,
            banner.data_inicio,
            banner.data_final,
            banner.status_visibilidade,
            banner.Loja_idLoja
        ],
        callback
    );

}

// =========================
// Listar Banners
// =========================

function listar(callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA LISTAR TODOS OS BANNERS

    const sql = `
        SELECT * FROM Banner
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UM BANNER PELO ID

    const sql = `
        SELECT *
        FROM Banner
        WHERE idBanner = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Status
// =========================

function buscarPorStatus(status, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR BANNERS PELO STATUS DE VISIBILIDADE

    const sql = `
        SELECT *
        FROM Banner
        WHERE status_visibilidade = ?
    `;

    conexao.query(sql, [status], callback);

}

// =========================
// Atualizar Banner
// =========================

function atualizar(id, banner, callback) { // FUNÇÃO QUE EXECUTA O COMANDO UPDATE PARA ATUALIZAR UM BANNER EXISTENTE

    const sql = `
        UPDATE Banner
        SET

            imagem = ?,
            data_inicio = ?,
            data_final = ?,
            status_visibilidade = ?,
            Loja_idLoja = ?

        WHERE idBanner = ?
    `;

    conexao.query( // EXECUTA O COMANDO UPDATE NO BANCO DE DADOS
        sql,
        [
            banner.imagem,
            banner.data_inicio,
            banner.data_final,
            banner.status_visibilidade,
            banner.Loja_idLoja,
            id
        ],
        callback
    );

}

// =========================
// Excluir Banner
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Banner
        WHERE idBanner = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorStatus,
    atualizar,
    excluir

};