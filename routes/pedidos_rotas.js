//==========================================
// ROTAS DE PEDIDOS
//==========================================
// Neste arquivo, definimos as rotas relacionadas aos pedidos e
// associamos cada rota às funções do PedidosController.
//
// POST /pedidos: cadastrar um novo pedido.
// GET /pedidos: listar todos os pedidos.
// GET /pedidos/:id: buscar um pedido pelo ID.
// PUT /pedidos/:id: atualizar um pedido.
// DELETE /pedidos/:id: excluir um pedido.
//==========================================

const express = require("express");

// Importando o módulo Express para criar as rotas.
const router = express.Router();

// Importando o controller de Pedidos.
const PedidosController = require("../controller/pedidos_controller.js");

//==========================================
// ROTAS
//==========================================

// Cadastrar pedido
router.post("/", PedidosController.cadastrar);

// Listar todos os pedidos
router.get("/", PedidosController.listar);

// Buscar pedido por ID
router.get("/:id", PedidosController.buscarPorId);

// Atualizar pedido
router.put("/:id", PedidosController.atualizar);

// Excluir pedido
router.delete("/:id", PedidosController.excluir);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;