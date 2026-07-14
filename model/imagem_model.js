const conexao = require("../conexao/conexao.js"); // CONEXÃO COM O BANCO DE DADOS

// =========================
// Cadastrar Imagem
// =========================

function cadastrar(imagem, callback) { // FUNÇÃO QUE EXECUTA O COMANDO INSERT PARA CADASTRAR UMA NOVA IMAGEM

    const sql = `INSERT INTO Imagem
        ( arquivo,Produto_idProduto )
        VALUES (?, ?)`;

    conexao.query( // EXECUTA O COMANDO INSERT NO BANCO DE DADOS
        sql,
        [
            imagem.arquivo,
            imagem.Produto_idProduto
        ],
        callback
    );

}

// =========================
// Listar Imagens
// =========================

function listar(callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA LISTAR TODAS AS IMAGENS

    const sql = `
        SELECT * FROM Imagem
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UMA IMAGEM PELO ID

    const sql = `
        SELECT *
        FROM Imagem
        WHERE idImagem_Produto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Produto
// =========================

function buscarPorProduto(idProduto, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR AS IMAGENS DE UM PRODUTO

    const sql = `
        SELECT *
        FROM Imagem
        WHERE Produto_idProduto = ?
    `;

    conexao.query(sql, [idProduto], callback);

}

// =========================
// Atualizar Imagem
// =========================

function atualizar(id, imagem, callback) { // FUNÇÃO QUE EXECUTA O COMANDO UPDATE PARA ATUALIZAR UMA IMAGEM EXISTENTE

    const sql = `
        UPDATE Imagem
        SET

            arquivo = ?,
            Produto_idProduto = ?

        WHERE idImagem_Produto = ?
    `;

    conexao.query( // EXECUTA O COMANDO UPDATE NO BANCO DE DADOS
        sql,
        [
            imagem.arquivo,
            imagem.Produto_idProduto,
            id
        ],
        callback
    );

}

// =========================
// Excluir Imagem
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Imagem
        WHERE idImagem_Produto = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorProduto,
    atualizar,
    excluir

};