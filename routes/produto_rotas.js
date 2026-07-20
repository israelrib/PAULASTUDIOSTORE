//==========================================
// ROTAS DE PRODUTOS
//==========================================
// Neste arquivo, definimos as rotas relacionadas aos produtos e
// associamos cada rota às funções do ProdutoController.
//
// POST /produtos: cadastrar um novo produto.
// GET /produtos: listar todos os produtos.
// GET /produtos/:id: buscar um produto pelo ID.
// PUT /produtos/:id: atualizar um produto.
// DELETE /produtos/:id: excluir um produto.
//==========================================

const express = require("express");

// Importando o módulo Express para criar as rotas.
const router = express.Router();

// Importando o controller de Produto.
const ProdutoController = require("../controller/produto_controller.js");

//==========================================
// ROTAS
//==========================================

// Cadastrar produto
router.post("/", ProdutoController.cadastrar);

// Listar todos os produtos
router.get("/", ProdutoController.listar);

// Buscar produto por ID
router.get("/:id", ProdutoController.buscarPorId);

// Atualizar produto
router.put("/:id", ProdutoController.atualizar);

// Excluir produto
router.delete("/:id", ProdutoController.excluir);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;