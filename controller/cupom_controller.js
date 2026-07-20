//==========================================
// IMPORTA O MODEL
//==========================================

const cupomModel = require("../model/cupom_model");

//==========================================
// CADASTRAR CUPOM
//==========================================

function cadastrar(req, res) {

    const cupom = req.body;

    // Validação dos campos obrigatórios

    if (
        !cupom.nome ||
        !cupom.data_validade ||
        !cupom.quantidade
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos obrigatórios."
        });

    }

    // Caso não seja enviada a loja

    if (!cupom.Loja_idLoja) {

        cupom.Loja_idLoja = 1;

    }

    // Verifica se já existe um cupom com o mesmo nome

    cupomModel.buscarPorNome(cupom.nome, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao consultar o banco de dados."
            });

        }

        if (resultado.length > 0) {

            return res.status(409).json({
                sucesso: false,
                mensagem: "Cupom já cadastrado."
            });

        }

        // Cadastra o cupom

        cupomModel.cadastrar(cupom, (erro, resultado) => {

            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar cupom."
                });

            }

            return res.status(201).json({

                sucesso: true,
                mensagem: "Cupom cadastrado com sucesso!",
                idCupom: resultado.insertId

            });

        });

    });

}

//==========================================
// LISTAR CUPONS
//==========================================

function listar(req, res) {

    cupomModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar cupons."
            });

        }

        res.json(resultado);

    });

}

//==========================================
// BUSCAR CUPOM POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    cupomModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar cupom."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Cupom não encontrado."
            });

        }

        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR CUPOM
//==========================================

function atualizar(req, res) {

    const id = req.params.id;
    const cupom = req.body;

    cupomModel.atualizar(id, cupom, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar cupom."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Cupom atualizado com sucesso."
        });

    });

}

//==========================================
// EXCLUIR CUPOM
//==========================================

function excluir(req, res) {

    const id = req.params.id;

    cupomModel.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir cupom."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Cupom excluído com sucesso."
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