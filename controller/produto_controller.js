//==========================================
// IMPORTA O MODEL
//==========================================

const produtoModel = require("../model/produto_model");

//==========================================
// CADASTRAR PRODUTO
//==========================================

function cadastrar(req, res) {

    const produto = req.body;

    // Validação dos campos obrigatórios

    if (
        !produto.nome ||
        !produto.codigo ||
        produto.preco_antigo == null ||
        produto.preco_promocional == null ||
        produto.quantidade_estoque == null
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos obrigatórios."
        });

    }

    // Caso não seja enviada a loja

    if (!produto.Loja_idLoja) {

        produto.Loja_idLoja = 1;

    }

    // Verifica se já existe um produto com o mesmo código

    produtoModel.buscarPorCodigo(produto.codigo, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao consultar o banco de dados."
            });

        }

        if (resultado.length > 0) {

            return res.status(409).json({
                sucesso: false,
                mensagem: "Código do produto já cadastrado."
            });

        }

        // Cadastra o produto

        produtoModel.cadastrar(produto, (erro, resultado) => {

            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar produto."
                });

            }

            return res.status(201).json({

                sucesso: true,
                mensagem: "Produto cadastrado com sucesso!",
                idProduto: resultado.insertId

            });

        });

    });

}

//==========================================
// LISTAR PRODUTOS
//==========================================

function listar(req, res) {

    produtoModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar produtos."
            });

        }

        res.json(resultado);

    });

}

//==========================================
// BUSCAR PRODUTO POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    produtoModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar produto."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Produto não encontrado."
            });

        }

        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR PRODUTO
//==========================================

function atualizar(req, res) {

    const id = req.params.id;
    const produto = req.body;

    produtoModel.atualizar(id, produto, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar produto."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Produto atualizado com sucesso."
        });

    });

}

//==========================================
// EXCLUIR PRODUTO
//==========================================

function excluir(req, res) {

    const id = req.params.id;

    produtoModel.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir produto."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Produto excluído com sucesso."
        });

    });

}

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = {

    cadastrar,
    listar,
    buscarPorId,
    atualizar,
    excluir

};