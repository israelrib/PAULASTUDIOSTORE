const conexao = require("../conexao/conexao.js"); // CONEXÃO COM O BANCO DE DADOS

// =========================
// Cadastrar Avaliacao_Produto
// =========================

function cadastrar(avaliacao_produto, callback) { // FUNÇÃO QUE EXECUTA O COMANDO INSERT PARA CADASTRAR UM NOVO CLIENTE

    const sql = `INSERT INTO Avalicao_Produto
        ( data,nota,descricao,Produto_idProduto )
        VALUES (?, ?, ?, ?)`;

    conexao.query( // EXECUTA O COMANDO INSERT NO BANCO DE DADOS
        sql,
        [
            avaliacao_produto.data,
            avaliacao_produto.nota,
            avaliacao_produto.descricao,
            avaliacao_produto.Produto_idProduto
        ],
        callback
    );

}

// =========================
// Listar Avaliacao_Produto
// =========================

function listar(callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA LISTAR TODOS OS CLIENTES

    const sql = `
        SELECT * FROM Avalicao_Produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UM CLIENTE PELO ID

    const sql = `
        SELECT *
        FROM Avalicao_Produto
        WHERE idAvaliacao_Produto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Descricao
// =========================

function buscarPorDescricao(descricao, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UM CLIENTE PELO EMAIL

    const sql = `
        SELECT * FROM Avalicao_Produto
        WHERE descricao = ?
    `;

    conexao.query(sql, [descricao], callback);

}

// =========================
// Atualizar Avaliacao_Produto
// =========================

function atualizar(id, avaliacao_produto, callback) { // FUNÇÃO QUE EXECUTA O COMANDO UPDATE PARA ATUALIZAR UM CLIENTE EXISTENTE

    const sql = `
        UPDATE Avalicao_Produto
        SET

            data = ?,
            nota = ?,
            descricao = ?,
            Produto_idProduto = ?
        WHERE idAvaliacao_Produto = ?
    `;

    conexao.query( // EXECUTA O COMANDO UPDATE NO BANCO DE DADOS
        sql,
        [
            avaliacao_produto.data,
            avaliacao_produto.nota,
            avaliacao_produto.descricao,
            avaliacao_produto.Produto_idProduto
        ],
        callback
    );

}

// =========================
// Excluir Cliente
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Avalicao_Produto
        WHERE idAvaliacao_Produto = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorDescricao,
    atualizar,
    excluir

};