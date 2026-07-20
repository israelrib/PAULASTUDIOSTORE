//==========================================
// IMPORTA O MODEL
//==========================================

const coresModel = require("../model/cores_model");

//==========================================
// CADASTRAR COR
//==========================================

function cadastrar(req, res) {

    const cor = req.body;

    // Validação dos campos obrigatórios

    if (
        !cor.nome
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos obrigatórios."
        });

    }

    // Verifica se já existe uma cor com o mesmo nome

    coresModel.buscarPorNome(cor.nome, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao consultar o banco de dados."
            });

        }

        if (resultado.length > 0) {

            return res.status(409).json({
                sucesso: false,
                mensagem: "Cor já cadastrada."
            });

        }

        // Cadastra a cor

        coresModel.cadastrar(cor, (erro, resultado) => {

            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao cadastrar cor."
                });

            }

            return res.status(201).json({

                sucesso: true,
                mensagem: "Cor cadastrada com sucesso!",
                idCores: resultado.insertId

            });

        });

    });

}

//==========================================
// LISTAR CORES
//==========================================

function listar(req, res) {

    coresModel.listar((erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar cores."
            });

        }

        res.json(resultado);

    });

}

//==========================================
// BUSCAR COR POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    coresModel.buscarPorId(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar cor."
            });

        }

        if (resultado.length === 0) {

            return res.status(404).json({
                sucesso: false,
                mensagem: "Cor não encontrada."
            });

        }

        res.json(resultado[0]);

    });

}

//==========================================
// ATUALIZAR COR
//==========================================

function atualizar(req, res) {

    const id = req.params.id;
    const cor = req.body;

    coresModel.atualizar(id, cor, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar cor."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Cor atualizada com sucesso."
        });

    });

}

//==========================================
// EXCLUIR COR
//==========================================

function excluir(req, res) {

    const id = req.params.id;

    coresModel.excluir(id, (erro, resultado) => {

        if (erro) {

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir cor."
            });

        }

        res.json({
            sucesso: true,
            mensagem: "Cor excluída com sucesso."
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