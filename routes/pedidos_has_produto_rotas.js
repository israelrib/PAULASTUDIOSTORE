//==========================================
// ROTAS DE PEDIDOS_HAS_PRODUTO
//==========================================
// Neste arquivo, definimos as rotas relacionadas ao relacionamento
// entre Pedidos e Produto e associamos cada rota às funções do
// PedidosHasProdutoController.
//
// POST /pedidos_has_produto: cadastrar relacionamento.
// GET /pedidos_has_produto: listar relacionamentos.
// GET /pedidos_has_produto/:pedido/:produto:
//      buscar relacionamento.
// PUT /pedidos_has_produto/:pedido/:produto:
//      atualizar relacionamento.
// DELETE /pedidos_has_produto/:pedido/:produto:
//      excluir relacionamento.
//==========================================

const express = require("express");

// Importando o módulo Express.
const router = express.Router();

// Importando o controller.
const PedidosHasProdutoController = require("../controller/pedidos_has_produto_controller.js");

//==========================================
// ROTAS
//==========================================

// Listar todos os relacionamentos
router.get("/", PedidosHasProdutoController.listar);

// Buscar relacionamento
router.get(
    "/:pedido/:produto",
    PedidosHasProdutoController.buscarPorId
);

// Cadastrar relacionamento
router.post(
    "/",
    PedidosHasProdutoController.cadastrar
);

// Atualizar relacionamento
router.put(
    "/:pedido/:produto",
    PedidosHasProdutoController.atualizar
);

// Excluir relacionamento
router.delete(
    "/:pedido/:produto",
    PedidosHasProdutoController.excluir
);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;