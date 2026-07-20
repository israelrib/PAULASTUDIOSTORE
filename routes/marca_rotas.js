//==========================================
// ROTAS DE MARCAS
//==========================================
// Neste arquivo, definimos as rotas relacionadas às marcas e
// associamos cada rota às funções do MarcaController.
//
// POST /marcas: cadastrar uma nova marca.
// GET /marcas: listar todas as marcas.
// GET /marcas/:id: buscar uma marca pelo ID.
// PUT /marcas/:id: atualizar uma marca.
// DELETE /marcas/:id: excluir uma marca.
//==========================================

const express = require("express");

// Importando o módulo Express para criar as rotas.
const router = express.Router();

// Importando o controller de Marca.
const MarcaController = require("../controller/marca_controller.js");

//==========================================
// ROTAS
//==========================================

// Cadastrar marca
router.post("/", MarcaController.cadastrar);

// Listar todas as marcas
router.get("/", MarcaController.listar);

// Buscar marca por ID
router.get("/:id", MarcaController.buscarPorId);

// Atualizar marca
router.put("/:id", MarcaController.atualizar);

// Excluir marca
router.delete("/:id", MarcaController.excluir);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;