const conexao = require("../conexao/conexao.js"); // CONEXÃO COM O BANCO DE DADOS

// =========================
// Cadastrar Produto
// =========================

function cadastrar(produto, callback) { // FUNÇÃO QUE EXECUTA O COMANDO INSERT PARA CADASTRAR UM NOVO PRODUTO

    const sql = `INSERT INTO Produto
        ( nome,descricao,codigo,preco_antigo,preco_promocional,quantidade_estoque,ativo,Loja_idLoja,Marca_idMarca,Categoria_idCategoria )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    conexao.query( // EXECUTA O COMANDO INSERT NO BANCO DE DADOS
        sql,
        [
            produto.nome,
            produto.descricao,
            produto.codigo,
            produto.preco_antigo,
            produto.preco_promocional,
            produto.quantidade_estoque,
            produto.ativo,
            produto.Loja_idLoja,
            produto.Marca_idMarca,
            produto.Categoria_idCategoria
        ],
        callback
    );

}

// =========================
// Listar Produtos
// =========================

function listar(callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA LISTAR TODOS OS PRODUTOS

    const sql = `
        SELECT * FROM Produto
    `;

    conexao.query(sql, callback);

}

// =========================
// Buscar por ID
// =========================

function buscarPorId(id, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UM PRODUTO PELO ID

    const sql = `
        SELECT *
        FROM Produto
        WHERE idProduto = ?
    `;

    conexao.query(sql, [id], callback);

}

// =========================
// Buscar por Nome
// =========================

function buscarPorNome(nome, callback) { // FUNÇÃO QUE EXECUTA O COMANDO SELECT PARA BUSCAR UM PRODUTO PELO NOME

    const sql = `
        SELECT *
        FROM Produto
        WHERE nome = ?
    `;

    conexao.query(sql, [nome], callback);

}

// =========================
// Atualizar Produto
// =========================

function atualizar(id, produto, callback) { // FUNÇÃO QUE EXECUTA O COMANDO UPDATE PARA ATUALIZAR UM PRODUTO EXISTENTE

    const sql = `
        UPDATE Produto
        SET

            nome = ?,
            descricao = ?,
            codigo = ?,
            preco_antigo = ?,
            preco_promocional = ?,
            quantidade_estoque = ?,
            ativo = ?,
            Loja_idLoja = ?,
            Marca_idMarca = ?,
            Categoria_idCategoria = ?

        WHERE idProduto = ?
    `;

    conexao.query( // EXECUTA O COMANDO UPDATE NO BANCO DE DADOS
        sql,
        [
            produto.nome,
            produto.descricao,
            produto.codigo,
            produto.preco_antigo,
            produto.preco_promocional,
            produto.quantidade_estoque,
            produto.ativo,
            produto.Loja_idLoja,
            produto.Marca_idMarca,
            produto.Categoria_idCategoria,
            id
        ],
        callback
    );

}

// =========================
// Excluir Produto
// =========================

function excluir(id, callback) {

    const sql = `
        DELETE FROM Produto
        WHERE idProduto = ?
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