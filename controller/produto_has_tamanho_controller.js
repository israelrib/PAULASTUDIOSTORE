const ProdutoHasTamanhoModel = require("../model/produto_has_tamanho_model");

//==========================================
// LISTAR TODOS OS RELACIONAMENTOS
//==========================================

exports.listar = (req, res) => {

    ProdutoHasTamanhoModel.listar((erro, resultado) => {

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

    const { produto, tamanho } = req.params;

    ProdutoHasTamanhoModel.buscarPorId(

        produto,
        tamanho,

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

    ProdutoHasTamanhoModel.cadastrar(dados, (erro) => {

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

    const { produto, tamanho } = req.params;
    const dados = req.body;

    ProdutoHasTamanhoModel.atualizar(

        produto,
        tamanho,
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

    const { produto, tamanho } = req.params;

    ProdutoHasTamanhoModel.excluir(

        produto,
        tamanho,

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