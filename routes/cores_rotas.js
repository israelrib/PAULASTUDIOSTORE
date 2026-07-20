//==========================================
// ROTAS DE CORES
//==========================================
// Neste arquivo, definimos as rotas relacionadas às cores e
// associamos cada rota às funções do CoresController.
//
// POST /cores: cadastrar uma nova cor.
// GET /cores: listar todas as cores.
// GET /cores/:id: buscar uma cor pelo ID.
// PUT /cores/:id: atualizar uma cor.
// DELETE /cores/:id: excluir uma cor.
//==========================================

const express = require("express");

// Importando o módulo Express para criar as rotas.
const router = express.Router();

// Importando o controller de Cores.
const CoresController = require("../controller/cores_controller.js");

//==========================================
// ROTAS
//==========================================

// Cadastrar cor
router.post("/", CoresController.cadastrar);

// Listar todas as cores
router.get("/", CoresController.listar);

// Buscar cor por ID
router.get("/:id", CoresController.buscarPorId);

// Atualizar cor
router.put("/:id", CoresController.atualizar);

// Excluir cor
router.delete("/:id", CoresController.excluir);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;