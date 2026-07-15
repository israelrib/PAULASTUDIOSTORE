const CarrinhoHasProdutoModel = require("../model/carrinho_has_produto_model");

//==========================================
// LISTAR TODOS OS RELACIONAMENTOS
//==========================================

exports.listar = (req, res) => {

    CarrinhoHasProdutoModel.listar((erro, resultado) => {

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

    const { carrinho, produto } = req.params;

    CarrinhoHasProdutoModel.buscarPorId(

        carrinho,
        produto,

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

    CarrinhoHasProdutoModel.cadastrar(dados, (erro) => {

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

    const { carrinho, produto } = req.params;
    const dados = req.body;

    CarrinhoHasProdutoModel.atualizar(

        carrinho,
        produto,
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

    const { carrinho, produto } = req.params;

    CarrinhoHasProdutoModel.excluir(

        carrinho,
        produto,

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