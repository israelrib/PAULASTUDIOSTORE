//==========================================
// ROTAS DE ENDEREÇO
//==========================================
// Neste arquivo, definimos as rotas relacionadas aos endereços e
// associamos cada rota às funções do EnderecoController.
//
// POST /enderecos: cadastrar um novo endereço.
// GET /enderecos: listar todos os endereços.
// GET /enderecos/:id: buscar um endereço pelo ID.
// PUT /enderecos/:id: atualizar um endereço.
// DELETE /enderecos/:id: excluir um endereço.
//==========================================

const express = require("express");

// Importando o módulo Express para criar as rotas.
const router = express.Router();

// Importando o controller de Endereço.
const EnderecoController = require("../control/endereco_controller.js");

//==========================================
// ROTAS
//==========================================

// Cadastrar endereço
router.post("/", EnderecoController.cadastrar);

// Listar todos os endereços
router.get("/", EnderecoController.listar);

// Buscar endereço por ID
router.get("/:id", EnderecoController.buscarPorId);

// Atualizar endereço
router.put("/:id", EnderecoController.atualizar);

// Excluir endereço
router.delete("/:id", EnderecoController.excluir);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;