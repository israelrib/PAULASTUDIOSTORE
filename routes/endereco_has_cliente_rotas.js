//==========================================
// ROTAS DE ENDEREÇO_HAS_CLIENTE
//==========================================
// Neste arquivo, definimos as rotas relacionadas ao relacionamento
// entre Endereço e Cliente e associamos cada rota às funções do
// EnderecoHasClienteController.
//
// POST /endereco_has_cliente: cadastrar relacionamento.
// GET /endereco_has_cliente: listar relacionamentos.
// GET /endereco_has_cliente/:endereco/:cliente:
//      buscar relacionamento.
// PUT /endereco_has_cliente/:endereco/:cliente:
//      atualizar relacionamento.
// DELETE /endereco_has_cliente/:endereco/:cliente:
//      excluir relacionamento.
//==========================================

const express = require("express");

// Importando o módulo Express.
const router = express.Router();

// Importando o controller.
const EnderecoHasClienteController = require("../control/endereco_has_cliente_controller.js");

//==========================================
// ROTAS
//==========================================

// Listar todos os relacionamentos
router.get("/", EnderecoHasClienteController.listar);

// Buscar relacionamento
router.get(
    "/:endereco/:cliente",
    EnderecoHasClienteController.buscarPorId
);

// Cadastrar relacionamento
router.post(
    "/",
    EnderecoHasClienteController.cadastrar
);

// Atualizar relacionamento
router.put(
    "/:endereco/:cliente",
    EnderecoHasClienteController.atualizar
);

// Excluir relacionamento
router.delete(
    "/:endereco/:cliente",
    EnderecoHasClienteController.excluir
);

//==========================================
// EXPORTAÇÃO
//==========================================

module.exports = router;