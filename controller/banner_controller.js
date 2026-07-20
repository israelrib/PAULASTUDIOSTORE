//==========================================
// IMPORTA O MODEL
//==========================================

const bannerModel = require("../model/banner_model");

//==========================================
// CADASTRAR BANNER
//==========================================

function cadastrar(req, res) {

    const banner = req.body;

    // Validação dos campos obrigatórios

    if (
        !banner.data_inicio ||
        !banner.data_final ||
        !banner.Loja_idLoja
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos obrigatórios."
        });

    }

    // Caso não seja enviada a loja

    if (!banner.Loja_idLoja) {

        banner.Loja_idLoja = 1;

    }

    // Cadastra o banner

    bannerModel.cadastrar(banner, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao cadastrar banner."
            });

        }

        return res.status(201).json({

            sucesso: true,
            mensagem: "Banner cadastrado com sucesso!",
            idBanner: resultado.insertId

        });

    });

}

//==========================================
// LISTAR BANNERS
//==========================================

function listar(req, res) {

    bannerModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar banners."
            });

        }

        res.json(resultado);

    });

}

//==========================================
// BUSCAR BANNER POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    bannerModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar banner."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Banner não encontrado."
            });

        }

        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR BANNER
//==========================================

function atualizar(req, res) {

    const id = req.params.id;
    const banner = req.body;

    bannerModel.atualizar(id, banner, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar banner."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Banner atualizado com sucesso."
        });

    });

}

//==========================================
// EXCLUIR BANNER
//==========================================

function excluir(req, res) {

    const id = req.params.id;

    bannerModel.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir banner."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Banner excluído com sucesso."
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