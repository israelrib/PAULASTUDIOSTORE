//==========================================
// ROTAS DE CATEGORIAS
//==========================================
// Neste arquivo, definimos as rotas relacionadas às categorias e
// associamos cada rota às funções do CategoriasController.
//
// POST /categorias: cadastrar uma nova categoria.
// GET /categorias: listar todas as categorias.
// GET /categorias/:id: buscar uma categoria pelo ID.
// PUT /categorias/:id: atualizar uma categoria.
// DELETE /categorias/:id: excluir uma categoria.
//==========================================

const express = require("express");

// Importando o módulo Express para criar as rotas.
const router = express.Router();

// Importando o controller de Categorias.
const CategoriasController = require("../control/categorias_controller.js");

//==========================================
// ROTAS
//==========================================

// Cadastrar categoria
router.post("/", CategoriasController.cadastrar);

// Listar todas as categorias
router.get("/", CategoriasController.listar);

// Buscar categoria por ID
router.get("/:id", CategoriasController.buscarPorId);

// Atualizar categoria
router.put("/:id", CategoriasController.atualizar);

// Excluir categoria
router.delete("/:id", CategoriasController.excluir);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;