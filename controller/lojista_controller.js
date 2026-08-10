//==========================================
// IMPORTA O MODEL
//==========================================

const lojistaModel =
    require("../model/lojista_model.js");


//==========================================
// CADASTRAR LOJISTA
//==========================================

function cadastrar(req, res) {

    const lojista = req.body;


    //==========================================
    // VALIDA CAMPOS OBRIGATÓRIOS
    //==========================================

    if (
        !lojista.nome ||
        !lojista.cpf ||
        !lojista.cnpj ||
        !lojista.email ||
        !lojista.senha
    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Preencha todos os campos obrigatórios."

        });

    }


    //==========================================
    // VALIDA TAMANHO DA SENHA
    //==========================================

    if (
        lojista.senha.length < 8
    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "A senha deve possuir pelo menos 8 caracteres."

        });

    }


    if (
        lojista.senha.length > 13
    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "A senha deve possuir no máximo 13 caracteres."

        });

    }


    //==========================================
    // VERIFICA EMAIL DUPLICADO
    //==========================================

    lojistaModel.buscarPorEmail(
        lojista.email,
        (erro, resultadoEmail) => {

            if (erro) {

                console.error(
                    "Erro ao verificar e-mail:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao consultar o banco de dados."

                });

            }


            if (
                resultadoEmail.length > 0
            ) {

                return res.status(409).json({

                    sucesso: false,

                    mensagem:
                        "E-mail já cadastrado."

                });

            }


            //==========================================
            // VERIFICA CPF DUPLICADO
            //==========================================

            lojistaModel.buscarPorCpf(
                lojista.cpf,
                (erro, resultadoCpf) => {

                    if (erro) {

                        console.error(
                            "Erro ao verificar CPF:",
                            erro
                        );

                        return res.status(500).json({

                            sucesso: false,

                            mensagem:
                                "Erro ao consultar o banco de dados."

                        });

                    }


                    if (
                        resultadoCpf.length > 0
                    ) {

                        return res.status(409).json({

                            sucesso: false,

                            mensagem:
                                "CPF já cadastrado."

                        });

                    }


                    //==========================================
                    // VERIFICA CNPJ DUPLICADO
                    //==========================================

                    lojistaModel.buscarPorCnpj(
                        lojista.cnpj,
                        (erro, resultadoCnpj) => {

                            if (erro) {

                                console.error(
                                    "Erro ao verificar CNPJ:",
                                    erro
                                );

                                return res.status(500).json({

                                    sucesso: false,

                                    mensagem:
                                        "Erro ao consultar o banco de dados."

                                });

                            }


                            if (
                                resultadoCnpj.length > 0
                            ) {

                                return res.status(409).json({

                                    sucesso: false,

                                    mensagem:
                                        "CNPJ já cadastrado."

                                });

                            }


                            //==========================================
                            // CADASTRA LOJISTA
                            //==========================================

                            lojistaModel.cadastrar(
                                lojista,
                                (erro, resultado) => {

                                    if (erro) {

                                        console.error(
                                            "Erro ao cadastrar lojista:",
                                            erro
                                        );

                                        return res.status(500).json({

                                            sucesso: false,

                                            mensagem:
                                                erro.sqlMessage ||
                                                "Erro ao cadastrar lojista."

                                        });

                                    }


                                    return res.status(201).json({

                                        sucesso: true,

                                        mensagem:
                                            "Lojista cadastrado com sucesso!",

                                        idLojista:
                                            resultado.insertId

                                    });

                                }
                            );

                        }
                    );

                }
            );

        }
    );

}


//==========================================
// LOGIN DO LOJISTA
//==========================================

