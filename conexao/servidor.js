//==========================================
// IMPORTAÇÕES
//==========================================
 
const express = require("express");
const cors = require("cors");
const path = require("path");
 
const app = express();
 
console.log(">>> ESTE SERVIDOR.JS ESTÁ RODANDO <<<");
 
 
//==========================================
// CONFIGURAÇÕES
//==========================================
 
app.use(cors());
 
app.use(express.json());
 
app.use(
    express.urlencoded({
        extended: true
    })
);
 
 
//==========================================
// ARQUIVOS PÚBLICOS / ASSETS
//==========================================
 
app.use(
    "/assets",
    express.static(
        path.join(__dirname, "..", "assets")
    )
);
 
 
//==========================================
// CONEXÃO COM O BANCO
//==========================================
 
const conexao = require("./conexao");
 
 
//==========================================
// ARQUIVOS ESTÁTICOS
//==========================================
 
// Arquivos da raiz do projeto
app.use(
    express.static(
        path.join(__dirname, "..")
    )
);
 
 
// Arquivos da pasta PAGES
app.use(
    "/pages",
    express.static(
        path.join(__dirname, "..", "PAGES")
    )
);
 
 
// Arquivos da pasta STYLE
app.use(
    "/style",
    express.static(
        path.join(__dirname, "..", "STYLE")
    )
);
 
 
// Arquivos da pasta JS
app.use(
    "/js",
    express.static(
        path.join(__dirname, "..", "JS")
    )
);
 
 
//==========================================
// PÁGINA INICIAL
//==========================================
 
app.get("/", (req, res) => {
 
    res.sendFile(
        path.join(
            __dirname,
            "..",
            "index.html"
        )
    );
 
});
// REGISTRO DAS ROTAS DA APLICAÇÃO (criar uma rota para testar a conexão com o banco de dado)

// ROTAS DE CLIENTE

const ClienteRotas = require("../routes/cliente_rotas.js");
app.use("/clientes", ClienteRotas);


// ROTAS DE AVALIAÇÃO DE PRODUTO

const AvaliacaoProdutoRotas = require("../routes/avaliacao_produto_rotas.js");
app.use("/avaliacao_produto", AvaliacaoProdutoRotas);


// ROTAS DE BANNER

const BannerRotas = require("../routes/banner_rotas.js");
app.use("/banner", BannerRotas);


// ROTAS DE BANNER_HAS_PRODUTO

const BannerHasProdutoRotas = require("../routes/banner_has_produto_rotas.js");
app.use("/banner_has_produto", BannerHasProdutoRotas);


// ROTAS DE CARRINHO

const CarrinhoRotas = require("../routes/carrinho_rotas.js");
app.use("/carrinho", CarrinhoRotas);


// ROTAS DE CARRINHO_HAS_PRODUTO

const CarrinhoHasProdutoRotas = require("../routes/carrinho_has_produto_rotas.js");
app.use("/carrinho_has_produto", CarrinhoHasProdutoRotas);


// ROTAS DE CARTÃO DE PAGAMENTO

const CartaoPagamentoRotas = require("../routes/cartao_pagamento_rotas.js");
app.use("/cartao_pagamento", CartaoPagamentoRotas);


// ROTAS DE CATEGORIAS

const CategoriasRotas = require("../routes/categorias_rotas.js");
app.use("/categorias", CategoriasRotas);


// ROTAS DE CORES

const CoresRotas = require("../routes/cores_rotas.js");
app.use("/cores", CoresRotas);


// ROTAS DE CUPOM

const CupomRotas = require("../routes/cupom_rotas.js");
app.use("/cupom", CupomRotas);


// ROTAS DE CUPOM_HAS_CATEGORIAS

const CupomHasCategoriasRotas = require("../routes/cupom_has_categorias_rotas.js");
app.use("/cupom_has_categorias", CupomHasCategoriasRotas);


// ROTAS DE ENDEREÇO

const EnderecoRotas = require("../routes/endereco_rotas.js");
app.use("/endereco", EnderecoRotas);


// ROTAS DE ENDERECO_HAS_CLIENTE

const EnderecoHasClienteRotas = require("../routes/endereco_has_cliente_rotas.js");
app.use("/endereco_has_cliente", EnderecoHasClienteRotas);


// ROTAS DE FORMAS DE PAGAMENTO

const FormasPagamentoRotas = require("../routes/formas_pagamento_rotas.js");
app.use("/formas_pagamento", FormasPagamentoRotas);


// ROTAS DE FRETE

const FreteRotas = require("../routes/frete_rotas.js");
app.use("/frete", FreteRotas);


// ROTAS DE IMAGEM

const ImagemRotas = require("../routes/imagem_rotas.js");
app.use("/imagem", ImagemRotas);


// ROTAS DE MARCA

const MarcaRotas = require("../routes/marca_rotas.js");
app.use("/marca", MarcaRotas);


// ROTAS DE PEDIDOS

const PedidosRotas = require("../routes/pedidos_rotas.js");
app.use("/pedidos", PedidosRotas);


// ROTAS DE PEDIDOS_HAS_PRODUTO

const PedidosHasProdutoRotas = require("../routes/pedidos_has_produto_rotas.js");
app.use("/pedidos_has_produto", PedidosHasProdutoRotas);


// ROTAS DE PRODUTO

const ProdutoRotas = require("../routes/produto_rotas.js");
app.use("/produto", ProdutoRotas);


// ROTAS DE PRODUTO_HAS_CORES

const ProdutoHasCoresRotas = require("../routes/produto_has_cores_rotas.js");
app.use("/produto_has_cores", ProdutoHasCoresRotas);


// ROTAS DE PRODUTO_HAS_CUPOM

const ProdutoHasCupomRotas = require("../routes/produto_has_cupom_rotas.js");
app.use("/produto_has_cupom", ProdutoHasCupomRotas);


// ROTAS DE PRODUTO_HAS_PROMOÇÃO

const ProdutoHasPromocaoRotas = require("../routes/produto_has_promocao_rotas.js");
app.use("/produto_has_promocao", ProdutoHasPromocaoRotas);


// ROTAS DE PRODUTO_HAS_TAMANHO

const ProdutoHasTamanhoRotas = require("../routes/produto_has_tamanho_rotas.js");
app.use("/produto_has_tamanho", ProdutoHasTamanhoRotas);


// ROTAS DE PROMOÇÃO

const PromocaoRotas = require("../routes/promocao_rotas.js");
app.use("/promocao", PromocaoRotas);


// ROTAS DE PROMOCAO_HAS_CATEGORIA

const PromocaoHasCategoriaRotas = require("../routes/promocao_has_categoria_rotas.js");
app.use("/promocao_has_categoria", PromocaoHasCategoriaRotas);


// ROTAS DE TAMANHO

const TamanhoRotas = require("../routes/tamanho_rotas.js");
app.use("/tamanho", TamanhoRotas);

// importar as rotas da aplicação
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

// ROTAS DE LOJISTA

const LojistaRotas =
    require("../routes/lojista_rotas.js");

app.use(
    "/lojista",
    LojistaRotas
);
