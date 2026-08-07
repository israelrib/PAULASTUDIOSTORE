//==========================================
// IMPORTA O MODEL
//==========================================

const marcaModel =
    require("../model/marca_model.js");


//==========================================
// CADASTRAR MARCA
//==========================================

function cadastrar(req, res) {

    const marca = req.body;

    if (
        !marca ||
        !marca.nome ||
        marca.nome.trim() === ""
    ) {

        return res.status(400).json({
            sucesso: false,
            mensagem:
                "Informe o nome da marca."
        });
    }


    marcaModel.buscarPorNome(
        marca.nome,
        (erro, resultado) => {

            if (erro) {

                console.error(
                    "Erro buscarPorNome:",
                    erro
                );

                return res.status(500).json({
                    sucesso: false,
                    mensagem:
                        "Erro ao consultar marca."
                });
            }


            if (resultado.length > 0) {

                return res.status(409).json({
                    sucesso: false,
                    mensagem:
                        "Marca já cadastrada."
                });
            }


            const novaMarca = {

                nome: marca.nome.trim(),

                // Logo ficará nula por enquanto
                logo: null
            };


            marcaModel.cadastrar(
                novaMarca,
                (erro, resultado) => {

                    if (erro) {

                        console.error(
                            "Erro INSERT Marca:",
                            erro
                        );

                        return res.status(500).json({
                            sucesso: false,
                            mensagem:
                                erro.sqlMessage ||
                                "Erro ao cadastrar marca."
                        });
                    }


                    return res.status(201).json({

                        sucesso: true,

                        mensagem:
                            "Marca cadastrada com sucesso!",

                        idMarca:
                            resultado.insertId
                    });
                }
            );
        }
    );
}


//==========================================
// LISTAR
//==========================================

function listar(req, res) {

    marcaModel.listar(
        (erro, resultado) => {

            if (erro) {

                console.error(
                    "Erro ao listar marcas:",
                    erro
                );

                return res.status(500).json({
                    sucesso: false,
                    mensagem:
                        "Erro ao listar marcas."
                });
            }

            return res.status(200).json(
                resultado
            );
        }
    );
}


//==========================================
// BUSCAR POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    marcaModel.buscarPorId(
        id,
        (erro, resultado) => {

            if (erro) {

                return res.status(500).json({
                    sucesso: false,
                    mensagem:
                        "Erro ao buscar marca."
                });
            }


            if (resultado.length === 0) {

                return res.status(404).json({
                    sucesso: false,
                    mensagem:
                        "Marca não encontrada."
                });
            }


            return res.status(200).json(
                resultado[0]
            );
        }
    );
}


// =========================
// Atualizar Marca
// =========================

function atualizar(id, marca, callback) {

    const sql = `
        UPDATE Marca
        SET nome = ?
        WHERE idMarca = ?
    `;

    conexao.query(
        sql,
        [
            marca.nome,
            id
        ],
        callback
    );
}


//==========================================
// EXCLUIR
//==========================================

function excluir(req, res) {

    const id = req.params.id;

    marcaModel.excluir(
        id,
        (erro, resultado) => {

            if (erro) {

                console.error(
                    "Erro ao excluir:",
                    erro
                );

                return res.status(500).json({
                    sucesso: false,
                    mensagem:
                        "Erro ao excluir marca."
                });
            }


            return res.status(200).json({
                sucesso: true,
                mensagem:
                    "Marca excluída com sucesso."
            });
        }
    );
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