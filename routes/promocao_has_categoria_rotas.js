//==========================================
// ROTAS DE PROMOCAO_HAS_CATEGORIA
//==========================================
// Neste arquivo, definimos as rotas relacionadas ao relacionamento
// entre Promoção e Categoria e associamos cada rota às funções do
// PromocaoHasCategoriaController.
//
// POST /promocao_has_categoria: cadastrar relacionamento.
// GET /promocao_has_categoria: listar relacionamentos.
// GET /promocao_has_categoria/:promocao/:categoria:
//      buscar relacionamento.
// PUT /promocao_has_categoria/:promocao/:categoria:
//      atualizar relacionamento.
// DELETE /promocao_has_categoria/:promocao/:categoria:
//      excluir relacionamento.
//==========================================

const express = require("express");

// Importando o módulo Express.
const router = express.Router();

// Importando o controller.
const PromocaoHasCategoriaController = require("../control/promocao_has_categoria_controller.js");

//==========================================
// ROTAS
//==========================================

// Listar todos os relacionamentos
router.get("/", PromocaoHasCategoriaController.listar);

// Buscar relacionamento
router.get(
    "/:promocao/:categoria",
    PromocaoHasCategoriaController.buscarPorId
);

// Cadastrar relacionamento
router.post(
    "/",
    PromocaoHasCategoriaController.cadastrar
);

// Atualizar relacionamento
router.put(
    "/:promocao/:categoria",
    PromocaoHasCategoriaController.atualizar
);

// Excluir relacionamento
router.delete(
    "/:promocao/:categoria",
    PromocaoHasCategoriaController.excluir
);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;