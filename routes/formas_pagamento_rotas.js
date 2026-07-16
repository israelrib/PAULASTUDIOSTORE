//==========================================
// ROTAS DE FORMAS DE PAGAMENTO
//==========================================
// Neste arquivo, definimos as rotas relacionadas às formas de
// pagamento e associamos cada rota às funções do
// FormasPagamentoController.
//
// POST /formas_pagamento: cadastrar uma nova forma de pagamento.
// GET /formas_pagamento: listar todas as formas de pagamento.
// GET /formas_pagamento/:id: buscar uma forma de pagamento pelo ID.
// PUT /formas_pagamento/:id: atualizar uma forma de pagamento.
// DELETE /formas_pagamento/:id: excluir uma forma de pagamento.
//==========================================

const express = require("express");

// Importando o módulo Express para criar as rotas.
const router = express.Router();

// Importando o controller de Formas de Pagamento.
const FormasPagamentoController = require("../control/formas_pagamento_controller.js");

//==========================================
// ROTAS
//==========================================

// Cadastrar forma de pagamento
router.post("/", FormasPagamentoController.cadastrar);

// Listar todas as formas de pagamento
router.get("/", FormasPagamentoController.listar);

// Buscar forma de pagamento por ID
router.get("/:id", FormasPagamentoController.buscarPorId);

// Atualizar forma de pagamento
router.put("/:id", FormasPagamentoController.atualizar);

// Excluir forma de pagamento
router.delete("/:id", FormasPagamentoController.excluir);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;