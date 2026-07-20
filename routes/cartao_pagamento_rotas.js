//==========================================
// ROTAS DE CARTÃO DE PAGAMENTO
//==========================================
// Neste arquivo, definimos as rotas relacionadas aos cartões de
// pagamento e associamos cada rota às funções do
// CartaoPagamentoController.
//
// POST /cartoes_pagamento: cadastrar um novo cartão.
// GET /cartoes_pagamento: listar todos os cartões.
// GET /cartoes_pagamento/:id: buscar um cartão pelo ID.
// PUT /cartoes_pagamento/:id: atualizar um cartão.
// DELETE /cartoes_pagamento/:id: excluir um cartão.
//==========================================

const express = require("express");

// Importando o módulo Express para criar as rotas.
const router = express.Router();

// Importando o controller de Cartão de Pagamento.
const CartaoPagamentoController = require("../controller/cartao_pagamento_controller.js");

//==========================================
// ROTAS
//==========================================

// Cadastrar cartão
router.post("/", CartaoPagamentoController.cadastrar);

// Listar todos os cartões
router.get("/", CartaoPagamentoController.listar);

// Buscar cartão por ID
router.get("/:id", CartaoPagamentoController.buscarPorId);

// Atualizar cartão
router.put("/:id", CartaoPagamentoController.atualizar);

// Excluir cartão
router.delete("/:id", CartaoPagamentoController.excluir);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;