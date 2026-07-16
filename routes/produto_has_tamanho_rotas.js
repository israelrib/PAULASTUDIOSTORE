//==========================================
// ROTAS DE PRODUTO_HAS_TAMANHO
//==========================================
// Neste arquivo, definimos as rotas relacionadas ao relacionamento
// entre Produto e Tamanho e associamos cada rota às funções do
// ProdutoHasTamanhoController.
//
// POST /produto_has_tamanho: cadastrar relacionamento.
// GET /produto_has_tamanho: listar relacionamentos.
// GET /produto_has_tamanho/:produto/:tamanho:
//      buscar relacionamento.
// PUT /produto_has_tamanho/:produto/:tamanho:
//      atualizar relacionamento.
// DELETE /produto_has_tamanho/:produto/:tamanho:
//      excluir relacionamento.
//==========================================

const express = require("express");

// Importando o módulo Express.
const router = express.Router();

// Importando o controller.
const ProdutoHasTamanhoController = require("../control/produto_has_tamanho_controller.js");

//==========================================
// ROTAS
//==========================================

// Listar todos os relacionamentos
router.get("/", ProdutoHasTamanhoController.listar);

// Buscar relacionamento
router.get(
    "/:produto/:tamanho",
    ProdutoHasTamanhoController.buscarPorId
);

// Cadastrar relacionamento
router.post(
    "/",
    ProdutoHasTamanhoController.cadastrar
);

// Atualizar relacionamento
router.put(
    "/:produto/:tamanho",
    ProdutoHasTamanhoController.atualizar
);

// Excluir relacionamento
router.delete(
    "/:produto/:tamanho",
    ProdutoHasTamanhoController.excluir
);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;