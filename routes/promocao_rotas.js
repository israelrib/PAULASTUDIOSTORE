//==========================================
// ROTAS DE PROMOÇÕES
//==========================================
// Neste arquivo, definimos as rotas relacionadas às promoções e
// associamos cada rota às funções do PromocaoController.
//
// POST /promocoes: cadastrar uma nova promoção.
// GET /promocoes: listar todas as promoções.
// GET /promocoes/:id: buscar uma promoção pelo ID.
// PUT /promocoes/:id: atualizar uma promoção.
// DELETE /promocoes/:id: excluir uma promoção.
//==========================================

const express = require("express");

// Importando o módulo Express para criar as rotas.
const router = express.Router();

// Importando o controller de Promoção.
const PromocaoController = require("../control/promocao_controller.js");

//==========================================
// ROTAS
//==========================================

// Cadastrar promoção
router.post("/", PromocaoController.cadastrar);

// Listar todas as promoções
router.get("/", PromocaoController.listar);

// Buscar promoção por ID
router.get("/:id", PromocaoController.buscarPorId);

// Atualizar promoção
router.put("/:id", PromocaoController.atualizar);

// Excluir promoção
router.delete("/:id", PromocaoController.excluir);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;