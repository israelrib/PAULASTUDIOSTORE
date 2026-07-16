//==========================================
// ROTAS DE CUPONS
//==========================================
// Neste arquivo, definimos as rotas relacionadas aos cupons e
// associamos cada rota às funções do CupomController.
//
// POST /cupons: cadastrar um novo cupom.
// GET /cupons: listar todos os cupons.
// GET /cupons/:id: buscar um cupom pelo ID.
// PUT /cupons/:id: atualizar um cupom.
// DELETE /cupons/:id: excluir um cupom.
//==========================================

const express = require("express");

// Importando o módulo Express para criar as rotas.
const router = express.Router();

// Importando o controller de Cupom.
const CupomController = require("../control/cupom_controller.js");

//==========================================
// ROTAS
//==========================================

// Cadastrar cupom
router.post("/", CupomController.cadastrar);

// Listar todos os cupons
router.get("/", CupomController.listar);

// Buscar cupom por ID
router.get("/:id", CupomController.buscarPorId);

// Atualizar cupom
router.put("/:id", CupomController.atualizar);

// Excluir cupom
router.delete("/:id", CupomController.excluir);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;