//==========================================
// ROTAS DE CARRINHO
//==========================================
// Neste arquivo, definimos as rotas relacionadas aos carrinhos e
// associamos cada rota às funções do CarrinhoController.
//
// POST /carrinhos: cadastrar um novo carrinho.
// GET /carrinhos: listar todos os carrinhos.
// GET /carrinhos/:id: buscar um carrinho pelo ID.
// PUT /carrinhos/:id: atualizar um carrinho.
// DELETE /carrinhos/:id: excluir um carrinho.
//==========================================

const express = require("express");

// Importando o módulo Express para criar as rotas.
const router = express.Router();

// Importando o controller de Carrinho.
const CarrinhoController = require("../control/carrinho_controller.js");

//==========================================
// ROTAS
//==========================================

// Cadastrar carrinho
router.post("/", CarrinhoController.cadastrar);

// Listar todos os carrinhos
router.get("/", CarrinhoController.listar);

// Buscar carrinho por ID
router.get("/:id", CarrinhoController.buscarPorId);

// Atualizar carrinho
router.put("/:id", CarrinhoController.atualizar);

// Excluir carrinho
router.delete("/:id", CarrinhoController.excluir);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;