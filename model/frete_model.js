const conexao = require("../conexao/conexao.js"); // CONEXÃO COM O BANCO DE DADOS

// =========================
// Cadastrar Frete
// =========================

function cadastrar(frete, callback) { // FUNÇÃO QUE EXECUTA O COMANDO INSERT PARA CADASTRAR UM NOVO FRETE

    const sql = `INSERT INTO Frete
        ( valor,tipo,bairro,entrega_full,codigo_rastreio,Pedidos_idPedidos,Pedidos_Cliente_idCliente,Pedidos_Endereco_idEndereco )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    conexao.query( // EXECUTA O COMANDO INSERT NO BANCO DE DADOS
        sql,
        [
            frete.valor,
            frete.tipo,
            frete.bairro,
            frete.entrega_full,
            frete.codigo_rastreio,
            frete.Pedidos_idPedidos,
            frete.Pedidos_Cliente_idCliente,
            frete.Pedidos_Endereco_idEndereco
        ],
        callback
    );

}

// =========================
// Listar Fretes
// =========================

function listar(callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA LISTAR TODOS OS FRETES

    const sql = `
        SELECT * FROM Frete
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UM FRETE PELO ID

    const sql = `
        SELECT *
        FROM Frete
        WHERE idFrete = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Código de Rastreio
// =========================

function buscarPorCodigoRastreio(codigo_rastreio, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UM FRETE PELO CÓDIGO DE RASTREIO

    const sql = `
        SELECT *
        FROM Frete
        WHERE codigo_rastreio = ?
    `;

    conexao.query(sql, [codigo_rastreio], callback);

}

// =========================
// Atualizar Frete
// =========================

function atualizar(id, frete, callback) { // FUNÇÃO QUE EXECUTA O COMANDO UPDATE PARA ATUALIZAR UM FRETE EXISTENTE

    const sql = `
        UPDATE Frete
        SET

            valor = ?,
            tipo = ?,
            bairro = ?,
            entrega_full = ?,
            codigo_rastreio = ?,
            Pedidos_idPedidos = ?,
            Pedidos_Cliente_idCliente = ?,
            Pedidos_Endereco_idEndereco = ?

        WHERE idFrete = ?
    `;

    conexao.query( // EXECUTA O COMANDO UPDATE NO BANCO DE DADOS
        sql,
        [
            frete.valor,
            frete.tipo,
            frete.bairro,
            frete.entrega_full,
            frete.codigo_rastreio,
            frete.Pedidos_idPedidos,
            frete.Pedidos_Cliente_idCliente,
            frete.Pedidos_Endereco_idEndereco,
            id
        ],
        callback
    );

}

// =========================
// Excluir Frete
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Frete
        WHERE idFrete = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorCodigoRastreio,
    atualizar,
    excluir

};