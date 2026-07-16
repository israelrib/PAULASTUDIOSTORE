//==========================================
// ROTAS DE TAMANHOS
//==========================================
// Neste arquivo, definimos as rotas relacionadas aos tamanhos e
// associamos cada rota às funções do TamanhoController.
//
// POST /tamanhos: cadastrar um novo tamanho.
// GET /tamanhos: listar todos os tamanhos.
// GET /tamanhos/:id: buscar um tamanho pelo ID.
// PUT /tamanhos/:id: atualizar um tamanho.
// DELETE /tamanhos/:id: excluir um tamanho.
//==========================================

const express = require("express");

// Importando o módulo Express para criar as rotas.
const router = express.Router();

// Importando o controller de Tamanho.
const TamanhoController = require("../control/tamanho_controller.js");

//==========================================
// ROTAS
//==========================================

// Cadastrar tamanho
router.post("/", TamanhoController.cadastrar);

// Listar todos os tamanhos
router.get("/", TamanhoController.listar);

// Buscar tamanho por ID
router.get("/:id", TamanhoController.buscarPorId);

// Atualizar tamanho
router.put("/:id", TamanhoController.atualizar);

// Excluir tamanho
router.delete("/:id", TamanhoController.excluir);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;