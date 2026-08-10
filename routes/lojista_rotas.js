//==========================================
// ROTAS DE LOJISTA
//==========================================

const express = require("express");

const router = express.Router();

const LojistaController =
    require("../controller/lojista_controller.js");


//==========================================
// LOGIN
//==========================================
// IMPORTANTE:
// /login deve vir antes de /:id
//==========================================

router.post(
    "/login",
    LojistaController.login
);


//==========================================
// CADASTRAR LOJISTA
//==========================================

router.post(
    "/",
    LojistaController.cadastrar
);


//==========================================
// LISTAR LOJISTAS
//==========================================

router.get(
    "/",
    LojistaController.listar
);


//==========================================
// BUSCAR LOJISTA POR ID
//==========================================

router.get(
    "/:id",
    LojistaController.buscarPorId
);


//==========================================
// ATUALIZAR LOJISTA
//==========================================

router.put(
    "/:id",
    LojistaController.atualizar
);


//==========================================
// EXCLUIR LOJISTA
//==========================================

router.delete(
    "/:id",
    LojistaController.excluir
);


//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;