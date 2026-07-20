const EnderecoHasClienteModel = require("../model/endereco_has_cliente_model");

//==========================================
// LISTAR TODOS OS RELACIONAMENTOS
//==========================================

exports.listar = (req, res) => {

    EnderecoHasClienteModel.listar((erro, resultado) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(200).json(resultado);

    });

};

//==========================================
// BUSCAR RELACIONAMENTO
//==========================================

exports.buscarPorId = (req, res) => {

    const { endereco, cliente } = req.params;

    EnderecoHasClienteModel.buscarPorId(

        endereco,
        cliente,

        (erro, resultado) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            if (resultado.length === 0) {

                return res.status(404).json({
                    mensagem: "Relacionamento não encontrado."
                });

            }

            res.status(200).json(resultado[0]);

        }

    );

};

//==========================================
// CADASTRAR RELACIONAMENTO
//==========================================

exports.cadastrar = (req, res) => {

    const dados = req.body;

    EnderecoHasClienteModel.cadastrar(dados, (erro) => {

        if (erro) {
            return res.status(500).json(erro);
        }

        res.status(201).json({
            mensagem: "Relacionamento cadastrado com sucesso!"
        });

    });

};

//==========================================
// ATUALIZAR RELACIONAMENTO
//==========================================

exports.atualizar = (req, res) => {

    const { endereco, cliente } = req.params;
    const dados = req.body;

    EnderecoHasClienteModel.atualizar(

        endereco,
        cliente,
        dados,

        (erro) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.status(200).json({
                mensagem: "Relacionamento atualizado com sucesso!"
            });

        }

    );

};

//==========================================
// EXCLUIR RELACIONAMENTO
//==========================================

exports.excluir = (req, res) => {

    const { endereco, cliente } = req.params;

    EnderecoHasClienteModel.excluir(

        endereco,
        cliente,

        (erro) => {

            if (erro) {
                return res.status(500).json(erro);
            }

            res.status(200).json({
                mensagem: "Relacionamento excluído com sucesso!"
            });

        }

    );

};