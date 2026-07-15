//==========================================
// IMPORTA O MODEL
//==========================================

const promocaoModel = require("../model/promocao_model");

//==========================================
// CADASTRAR PROMOÇÃO
//==========================================

function cadastrar(req, res) {

    const promocao = req.body;

    // Validação dos campos obrigatórios

    if (
        !promocao.data_inicio ||
        !promocao.data_final
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos obrigatórios."
        });

    }

    // Cadastra a promoção

    promocaoModel.cadastrar(promocao, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao cadastrar promoção."
            });

        }

        return res.status(201).json({

            sucesso: true,
            mensagem: "Promoção cadastrada com sucesso!",
            idPromocao: resultado.insertId

        });

    });

}

//==========================================
// LISTAR PROMOÇÕES
//==========================================

function listar(req, res) {

    promocaoModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar promoções."
            });

        }

        res.json(resultado);

    });

}

//==========================================
// BUSCAR PROMOÇÃO POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    promocaoModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar promoção."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Promoção não encontrada."
            });

        }

        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR PROMOÇÃO
//==========================================

function atualizar(req, res) {

    const id = req.params.id;
    const promocao = req.body;

    promocaoModel.atualizar(id, promocao, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar promoção."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Promoção atualizada com sucesso."
        });

    });

}

//==========================================
// EXCLUIR PROMOÇÃO
//==========================================

function excluir(req, res) {

    const id = req.params.id;

    promocaoModel.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir promoção."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Promoção excluída com sucesso."
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