const conexao = require("../conexao/conexao.js"); // CONEXÃO COM O BANCO DE DADOS

// =========================
// Cadastrar Cor
// =========================

function cadastrar(cor, callback) { // FUNÇÃO QUE EXECUTA O COMANDO INSERT PARA CADASTRAR UMA NOVA COR

    const sql = `INSERT INTO Cores
        ( nome,codigo_cor )
        VALUES (?, ?)`;

    conexao.query( // EXECUTA O COMANDO INSERT NO BANCO DE DADOS
        sql,
        [
            cor.nome,
            cor.codigo_cor
        ],
        callback
    );

}

// =========================
// Listar Cores
// =========================

function listar(callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA LISTAR TODAS AS CORES

    const sql = `
        SELECT * FROM Cores
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UMA COR PELO ID

    const sql = `
        SELECT *
        FROM Cores
        WHERE idCores = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Nome
// =========================

function buscarPorNome(nome, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UMA COR PELO NOME

    const sql = `
        SELECT *
        FROM Cores
        WHERE nome = ?
    `;

    conexao.query(sql, [nome], callback);

}

// =========================
// Atualizar Cor
// =========================

function atualizar(id, cor, callback) { // FUNÇÃO QUE EXECUTA O COMANDO UPDATE PARA ATUALIZAR UMA COR EXISTENTE

    const sql = `
        UPDATE Cores
        SET

            nome = ?,
            codigo_cor = ?

        WHERE idCores = ?
    `;

    conexao.query( // EXECUTA O COMANDO UPDATE NO BANCO DE DADOS
        sql,
        [
            cor.nome,
            cor.codigo_cor,
            id
        ],
        callback
    );

}

// =========================
// Excluir Cor
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Cores
        WHERE idCores = ?
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