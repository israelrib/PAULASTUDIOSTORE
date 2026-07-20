//==========================================
// ROTAS DE PRODUTO_HAS_PROMOCAO
//==========================================
// Neste arquivo, definimos as rotas relacionadas ao relacionamento
// entre Produto e Promoção e associamos cada rota às funções do
// ProdutoHasPromocaoController.
//
// POST /produto_has_promocao: cadastrar relacionamento.
// GET /produto_has_promocao: listar relacionamentos.
// GET /produto_has_promocao/:produto/:promocao:
//      buscar relacionamento.
// PUT /produto_has_promocao/:produto/:promocao:
//      atualizar relacionamento.
// DELETE /produto_has_promocao/:produto/:promocao:
//      excluir relacionamento.
//==========================================

const express = require("express");

// Importando o módulo Express.
const router = express.Router();

// Importando o controller.
const ProdutoHasPromocaoController = require("../controller/produto_has_promocao_controller.js");

//==========================================
// ROTAS
//==========================================

// Listar todos os relacionamentos
router.get("/", ProdutoHasPromocaoController.listar);

// Buscar relacionamento
router.get(
    "/:produto/:promocao",
    ProdutoHasPromocaoController.buscarPorId
);

// Cadastrar relacionamento
router.post(
    "/",
    ProdutoHasPromocaoController.cadastrar
);

// Atualizar relacionamento
router.put(
    "/:produto/:promocao",
    ProdutoHasPromocaoController.atualizar
);

// Excluir relacionamento
router.delete(
    "/:produto/:promocao",
    ProdutoHasPromocaoController.excluir
);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;