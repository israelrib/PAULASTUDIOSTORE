//==========================================
// ROTAS DE AVALIAÇÃO DE PRODUTOS
//==========================================
// Neste arquivo, definimos as rotas relacionadas às avaliações
// dos produtos e associamos cada rota às funções do
// AvaliacaoProdutoController.
//
// POST /avaliacoes_produto: cadastrar uma nova avaliação.
// GET /avaliacoes_produto: listar todas as avaliações.
// GET /avaliacoes_produto/:id: buscar uma avaliação pelo ID.
// PUT /avaliacoes_produto/:id: atualizar uma avaliação.
// DELETE /avaliacoes_produto/:id: excluir uma avaliação.
//==========================================

const express = require("express");

// Importando o módulo Express para criar as rotas.
const router = express.Router();

// Importando o controller de Avaliação de Produto.
const AvaliacaoProdutoController = require("../control/avaliacao_produto_controller.js");

//==========================================
// ROTAS
//==========================================

// Cadastrar avaliação
router.post("/", AvaliacaoProdutoController.cadastrar);

// Listar todas as avaliações
router.get("/", AvaliacaoProdutoController.listar);

// Buscar avaliação por ID
router.get("/:id", AvaliacaoProdutoController.buscarPorId);

// Atualizar avaliação
router.put("/:id", AvaliacaoProdutoController.atualizar);

// Excluir avaliação
router.delete("/:id", AvaliacaoProdutoController.excluir);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;