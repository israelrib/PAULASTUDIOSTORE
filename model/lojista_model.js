//==========================================
// CONEXÃO COM O BANCO DE DADOS
//==========================================

const conexao =
    require("../conexao/conexao.js");


//==========================================
// CADASTRAR LOJISTA
//==========================================

function cadastrar(lojista, callback) {

    const sql = `
        INSERT INTO lojista (
            nome,
            cpf,
            cnpj,
            email,
            senha,
            telefone
        )
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    conexao.query(
        sql,
        [
            lojista.nome,
            lojista.cpf,
            lojista.cnpj,
            lojista.email,
            lojista.senha,
            lojista.telefone || null
        ],
        callback
    );
}


//==========================================
// LISTAR LOJISTAS
//==========================================

function listar(callback) {

    const sql = `
        SELECT *
        FROM lojista
    `;

    conexao.query(
        sql,
        callback
    );
}


//==========================================
// BUSCAR LOJISTA POR ID
//==========================================

function buscarPorId(id, callback) {

    const sql = `
        SELECT *
        FROM lojista
        WHERE idLojista = ?
    `;

    conexao.query(
        sql,
        [id],
        callback
    );
}


//==========================================
// BUSCAR LOJISTA POR EMAIL
//==========================================

function buscarPorEmail(email, callback) {

    const sql = `
        SELECT *
        FROM lojista
        WHERE email = ?
    `;

    conexao.query(
        sql,
        [email],
        callback
    );
}


//==========================================
// BUSCAR LOJISTA POR CPF
//==========================================

function buscarPorCpf(cpf, callback) {

    const sql = `
        SELECT *
        FROM lojista
        WHERE cpf = ?
    `;

    conexao.query(
        sql,
        [cpf],
        callback
    );
}


//==========================================
// BUSCAR LOJISTA POR CNPJ
//==========================================

function buscarPorCnpj(cnpj, callback) {

    const sql = `
        SELECT *
        FROM lojista
        WHERE cnpj = ?
    `;

    conexao.query(
        sql,
        [cnpj],
        callback
    );
}


//==========================================
// ATUALIZAR LOJISTA
//==========================================

function atualizar(id, lojista, callback) {

    const sql = `
        UPDATE lojista
        SET
            nome = ?,
            cpf = ?,
            cnpj = ?,
            email = ?,
            senha = ?,
            telefone = ?
        WHERE idLojista = ?
    `;

    conexao.query(
        sql,
        [
            lojista.nome,
            lojista.cpf,
            lojista.cnpj,
            lojista.email,
            lojista.senha,
            lojista.telefone || null,
            id
        ],
        callback
    );
}


//==========================================
// EXCLUIR LOJISTA
//==========================================

function excluir(id, callback) {

    const sql = `
        DELETE FROM lojista
        WHERE idLojista = ?
    `;

    conexao.query(
        sql,
        [id],
        callback
    );
}


//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorEmail,
    buscarPorCpf,
    buscarPorCnpj,
    atualizar,
    excluir

};