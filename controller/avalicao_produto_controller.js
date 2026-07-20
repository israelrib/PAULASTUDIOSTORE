//==========================================
// IMPORTA O MODEL
//==========================================

const avaliacaoProdutoModel = require("../model/avaliacao_produto_model");

//==========================================
// CADASTRAR AVALIAÇÃO
//==========================================

function cadastrar(req, res) {

    const avaliacao = req.body;

    // Validação dos campos obrigatórios

    if (
        !avaliacao.data ||
        avaliacao.nota == null ||
        !avaliacao.Produto_idProduto
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos obrigatórios."
        });

    }

    // Cadastra a avaliação

    avaliacaoProdutoModel.cadastrar(avaliacao, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao cadastrar avaliação."
            });

        }

        return res.status(201).json({

            sucesso: true,
            mensagem: "Avaliação cadastrada com sucesso!",
            idAvaliacao_Produto: resultado.insertId

        });

    });

}

//==========================================
// LISTAR AVALIAÇÕES
//==========================================

function listar(req, res) {

    avaliacaoProdutoModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar avaliações."
            });

        }

        res.json(resultado);

    });

}

//==========================================
// BUSCAR AVALIAÇÃO POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    avaliacaoProdutoModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar avaliação."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Avaliação não encontrada."
            });

        }

        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR AVALIAÇÃO
//==========================================

function atualizar(req, res) {

    const id = req.params.id;
    const avaliacao = req.body;

    avaliacaoProdutoModel.atualizar(id, avaliacao, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar avaliação."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Avaliação atualizada com sucesso."
        });

    });

}

//==========================================
// EXCLUIR AVALIAÇÃO
//==========================================

function excluir(req, res) {

    const id = req.params.id;

    avaliacaoProdutoModel.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir avaliação."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Avaliação excluída com sucesso."
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