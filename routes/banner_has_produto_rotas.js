//==========================================
// ROTAS DE BANNER_HAS_PRODUTO
//==========================================
// Neste arquivo, definimos as rotas relacionadas ao relacionamento
// entre Banner e Produto e associamos cada rota às funções do
// BannerHasProdutoController.
//
// POST /banner_has_produto: cadastrar relacionamento.
// GET /banner_has_produto: listar relacionamentos.
// GET /banner_has_produto/:banner/:produto:
//      buscar relacionamento.
// PUT /banner_has_produto/:banner/:produto:
//      atualizar relacionamento.
// DELETE /banner_has_produto/:banner/:produto:
//      excluir relacionamento.
//==========================================

const express = require("express");

// Importando o módulo Express.
const router = express.Router();

// Importando o controller.
const BannerHasProdutoController = require("../control/banner_has_produto_controller.js");

//==========================================
// ROTAS
//==========================================

// Listar todos os relacionamentos
router.get("/", BannerHasProdutoController.listar);

// Buscar relacionamento
router.get(
    "/:banner/:produto",
    BannerHasProdutoController.buscarPorId
);

// Cadastrar relacionamento
router.post(
    "/",
    BannerHasProdutoController.cadastrar
);

// Atualizar relacionamento
router.put(
    "/:banner/:produto",
    BannerHasProdutoController.atualizar
);

// Excluir relacionamento
router.delete(
    "/:banner/:produto",
    BannerHasProdutoController.excluir
);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;