//==========================================
// ROTAS DE CARRINHO_HAS_PRODUTO
//==========================================
// Neste arquivo, definimos as rotas relacionadas ao relacionamento
// entre Carrinho e Produto e associamos cada rota às funções do
// CarrinhoHasProdutoController.
//
// POST /carrinho_has_produto: cadastrar relacionamento.
// GET /carrinho_has_produto: listar relacionamentos.
// GET /carrinho_has_produto/:carrinho/:produto:
//      buscar relacionamento.
// PUT /carrinho_has_produto/:carrinho/:produto:
//      atualizar relacionamento.
// DELETE /carrinho_has_produto/:carrinho/:produto:
//      excluir relacionamento.
//==========================================

const express = require("express");

// Importando o módulo Express.
const router = express.Router();

// Importando o controller.
const CarrinhoHasProdutoController = require("../control/carrinho_has_produto_controller.js");

//==========================================
// ROTAS
//==========================================

// Listar todos os relacionamentos
router.get("/", CarrinhoHasProdutoController.listar);

// Buscar relacionamento
router.get(
    "/:carrinho/:produto",
    CarrinhoHasProdutoController.buscarPorId
);

// Cadastrar relacionamento
router.post(
    "/",
    CarrinhoHasProdutoController.cadastrar
);

// Atualizar relacionamento
router.put(
    "/:carrinho/:produto",
    CarrinhoHasProdutoController.atualizar
);

// Excluir relacionamento
router.delete(
    "/:carrinho/:produto",
    CarrinhoHasProdutoController.excluir
);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;