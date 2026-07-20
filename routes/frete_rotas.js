//==========================================
// ROTAS DE FRETE
//==========================================
// Neste arquivo, definimos as rotas relacionadas aos fretes e
// associamos cada rota às funções do FreteController.
//
// POST /fretes: cadastrar um novo frete.
// GET /fretes: listar todos os fretes.
// GET /fretes/:id: buscar um frete pelo ID.
// PUT /fretes/:id: atualizar um frete.
// DELETE /fretes/:id: excluir um frete.
//==========================================

const express = require("express");

// Importando o módulo Express para criar as rotas.
const router = express.Router();

// Importando o controller de Frete.
const FreteController = require("../controller/frete_controller.js");

//==========================================
// ROTAS
//==========================================

// Cadastrar frete
router.post("/", FreteController.cadastrar);

// Listar todos os fretes
router.get("/", FreteController.listar);

// Buscar frete por ID
router.get("/:id", FreteController.buscarPorId);

// Atualizar frete
router.put("/:id", FreteController.atualizar);

// Excluir frete
router.delete("/:id", FreteController.excluir);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;