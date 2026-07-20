//==========================================
// ROTAS DE PRODUTO_HAS_CORES
//==========================================
// Neste arquivo, definimos as rotas relacionadas ao relacionamento
// entre Produto e Cores e associamos cada rota às funções do
// ProdutoHasCoresController.
//
// POST /produto_has_cores: cadastrar relacionamento.
// GET /produto_has_cores: listar relacionamentos.
// GET /produto_has_cores/:produto/:cor:
//      buscar relacionamento.
// PUT /produto_has_cores/:produto/:cor:
//      atualizar relacionamento.
// DELETE /produto_has_cores/:produto/:cor:
//      excluir relacionamento.
//==========================================

const express = require("express");

// Importando o módulo Express.
const router = express.Router();

// Importando o controller.
const ProdutoHasCoresController = require("../controller/produto_has_cores_controller.js");

//==========================================
// ROTAS
//==========================================

// Listar todos os relacionamentos
router.get("/", ProdutoHasCoresController.listar);

// Buscar relacionamento
router.get(
    "/:produto/:cor",
    ProdutoHasCoresController.buscarPorId
);

// Cadastrar relacionamento
router.post(
    "/",
    ProdutoHasCoresController.cadastrar
);

// Atualizar relacionamento
router.put(
    "/:produto/:cor",
    ProdutoHasCoresController.atualizar
);

// Excluir relacionamento
router.delete(
    "/:produto/:cor",
    ProdutoHasCoresController.excluir
);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;