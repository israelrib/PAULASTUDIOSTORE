const conexao = require("../conexao/conexao.js"); // CONEXÃO COM O BANCO DE DADOS

// =========================
// Cadastrar Endereco
// =========================

function cadastrar(endereco, callback) { // FUNÇÃO QUE EXECUTA O COMANDO INSERT PARA CADASTRAR UM NOVO ENDEREÇO

    const sql = `INSERT INTO Endereco
        ( rua,cep,bairro,numero,complemento,tipo )
        VALUES (?, ?, ?, ?, ?, ?)`;

    conexao.query( // EXECUTA O COMANDO INSERT NO BANCO DE DADOS
        sql,
        [
            endereco.rua,
            endereco.cep,
            endereco.bairro,
            endereco.numero,
            endereco.complemento,
            endereco.tipo
        ],
        callback
    );

}

// =========================
// Listar Enderecos
// =========================

function listar(callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA LISTAR TODOS OS ENDEREÇOS

    const sql = `
        SELECT * FROM Endereco
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UM ENDEREÇO PELO ID

    const sql = `
        SELECT *
        FROM Endereco
        WHERE idEndereco = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por CEP
// =========================

function buscarPorCep(cep, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UM ENDEREÇO PELO CEP

    const sql = `
        SELECT *
        FROM Endereco
        WHERE cep = ?
    `;

    conexao.query(sql, [cep], callback);

}

// =========================
// Atualizar Endereco
// =========================

function atualizar(id, endereco, callback) { // FUNÇÃO QUE EXECUTA O COMANDO UPDATE PARA ATUALIZAR UM ENDEREÇO EXISTENTE

    const sql = `
        UPDATE Endereco
        SET

            rua = ?,
            cep = ?,
            bairro = ?,
            numero = ?,
            complemento = ?,
            tipo = ?

        WHERE idEndereco = ?
    `;

    conexao.query( // EXECUTA O COMANDO UPDATE NO BANCO DE DADOS
        sql,
        [
            endereco.rua,
            endereco.cep,
            endereco.bairro,
            endereco.numero,
            endereco.complemento,
            endereco.tipo,
            id
        ],
        callback
    );

}

// =========================
// Excluir Endereco
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Endereco
        WHERE idEndereco = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorCep,
    atualizar,
    excluir

};