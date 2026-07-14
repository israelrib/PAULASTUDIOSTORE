const conexao = require("../conexao/conexao.js"); // CONEXÃO COM O BANCO DE DADOS

// =========================
// Cadastrar Produto_has_Cores
// =========================

function cadastrar(produto_cores, callback) { // FUNÇÃO QUE EXECUTA O COMANDO INSERT PARA CADASTRAR UM NOVO RELACIONAMENTO

    const sql = `INSERT INTO Produto_has_Cores
        ( Produto_idProduto,Cores_idCores )
        VALUES (?, ?)`;

    conexao.query(
        sql,
        [
            produto_cores.Produto_idProduto,
            produto_cores.Cores_idCores
        ],
        callback
    );

}

// =========================
// Listar Relacionamentos
// =========================

function listar(callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA LISTAR TODOS OS RELACIONAMENTOS

    const sql = `
        SELECT * FROM Produto_has_Cores
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por Produto
// =========================

function buscarPorProduto(idProduto, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR AS CORES DE UM PRODUTO

    const sql = `
        SELECT *
        FROM Produto_has_Cores
        WHERE Produto_idProduto = ?
    `;

    conexao.query(sql, [idProduto], callback);

}

// =========================
// Excluir Relacionamento
// =========================

function excluir(idProduto, idCor, callback) {

    const sql = `
        DELETE FROM Produto_has_Cores
        WHERE Produto_idProduto = ?
        AND Cores_idCores = ?
    `;

    conexao.query(sql, [idProduto, idCor], callback);

}

module.exports = {

    cadastrar,
    listar,
    buscarPorProduto,
    excluir

};