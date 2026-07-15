const ProdutoHasCupomModel = require("../model/produto_has_cupom_model");

//==========================================
// LISTAR TODOS OS RELACIONAMENTOS
//==========================================

exports.listar = (req, res) => {

    ProdutoHasCupomModel.listar((erro, resultado) => {

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

    const { produto, cupom } = req.params;

    ProdutoHasCupomModel.buscarPorId(

        produto,
        cupom,

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

    ProdutoHasCupomModel.cadastrar(dados, (erro) => {

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

    const { produto, cupom } = req.params;
    const dados = req.body;

    ProdutoHasCupomModel.atualizar(

        produto,
        cupom,
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

    const { produto, cupom } = req.params;

    ProdutoHasCupomModel.excluir(

        produto,
        cupom,

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