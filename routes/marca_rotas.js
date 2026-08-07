//==========================================
// ROTAS DE MARCAS
//==========================================

const express = require("express");

const router = express.Router();

const MarcaController =
    require("../controller/marca_controller.js");


//==========================================
// CADASTRAR MARCA
//==========================================

router.post(
    "/",
    MarcaController.cadastrar
);


//==========================================
// LISTAR MARCAS
//==========================================

router.get(
    "/",
    MarcaController.listar
);


//==========================================
// BUSCAR MARCA POR ID
//==========================================

router.get(
    "/:id",
    MarcaController.buscarPorId
);


//==========================================
// ATUALIZAR MARCA
//==========================================

router.put(
    "/:id",
    MarcaController.atualizar
);


//==========================================
// EXCLUIR MARCA
//==========================================

router.delete(
    "/:id",
    MarcaController.excluir
);


//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;