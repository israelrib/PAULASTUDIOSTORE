//==========================================
// ROTAS DE IMAGENS
//==========================================
// Neste arquivo, definimos as rotas relacionadas às imagens dos
// produtos e associamos cada rota às funções do ImagemController.
//
// POST /imagens: cadastrar uma nova imagem.
// GET /imagens: listar todas as imagens.
// GET /imagens/:id: buscar uma imagem pelo ID.
// PUT /imagens/:id: atualizar uma imagem.
// DELETE /imagens/:id: excluir uma imagem.
//==========================================

const express = require("express");

// Importando o módulo Express para criar as rotas.
const router = express.Router();

// Importando o controller de Imagem.
const ImagemController = require("../controller/imagem_controller.js");

//==========================================
// ROTAS
//==========================================

// Cadastrar imagem
router.post("/", ImagemController.cadastrar);

// Listar todas as imagens
router.get("/", ImagemController.listar);

// Buscar imagem por ID
router.get("/:id", ImagemController.buscarPorId);

// Atualizar imagem
router.put("/:id", ImagemController.atualizar);

// Excluir imagem
router.delete("/:id", ImagemController.excluir);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;