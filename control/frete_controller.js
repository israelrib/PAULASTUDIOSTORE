//==========================================
// IMPORTA O MODEL
//==========================================

const freteModel = require("../model/frete_model");

//==========================================
// CADASTRAR FRETE
//==========================================

function cadastrar(req, res) {

    const frete = req.body;

    // Validação dos campos obrigatórios

    if (
        frete.valor == null ||
        !frete.tipo ||
        !frete.Pedidos_idPedidos ||
        !frete.Pedidos_Cliente_idCliente ||
        !frete.Pedidos_Endereco_idEndereco
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos obrigatórios."
        });

    }

    // Cadastra o frete

    freteModel.cadastrar(frete, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao cadastrar frete."
            });

        }

        return res.status(201).json({

            sucesso: true,
            mensagem: "Frete cadastrado com sucesso!",
            idFrete: resultado.insertId

        });

    });

}

//==========================================
// LISTAR FRETES
//==========================================

function listar(req, res) {

    freteModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar fretes."
            });

        }

        res.json(resultado);

    });

}

//==========================================
// BUSCAR FRETE POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    freteModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar frete."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Frete não encontrado."
            });

        }

        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR FRETE
//==========================================

function atualizar(req, res) {

    const id = req.params.id;
    const frete = req.body;

    freteModel.atualizar(id, frete, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar frete."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Frete atualizado com sucesso."
        });

    });

}

//==========================================
// EXCLUIR FRETE
//==========================================

function excluir(req, res) {

    const id = req.params.id;

    freteModel.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir frete."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Frete excluído com sucesso."
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