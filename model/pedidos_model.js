const conexao = require("../conexao/conexao.js"); // CONEXÃO COM O BANCO DE DADOS

// =========================
// Cadastrar Pedido
// =========================

function cadastrar(pedido, callback) { // FUNÇÃO QUE EXECUTA O COMANDO INSERT PARA CADASTRAR UM NOVO PEDIDO

    const sql = `INSERT INTO Pedidos
        ( data,nota_fiscal,data_entrega,status_entrega,status_pagamento,codigo,Cliente_idCliente,Loja_idLoja,Endereco_idEndereco,Formas_Pagamento_idFormas_Pagamento )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    conexao.query( // EXECUTA O COMANDO INSERT NO BANCO DE DADOS
        sql,
        [
            pedido.data,
            pedido.nota_fiscal,
            pedido.data_entrega,
            pedido.status_entrega,
            pedido.status_pagamento,
            pedido.codigo,
            pedido.Cliente_idCliente,
            pedido.Loja_idLoja,
            pedido.Endereco_idEndereco,
            pedido.Formas_Pagamento_idFormas_Pagamento
        ],
        callback
    );

}

// =========================
// Listar Pedidos
// =========================

function listar(callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA LISTAR TODOS OS PEDIDOS

    const sql = `
        SELECT * FROM Pedidos
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UM PEDIDO PELO ID

    const sql = `
        SELECT *
        FROM Pedidos
        WHERE idPedidos = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Código
// =========================

function buscarPorCodigo(codigo, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UM PEDIDO PELO CÓDIGO

    const sql = `
        SELECT *
        FROM Pedidos
        WHERE codigo = ?
    `;

    conexao.query(sql, [codigo], callback);

}

// =========================
// Atualizar Pedido
// =========================

function atualizar(id, pedido, callback) { // FUNÇÃO QUE EXECUTA O COMANDO UPDATE PARA ATUALIZAR UM PEDIDO EXISTENTE

    const sql = `
        UPDATE Pedidos
        SET

            data = ?,
            nota_fiscal = ?,
            data_entrega = ?,
            status_entrega = ?,
            status_pagamento = ?,
            codigo = ?,
            Cliente_idCliente = ?,
            Loja_idLoja = ?,
            Endereco_idEndereco = ?,
            Formas_Pagamento_idFormas_Pagamento = ?

        WHERE idPedidos = ?
    `;

    conexao.query( // EXECUTA O COMANDO UPDATE NO BANCO DE DADOS
        sql,
        [
            pedido.data,
            pedido.nota_fiscal,
            pedido.data_entrega,
            pedido.status_entrega,
            pedido.status_pagamento,
            pedido.codigo,
            pedido.Cliente_idCliente,
            pedido.Loja_idLoja,
            pedido.Endereco_idEndereco,
            pedido.Formas_Pagamento_idFormas_Pagamento,
            id
        ],
        callback
    );

}

// =========================
// Excluir Pedido
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Pedidos
        WHERE idPedidos = ?
    `;

    conexao.query(sql, [id], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    buscarPorCodigo,
    atualizar,
    excluir

};