function login(req, res) {

    const {
        email,
        senha
    } = req.body;


    //==========================================
    // VALIDA CAMPOS
    //==========================================

    if (
        !email ||
        !senha
    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Informe e-mail e senha."

        });

    }


    //==========================================
    // BUSCA LOJISTA PELO EMAIL
    //==========================================

    lojistaModel.buscarPorEmail(
        email,
        (erro, resultado) => {

            if (erro) {

                console.error(
                    "Erro ao realizar login:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao consultar o banco de dados."

                });

            }


            if (
                resultado.length === 0
            ) {

                return res.status(401).json({

                    sucesso: false,

                    mensagem:
                        "E-mail ou senha inválidos."

                });

            }


            const lojista =
                resultado[0];


            //==========================================
            // COMPARA A SENHA
            //==========================================
            // Neste momento estamos seguindo
            // a estrutura atual do seu projeto,
            // onde a senha é comparada diretamente.
            //==========================================

            if (
                lojista.senha !== senha
            ) {

                return res.status(401).json({

                    sucesso: false,

                    mensagem:
                        "E-mail ou senha inválidos."

                });

            }


            //==========================================
            // REMOVE SENHA DA RESPOSTA
            //==========================================

            const lojistaLogado = {

                idLojista:
                    lojista.idLojista,

                nome:
                    lojista.nome,

                cpf:
                    lojista.cpf,

                cnpj:
                    lojista.cnpj,

                email:
                    lojista.email,

                telefone:
                    lojista.telefone

            };


            //==========================================
            // LOGIN COM SUCESSO
            //==========================================

            return res.status(200).json({

                sucesso: true,

                mensagem:
                    "Login realizado com sucesso!",

                lojista:
                    lojistaLogado

            });

        }
    );

}


//==========================================
// LISTAR LOJISTAS
//==========================================

function listar(req, res) {

    lojistaModel.listar(
        (erro, resultado) => {

            if (erro) {

                console.error(
                    "Erro ao listar lojistas:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao listar lojistas."

                });

            }


            // Remove a senha antes
            // de devolver os dados

            const lojistas =
                resultado.map(
                    (lojista) => {

                        return {

                            idLojista:
                                lojista.idLojista,

                            nome:
                                lojista.nome,

                            cpf:
                                lojista.cpf,

                            cnpj:
                                lojista.cnpj,

                            email:
                                lojista.email,

                            telefone:
                                lojista.telefone

                        };

                    }
                );


            return res.status(200).json(
                lojistas
            );

        }
    );

}


//==========================================
// BUSCAR LOJISTA POR ID
//==========================================

function buscarPorId(req, res) {

    const id =
        req.params.id;


    lojistaModel.buscarPorId(
        id,
        (erro, resultado) => {

            if (erro) {

                console.error(
                    "Erro ao buscar lojista:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        "Erro ao buscar lojista."

                });

            }


            if (
                resultado.length === 0
            ) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem:
                        "Lojista não encontrado."

                });

            }


            const lojista =
                resultado[0];


            return res.status(200).json({

                idLojista:
                    lojista.idLojista,

                nome:
                    lojista.nome,

                cpf:
                    lojista.cpf,

                cnpj:
                    lojista.cnpj,

                email:
                    lojista.email,

                telefone:
                    lojista.telefone

            });

        }
    );

}


//==========================================
// ATUALIZAR LOJISTA
//==========================================

function atualizar(req, res) {

    const id =
        req.params.id;

    const lojista =
        req.body;


    if (
        !lojista.nome ||
        !lojista.cpf ||
        !lojista.cnpj ||
        !lojista.email ||
        !lojista.senha
    ) {

        return res.status(400).json({

            sucesso: false,

            mensagem:
                "Preencha todos os campos obrigatórios."

        });

    }


    lojistaModel.atualizar(
        id,
        lojista,
        (erro, resultado) => {

            if (erro) {

                console.error(
                    "Erro ao atualizar lojista:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        erro.sqlMessage ||
                        "Erro ao atualizar lojista."

                });

            }


            if (
                resultado.affectedRows === 0
            ) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem:
                        "Lojista não encontrado."

                });

            }


            return res.status(200).json({

                sucesso: true,

                mensagem:
                    "Lojista atualizado com sucesso."

            });

        }
    );

}


//==========================================
// EXCLUIR LOJISTA
//==========================================

function excluir(req, res) {

    const id =
        req.params.id;


    lojistaModel.excluir(
        id,
        (erro, resultado) => {

            if (erro) {

                console.error(
                    "Erro ao excluir lojista:",
                    erro
                );

                return res.status(500).json({

                    sucesso: false,

                    mensagem:
                        erro.sqlMessage ||
                        "Erro ao excluir lojista."

                });

            }


            if (
                resultado.affectedRows === 0
            ) {

                return res.status(404).json({

                    sucesso: false,

                    mensagem:
                        "Lojista não encontrado."

                });

            }


            return res.status(200).json({

                sucesso: true,

                mensagem:
                    "Lojista excluído com sucesso."

            });

        }
    );

}


//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = {

    cadastrar,

    login,

    listar,

    buscarPorId,

    atualizar,

    excluir

};