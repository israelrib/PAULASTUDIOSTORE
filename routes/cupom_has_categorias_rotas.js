//==========================================
// ROTAS DE CUPOM_HAS_CATEGORIAS
//==========================================
// Neste arquivo, definimos as rotas relacionadas ao relacionamento
// entre Cupom e Categorias e associamos cada rota às funções do
// CupomHasCategoriasController.
//
// POST /cupom_has_categorias: cadastrar relacionamento.
// GET /cupom_has_categorias: listar relacionamentos.
// GET /cupom_has_categorias/:cupom/:categoria:
//      buscar relacionamento.
// PUT /cupom_has_categorias/:cupom/:categoria:
//      atualizar relacionamento.
// DELETE /cupom_has_categorias/:cupom/:categoria:
//      excluir relacionamento.
//==========================================

const express = require("express");

// Importando o módulo Express.
const router = express.Router();

// Importando o controller.
const CupomHasCategoriasController = require("../control/cupom_has_categorias_controller.js");

//==========================================
// ROTAS
//==========================================

// Listar todos os relacionamentos
router.get("/", CupomHasCategoriasController.listar);

// Buscar relacionamento
router.get(
    "/:cupom/:categoria",
    CupomHasCategoriasController.buscarPorId
);

// Cadastrar relacionamento
router.post(
    "/",
    CupomHasCategoriasController.cadastrar
);

// Atualizar relacionamento
router.put(
    "/:cupom/:categoria",
    CupomHasCategoriasController.atualizar
);

// Excluir relacionamento
router.delete(
    "/:cupom/:categoria",
    CupomHasCategoriasController.excluir
);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;