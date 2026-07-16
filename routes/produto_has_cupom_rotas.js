//==========================================
// ROTAS DE PRODUTO_HAS_CUPOM
//==========================================
// Neste arquivo, definimos as rotas relacionadas ao relacionamento
// entre Produto e Cupom e associamos cada rota às funções do
// ProdutoHasCupomController.
//
// POST /produto_has_cupom: cadastrar relacionamento.
// GET /produto_has_cupom: listar relacionamentos.
// GET /produto_has_cupom/:produto/:cupom:
//      buscar relacionamento.
// PUT /produto_has_cupom/:produto/:cupom:
//      atualizar relacionamento.
// DELETE /produto_has_cupom/:produto/:cupom:
//      excluir relacionamento.
//==========================================

const express = require("express");

// Importando o módulo Express.
const router = express.Router();

// Importando o controller.
const ProdutoHasCupomController = require("../control/produto_has_cupom_controller.js");

//==========================================
// ROTAS
//==========================================

// Listar todos os relacionamentos
router.get("/", ProdutoHasCupomController.listar);

// Buscar relacionamento
router.get(
    "/:produto/:cupom",
    ProdutoHasCupomController.buscarPorId
);

// Cadastrar relacionamento
router.post(
    "/",
    ProdutoHasCupomController.cadastrar
);

// Atualizar relacionamento
router.put(
    "/:produto/:cupom",
    ProdutoHasCupomController.atualizar
);

// Excluir relacionamento
router.delete(
    "/:produto/:cupom",
    ProdutoHasCupomController.excluir
);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;