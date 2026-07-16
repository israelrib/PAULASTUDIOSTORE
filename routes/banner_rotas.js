//==========================================
// ROTAS DE BANNERS
//==========================================
// Neste arquivo, definimos as rotas relacionadas aos banners e
// associamos cada rota às funções do BannerController.
//
// POST /banners: cadastrar um novo banner.
// GET /banners: listar todos os banners.
// GET /banners/:id: buscar um banner pelo ID.
// PUT /banners/:id: atualizar um banner.
// DELETE /banners/:id: excluir um banner.
//==========================================

const express = require("express");

// Importando o módulo Express para criar as rotas.
const router = express.Router();

// Importando o controller de Banner.
const BannerController = require("../control/banner_controller.js");

//==========================================
// ROTAS
//==========================================

// Cadastrar banner
router.post("/", BannerController.cadastrar);

// Listar todos os banners
router.get("/", BannerController.listar);

// Buscar banner por ID
router.get("/:id", BannerController.buscarPorId);

// Atualizar banner
router.put("/:id", BannerController.atualizar);

// Excluir banner
router.delete("/:id", BannerController.excluir);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;