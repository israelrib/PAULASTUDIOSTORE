//==========================================
// IMPORTA O MODEL
//==========================================

const carrinhoModel = require("../model/carrinho_model");

//==========================================
// CADASTRAR CARRINHO
//==========================================

function cadastrar(req, res) {

    const carrinho = req.body;

    // Validação dos campos obrigatórios

    if (
        carrinho.quantidade_produto == null ||
        carrinho.preco_total == null ||
        !carrinho.Cliente_idCliente
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos obrigatórios."
        });

    }

    // Cadastra o carrinho

    carrinhoModel.cadastrar(carrinho, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao cadastrar carrinho."
            });

        }

        return res.status(201).json({

            sucesso: true,
            mensagem: "Carrinho cadastrado com sucesso!",
            idCarrinho: resultado.insertId

        });

    });

}

//==========================================
// LISTAR CARRINHOS
//==========================================

function listar(req, res) {

    carrinhoModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar carrinhos."
            });

        }

        res.json(resultado);

    });

}

//==========================================
// BUSCAR CARRINHO POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    carrinhoModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar carrinho."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Carrinho não encontrado."
            });

        }

        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR CARRINHO
//==========================================

function atualizar(req, res) {

    const id = req.params.id;
    const carrinho = req.body;

    carrinhoModel.atualizar(id, carrinho, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar carrinho."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Carrinho atualizado com sucesso."
        });

    });

}

//==========================================
// EXCLUIR CARRINHO
//==========================================

function excluir(req, res) {

    const id = req.params.id;

    carrinhoModel.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir carrinho."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Carrinho excluído com sucesso."
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