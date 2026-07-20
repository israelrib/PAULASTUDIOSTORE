//==========================================
// IMPORTA O MODEL
//==========================================

const clienteModel = require("../model/cliente_model.js");


//==========================================
// CADASTRAR CLIENTE
//==========================================

function cadastrar(req, res) {

    const cliente = req.body;

    // Define uma loja padrão caso não seja enviada
    if (!cliente.Loja_idLoja) {
        cliente.Loja_idLoja = 1;
    }

   

    // Validação dos campos obrigatórios
    if (
        !cliente.nome ||
        !cliente.email ||
        !cliente.senha
    ) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos obrigatórios."
        });
    }

    // Validação do tamanho da senha
    if (cliente.senha.length < 8) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "A senha deve ter no mínimo 8 caracteres."
        });
    }

    if (cliente.senha.length > 13) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "A senha deve ter no máximo 13 caracteres."
        });
    }

    // Verifica se já existe um cliente com o mesmo e-mail
    clienteModel.buscarPorEmail(
        cliente.email,
        function (erro, resultado) {

            if (erro) {

                console.error(
                    "Erro ao consultar cliente por e-mail:",
                    erro
                );

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao consultar o banco de dados."
                });
            }

            if (resultado.length > 0) {
                return res.status(409).json({
                    sucesso: false,
                    mensagem: "E-mail já cadastrado."
                });
            }

            // Cadastra o cliente
            clienteModel.cadastrar(
                cliente,
                function (erro, resultado) {

                    if (erro) {

                        console.error(
                            "Erro do MySQL ao cadastrar cliente:",
                            erro
                        );

                        return res.status(500).json({
                            sucesso: false,
                            mensagem: "Erro ao cadastrar cliente."
                        });
                    }

                    return res.status(201).json({
                        sucesso: true,
                        mensagem: "Cliente cadastrado com sucesso!",
                        idCliente: resultado.insertId
                    });
                }
            );
        }
    );
}


//==========================================
// LISTAR CLIENTES
//==========================================

function listar(req, res) {

    clienteModel.listar(function (erro, resultado) {

        if (erro) {

            console.error("Erro ao listar clientes:", erro);

            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar clientes."
            });
        }

        return res.status(200).json({
            sucesso: true,
            clientes: resultado
        });
    });
}


//==========================================
// BUSCAR CLIENTE POR ID
//==========================================

function buscarPorId(req, res) {

    const id = req.params.id;

    clienteModel.buscarPorId(
        id,
        function (erro, resultado) {

            if (erro) {

                console.error("Erro ao buscar cliente:", erro);

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao buscar cliente."
                });
            }

            if (resultado.length === 0) {
                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Cliente não encontrado."
                });
            }

            return res.status(200).json({
                sucesso: true,
                cliente: resultado[0]
            });
        }
    );
}


//==========================================
// ATUALIZAR CLIENTE
//==========================================

function atualizar(req, res) {

    const id = req.params.id;
    const cliente = req.body;

    clienteModel.atualizar(
        id,
        cliente,
        function (erro, resultado) {

            if (erro) {

                console.error("Erro ao atualizar cliente:", erro);

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao atualizar cliente."
                });
            }

            if (resultado.affectedRows === 0) {
                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Cliente não encontrado."
                });
            }

            return res.status(200).json({
                sucesso: true,
                mensagem: "Cliente atualizado com sucesso."
            });
        }
    );
}


//==========================================
// EXCLUIR CLIENTE
//==========================================

function excluir(req, res) {

    const id = req.params.id;

    clienteModel.excluir(
        id,
        function (erro, resultado) {

            if (erro) {

                console.error("Erro ao excluir cliente:", erro);

                return res.status(500).json({
                    sucesso: false,
                    mensagem: "Erro ao excluir cliente."
                });
            }

            if (resultado.affectedRows === 0) {
                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Cliente não encontrado."
                });
            }

            return res.status(200).json({
                sucesso: true,
                mensagem: "Cliente excluído com sucesso."
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