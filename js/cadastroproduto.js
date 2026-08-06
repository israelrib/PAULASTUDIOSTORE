// ======================================================
// CONFIGURAÇÕES DA API
// ======================================================

const API_URL = "http://localhost:3000";

const ROTAS = {
    produto: `${API_URL}/produto`,
    categoria: `${API_URL}/categoria`,
    marca: `${API_URL}/marca`,
    cor: `${API_URL}/cores`,
    tamanho: `${API_URL}/tamanho`,
    imagem: `${API_URL}/imagem`,

    produtoCor: `${API_URL}/produto_has_cores`,
    produtoTamanho: `${API_URL}/produto_has_tamanho`
};


// ======================================================
// VARIÁVEIS DE CONTROLE
// ======================================================

let produtoEditando = null;
let categoriaEditando = null;
let marcaEditando = null;
let corEditando = null;
let tamanhoEditando = null;

let listaProdutos = [];
let listaCategorias = [];
let listaMarcas = [];
let listaCores = [];
let listaTamanhos = [];

let imagensSelecionadas = [];


// ======================================================
// INICIALIZAÇÃO
// ======================================================

document.addEventListener("DOMContentLoaded", iniciarPagina);


async function iniciarPagina() {

    configurarAccordions();
    configurarBotoesAuxiliares();
    configurarEventos();
    configurarPreVisualizacoes();

    await carregarDadosIniciais();

}


// ======================================================
// CARREGAMENTO INICIAL
// ======================================================

async function carregarDadosIniciais() {

    await Promise.allSettled([
        carregarCategorias(),
        carregarMarcas(),
        carregarCores(),
        carregarTamanhos(),
        carregarProdutos()
    ]);

}


// ======================================================
// FUNÇÕES DE REQUISIÇÃO
// ======================================================

async function requisicao(url, opcoes = {}) {

    const resposta = await fetch(url, opcoes);

    let dados = null;

    try {

        dados = await resposta.json();

    } catch {

        dados = null;

    }

    if (!resposta.ok) {

        const mensagem =
            dados?.mensagem ||
            dados?.message ||
            "Não foi possível realizar a operação.";

        throw new Error(mensagem);

    }

    return dados;

}


function opcoesJson(metodo, dados) {

    return {
        method: metodo,

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(dados)
    };

}


function extrairLista(resposta) {

    if (Array.isArray(resposta)) {
        return resposta;
    }

    if (Array.isArray(resposta?.dados)) {
        return resposta.dados;
    }

    if (Array.isArray(resposta?.resultado)) {
        return resposta.resultado;
    }

    if (Array.isArray(resposta?.resultados)) {
        return resposta.resultados;
    }

    return [];

}


// ======================================================
// CONFIGURAÇÃO DOS EVENTOS
// ======================================================

function configurarEventos() {

    adicionarEvento(
        "btn-salvar-produto",
        "click",
        salvarProduto
    );

   

    adicionarEvento(
        "btn-limpar-categoria",
        "click",
        limparCategoria
    );

    adicionarEvento(
        "btn-salvar-marca",
        "click",
        salvarMarca
    );

    adicionarEvento(
        "btn-limpar-marca",
        "click",
        limparMarca
    );

    adicionarEvento(
        "btn-salvar-cor",
        "click",
        salvarCor
    );

    adicionarEvento(
        "btn-limpar-cor",
        "click",
        limparCor
    );

    adicionarEvento(
        "btn-salvar-tamanho",
        "click",
        salvarTamanho
    );

    adicionarEvento(
        "btn-limpar-tamanho",
        "click",
        limparTamanho
    );

    adicionarEvento(
        "btn-salvar-imagens",
        "click",
        salvarImagens
    );

    adicionarEvento(
        "btn-limpar-imagens",
        "click",
        limparImagens
    );

    adicionarEvento(
        "btn-voltar",
        "click",
        voltarParaProdutos
    );

    adicionarEvento(
        "pesquisar-categoria",
        "input",
        pesquisarCategoria
    );

    adicionarEvento(
        "pesquisar-marca",
        "input",
        pesquisarMarca
    );

    adicionarEvento(
        "pesquisar-cor",
        "input",
        pesquisarCor
    );

    adicionarEvento(
        "pesquisar-tamanho",
        "input",
        pesquisarTamanho
    );

    adicionarEvento(
        "produto-imagens",
        "change",
        selecionarImagens
    );

    adicionarEvento(
        "imagem-produto",
        "change",
        carregarImagensDoProduto
    );

}


function adicionarEvento(id, evento, funcao) {

    const elemento = document.getElementById(id);

    if (elemento) {
        elemento.addEventListener(evento, funcao);
    }

}


// ======================================================
// ACCORDIONS
// ======================================================

function configurarAccordions() {

    const accordions =
        document.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {

        const cabecalho =
            accordion.querySelector(".accordion-header");

        if (!cabecalho) {
            return;
        }

        cabecalho.addEventListener("click", (evento) => {

            const clicouEmBotaoInterno =
                evento.target.closest(
                    "input, select, textarea, a"
                );

            if (clicouEmBotaoInterno) {
                return;
            }

            const estaAberto =
                accordion.classList.contains("active");

            accordions.forEach((item) => {
                item.classList.remove("active");
            });

            if (!estaAberto) {
                accordion.classList.add("active");
            }

        });

    });

}


// ======================================================
// BOTÕES "+" DO PRODUTO
// ======================================================

function configurarBotoesAuxiliares() {

    adicionarEvento(
        "abrir-categoria",
        "click",
        (evento) => {

            evento.preventDefault();

            abrirAccordion("accordion-categoria");

        }
    );

    adicionarEvento(
        "abrir-marca",
        "click",
        (evento) => {

            evento.preventDefault();

            abrirAccordion("accordion-marca");

        }
    );

}


function abrirAccordion(idAccordion) {

    const accordion =
        document.getElementById(idAccordion);

    if (!accordion) {
        return;
    }

    document
        .querySelectorAll(".accordion")
        .forEach((item) => {

            item.classList.remove("active");

        });

    accordion.classList.add("active");

    accordion.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// ======================================================
// PRODUTOS
// ======================================================

async function carregarProdutos() {

    try {

        const resposta =
            await requisicao(ROTAS.produto);

        listaProdutos = extrairLista(resposta);

        preencherSelectProdutos();

    } catch (erro) {

        console.error(
            "Erro ao carregar produtos:",
            erro
        );

        listaProdutos = [];

        preencherSelectProdutos();

    }

}


function preencherSelectProdutos() {

    const select =
        document.getElementById("imagem-produto");

    if (!select) {
        return;
    }

    removerOpcoesSelect(select);

    adicionarOpcaoSelect(
        select,
        "",
        "Selecione um produto"
    );

    listaProdutos.forEach((produto) => {

        const id =
            produto.idProduto ??
            produto.id;

        adicionarOpcaoSelect(
            select,
            id,
            produto.nome
        );

    });

}


async function salvarProduto() {

    const nome =
        obterValor("produto-nome");

    const codigo =
        obterValor("produto-codigo");

    const descricao =
        obterValor("produto-descricao");

    const precoAntigo =
        obterNumero("produto-preco-antigo");

    const precoPromocional =
        obterNumero("produto-preco-promocional");

    const quantidadeEstoque =
        obterNumero("produto-estoque");

    const categoriaId =
        obterValor("produto-categoria");

    const marcaId =
        obterValor("produto-marca");

    const ativo =
        obterValor("produto-status");


    if (nome === "") {

        alert("Informe o nome do produto.");

        focarCampo("produto-nome");

        return;

    }

    if (codigo === "") {

        alert("Informe o código do produto.");

        focarCampo("produto-codigo");

        return;

    }

    if (categoriaId === "") {

        alert("Selecione a categoria.");

        focarCampo("produto-categoria");

        return;

    }

    if (marcaId === "") {

        alert("Selecione a marca.");

        focarCampo("produto-marca");

        return;

    }

    if (precoAntigo < 0 || precoPromocional < 0) {

        alert("Os preços não podem ser negativos.");

        return;

    }

    if (quantidadeEstoque < 0) {

        alert(
            "A quantidade em estoque não pode ser negativa."
        );

        return;

    }

    const produto = {
        nome: nome,
        codigo: codigo,
        descricao: descricao || null,

        preco_antigo: precoAntigo,
        preco_promocional: precoPromocional,

        quantidade_estoque: quantidadeEstoque,

        ativo: Number(ativo),

        Loja_idLoja: 1,

        Categoria_idCategoria:
            Number(categoriaId),

        Marca_idMarca:
            Number(marcaId)
    };

    const botao =
        document.getElementById(
            "btn-salvar-produto"
        );

    try {

        definirCarregamento(botao, true);

        let resposta;

        if (produtoEditando === null) {

            resposta = await requisicao(
                ROTAS.produto,
                opcoesJson("POST", produto)
            );

        } else {

            resposta = await requisicao(
                `${ROTAS.produto}/${produtoEditando}`,
                opcoesJson("PUT", produto)
            );

        }

        const idProduto =
            produtoEditando ||
            resposta?.idProduto ||
            resposta?.insertId ||
            resposta?.dados?.insertId ||
            resposta?.produto?.idProduto;

        alert(
            produtoEditando === null
                ? "Produto cadastrado com sucesso."
                : "Produto atualizado com sucesso."
        );

        limparProduto();

        await carregarProdutos();

        if (idProduto) {

            const selectProdutoImagem =
                document.getElementById(
                    "imagem-produto"
                );

            if (selectProdutoImagem) {
                selectProdutoImagem.value =
                    String(idProduto);
            }

        }

    } catch (erro) {

        console.error(
            "Erro ao salvar produto:",
            erro
        );

        alert(erro.message);

    } finally {

        definirCarregamento(botao, false);

    }

}


function limparProduto() {

    produtoEditando = null;

    limparCampo("produto-nome");
    limparCampo("produto-codigo");
    limparCampo("produto-descricao");
    limparCampo("produto-preco-antigo");
    limparCampo("produto-preco-promocional");
    limparCampo("produto-estoque");

    definirValor(
        "produto-categoria",
        ""
    );

    definirValor(
        "produto-marca",
        ""
    );

    definirValor(
        "produto-status",
        "1"
    );

}


// ======================================================
// CATEGORIAS
// ======================================================

async function carregarCategorias() {

    try {

        const resposta =
            await requisicao(ROTAS.categoria);

        listaCategorias =
            extrairLista(resposta);

        preencherSelectCategorias();

        montarTabelaCategorias(
            listaCategorias
        );

    } catch (erro) {

        console.error(
            "Erro ao carregar categorias:",
            erro
        );

        listaCategorias = [];

        preencherSelectCategorias();

        montarTabelaCategorias([]);

    }

}


function preencherSelectCategorias() {

    const select =
        document.getElementById(
            "produto-categoria"
        );

    if (!select) {
        return;
    }

    const valorAtual = select.value;

    removerOpcoesSelect(select);

    adicionarOpcaoSelect(
        select,
        "",
        "Selecione uma categoria"
    );

    listaCategorias.forEach((categoria) => {

        const id =
            categoria.idCategoria ??
            categoria.id;

        adicionarOpcaoSelect(
            select,
            id,
            categoria.nome
        );

    });

    if (valorAtual) {
        select.value = valorAtual;
    }

}


function montarTabelaCategorias(categorias) {

    const tbody =
        document.getElementById(
            "tbody-categorias"
        );

    if (!tbody) {
        return;
    }

    limparElemento(tbody);

    if (categorias.length === 0) {

        adicionarLinhaVazia(
            tbody,
            4,
            "Nenhuma categoria cadastrada."
        );

        return;

    }

    categorias.forEach((categoria) => {

        const id =
            categoria.idCategoria ??
            categoria.id;

        const linha =
            tbody.insertRow();

        adicionarCelula(
            linha,
            id
        );

        adicionarCelula(
            linha,
            categoria.nome
        );

        const celulaStatus =
            linha.insertCell();

        const status =
            document.createElement("span");

        status.className = "status ativo";
        status.textContent = "Ativa";

        celulaStatus.appendChild(status);

        const celulaAcoes =
            linha.insertCell();

        adicionarBotoesTabela(
            celulaAcoes,
            () => editarCategoria(id),
            () => excluirCategoria(id)
        );

    });

}



function editarCategoria(id) {

    const categoria =
        listaCategorias.find((item) => {

            const itemId =
                item.idCategoria ??
                item.id;

            return Number(itemId) === Number(id);

        });

    if (!categoria) {
        return;
    }

    categoriaEditando = id;

    definirValor(
        "categoria-nome",
        categoria.nome
    );

    alterarTextoBotao(
        "btn-salvar-categoria",
        "Atualizar Categoria"
    );

    abrirAccordion(
        "accordion-categoria"
    );

    focarCampo("categoria-nome");

}


async function excluirCategoria(id) {

    const confirmar =
        window.confirm(
            "Deseja realmente excluir esta categoria?"
        );

    if (!confirmar) {
        return;
    }

    try {

        await requisicao(
            `${ROTAS.categoria}/${id}`,
            {
                method: "DELETE"
            }
        );

        alert(
            "Categoria excluída com sucesso."
        );

        await carregarCategorias();

    } catch (erro) {

        console.error(
            "Erro ao excluir categoria:",
            erro
        );

        alert(erro.message);

    }

}


function limparCategoria() {

    categoriaEditando = null;

    limparCampo("categoria-nome");

    alterarTextoBotao(
        "btn-salvar-categoria",
        "Salvar Categoria"
    );

}


function pesquisarCategoria() {

    const pesquisa =
        obterValor(
            "pesquisar-categoria"
        ).toLowerCase();

    const filtradas =
        listaCategorias.filter(
            (categoria) => {

                const nome =
                    String(
                        categoria.nome ?? ""
                    ).toLowerCase();

                return nome.includes(pesquisa);

            }
        );

    montarTabelaCategorias(filtradas);

}


// ======================================================
// MARCAS
// ======================================================

async function carregarMarcas() {

    try {

        const resposta =
            await requisicao(ROTAS.marca);

        listaMarcas =
            extrairLista(resposta);

        preencherSelectMarcas();

        montarTabelaMarcas(
            listaMarcas
        );

    } catch (erro) {

        console.error(
            "Erro ao carregar marcas:",
            erro
        );

        listaMarcas = [];

        preencherSelectMarcas();

        montarTabelaMarcas([]);

    }

}


function preencherSelectMarcas() {

    const select =
        document.getElementById(
            "produto-marca"
        );

    if (!select) {
        return;
    }

    const valorAtual = select.value;

    removerOpcoesSelect(select);

    adicionarOpcaoSelect(
        select,
        "",
        "Selecione uma marca"
    );

    listaMarcas.forEach((marca) => {

        const id =
            marca.idMarca ??
            marca.id;

        adicionarOpcaoSelect(
            select,
            id,
            marca.nome
        );

    });

    if (valorAtual) {
        select.value = valorAtual;
    }

}


function montarTabelaMarcas(marcas) {

    const tbody =
        document.getElementById(
            "tbody-marcas"
        );

    if (!tbody) {
        return;
    }

    limparElemento(tbody);

    if (marcas.length === 0) {

        adicionarLinhaVazia(
            tbody,
            4,
            "Nenhuma marca cadastrada."
        );

        return;

    }

    marcas.forEach((marca) => {

        const id =
            marca.idMarca ??
            marca.id;

        const linha =
            tbody.insertRow();

        adicionarCelula(
            linha,
            id
        );

        const celulaLogo =
            linha.insertCell();

        const imagemLogo =
            criarImagemTabela(
                obterUrlImagem(marca.logo)
            );

        celulaLogo.appendChild(imagemLogo);

        adicionarCelula(
            linha,
            marca.nome
        );

        const celulaAcoes =
            linha.insertCell();

        adicionarBotoesTabela(
            celulaAcoes,
            () => editarMarca(id),
            () => excluirMarca(id)
        );

    });

}


async function salvarMarca() {

    const nome =
        obterValor("marca-nome");

    const inputLogo =
        document.getElementById(
            "marca-logo"
        );

    const logo =
        inputLogo?.files[0];

    if (nome === "") {

        alert("Informe o nome da marca.");

        focarCampo("marca-nome");

        return;

    }

    const dados =
        new FormData();

    dados.append("nome", nome);

    if (logo) {
        dados.append("logo", logo);
    }

    const botao =
        document.getElementById(
            "btn-salvar-marca"
        );

    try {

        definirCarregamento(botao, true);

        const url =
            marcaEditando === null
                ? ROTAS.marca
                : `${ROTAS.marca}/${marcaEditando}`;

        const metodo =
            marcaEditando === null
                ? "POST"
                : "PUT";

        await requisicao(
            url,
            {
                method: metodo,
                body: dados
            }
        );

        alert(
            marcaEditando === null
                ? "Marca cadastrada com sucesso."
                : "Marca atualizada com sucesso."
        );

        limparMarca();

        await carregarMarcas();

    } catch (erro) {

        console.error(
            "Erro ao salvar marca:",
            erro
        );

        alert(erro.message);

    } finally {

        definirCarregamento(botao, false);

    }

}


function editarMarca(id) {

    const marca =
        listaMarcas.find((item) => {

            const itemId =
                item.idMarca ??
                item.id;

            return Number(itemId) === Number(id);

        });

    if (!marca) {
        return;
    }

    marcaEditando = id;

    definirValor(
        "marca-nome",
        marca.nome
    );

    alterarTextoBotao(
        "btn-salvar-marca",
        "Atualizar Marca"
    );

    abrirAccordion(
        "accordion-marca"
    );

    focarCampo("marca-nome");

}


async function excluirMarca(id) {

    const confirmar =
        window.confirm(
            "Deseja realmente excluir esta marca?"
        );

    if (!confirmar) {
        return;
    }

    try {

        await requisicao(
            `${ROTAS.marca}/${id}`,
            {
                method: "DELETE"
            }
        );

        alert(
            "Marca excluída com sucesso."
        );

        await carregarMarcas();

    } catch (erro) {

        console.error(
            "Erro ao excluir marca:",
            erro
        );

        alert(erro.message);

    }

}


function limparMarca() {

    marcaEditando = null;

    limparCampo("marca-nome");
    limparCampo("marca-logo");

    definirImagem(
        "imagem-preview-marca",
        "../assets/sem-imagem.png"
    );

    alterarTextoBotao(
        "btn-salvar-marca",
        "Salvar Marca"
    );

}


function pesquisarMarca() {

    const pesquisa =
        obterValor(
            "pesquisar-marca"
        ).toLowerCase();

    const filtradas =
        listaMarcas.filter((marca) => {

            const nome =
                String(
                    marca.nome ?? ""
                ).toLowerCase();

            return nome.includes(pesquisa);

        });

    montarTabelaMarcas(filtradas);

}


// ======================================================
// CORES
// ======================================================

async function carregarCores() {

    try {

        const resposta =
            await requisicao(ROTAS.cor);

        listaCores =
            extrairLista(resposta);

        montarTabelaCores(
            listaCores
        );

    } catch (erro) {

        console.error(
            "Erro ao carregar cores:",
            erro
        );

        listaCores = [];

        montarTabelaCores([]);

    }

}


function montarTabelaCores(cores) {

    const tbody =
        document.getElementById(
            "tbody-cores"
        );

    if (!tbody) {
        return;
    }

    limparElemento(tbody);

    if (cores.length === 0) {

        adicionarLinhaVazia(
            tbody,
            5,
            "Nenhuma cor cadastrada."
        );

        return;

    }

    cores.forEach((cor) => {

        const id =
            cor.idCores ??
            cor.idCor ??
            cor.id;

        const codigo =
            cor.codigo_cor ??
            "#000000";

        const linha =
            tbody.insertRow();

        adicionarCelula(
            linha,
            id
        );

        const celulaCor =
            linha.insertCell();

        const amostra =
            document.createElement("span");

        amostra.className =
            "preview-circle";

        amostra.style.display =
            "inline-block";

        amostra.style.width =
            "35px";

        amostra.style.height =
            "35px";

        amostra.style.backgroundColor =
            codigo;

        celulaCor.appendChild(amostra);

        adicionarCelula(
            linha,
            cor.nome
        );

        adicionarCelula(
            linha,
            codigo
        );

        const celulaAcoes =
            linha.insertCell();

        adicionarBotoesTabela(
            celulaAcoes,
            () => editarCor(id),
            () => excluirCor(id)
        );

    });

}


async function salvarCor() {

    const nome =
        obterValor("cor-nome");

    const codigo =
        obterValor("cor-codigo");

    if (nome === "") {

        alert("Informe o nome da cor.");

        focarCampo("cor-nome");

        return;

    }

    if (!validarCorHexadecimal(codigo)) {

        alert(
            "Informe um código válido, como #000000."
        );

        focarCampo("cor-codigo");

        return;

    }

    const cor = {
        nome: nome,
        codigo_cor: codigo
    };

    const botao =
        document.getElementById(
            "btn-salvar-cor"
        );

    try {

        definirCarregamento(botao, true);

        if (corEditando === null) {

            await requisicao(
                ROTAS.cor,
                opcoesJson("POST", cor)
            );

        } else {

            await requisicao(
                `${ROTAS.cor}/${corEditando}`,
                opcoesJson("PUT", cor)
            );

        }

        alert(
            corEditando === null
                ? "Cor cadastrada com sucesso."
                : "Cor atualizada com sucesso."
        );

        limparCor();

        await carregarCores();

    } catch (erro) {

        console.error(
            "Erro ao salvar cor:",
            erro
        );

        alert(erro.message);

    } finally {

        definirCarregamento(botao, false);

    }

}


function editarCor(id) {

    const cor =
        listaCores.find((item) => {

            const itemId =
                item.idCores ??
                item.idCor ??
                item.id;

            return Number(itemId) === Number(id);

        });

    if (!cor) {
        return;
    }

    corEditando = id;

    const codigo =
        cor.codigo_cor ??
        "#000000";

    definirValor(
        "cor-nome",
        cor.nome
    );

    definirValor(
        "cor-codigo",
        codigo
    );

    definirValor(
        "cor-picker",
        codigo
    );

    atualizarPreviewCor(codigo);

    alterarTextoBotao(
        "btn-salvar-cor",
        "Atualizar Cor"
    );

    abrirAccordion(
        "accordion-cor"
    );

}


async function excluirCor(id) {

    const confirmar =
        window.confirm(
            "Deseja realmente excluir esta cor?"
        );

    if (!confirmar) {
        return;
    }

    try {

        await requisicao(
            `${ROTAS.cor}/${id}`,
            {
                method: "DELETE"
            }
        );

        alert(
            "Cor excluída com sucesso."
        );

        await carregarCores();

    } catch (erro) {

        console.error(
            "Erro ao excluir cor:",
            erro
        );

        alert(erro.message);

    }

}


function limparCor() {

    corEditando = null;

    limparCampo("cor-nome");

    definirValor(
        "cor-codigo",
        "#000000"
    );

    definirValor(
        "cor-picker",
        "#000000"
    );

    atualizarPreviewCor("#000000");

    alterarTextoBotao(
        "btn-salvar-cor",
        "Salvar Cor"
    );

}


function pesquisarCor() {

    const pesquisa =
        obterValor(
            "pesquisar-cor"
        ).toLowerCase();

    const filtradas =
        listaCores.filter((cor) => {

            const nome =
                String(
                    cor.nome ?? ""
                ).toLowerCase();

            const codigo =
                String(
                    cor.codigo_cor ?? ""
                ).toLowerCase();

            return (
                nome.includes(pesquisa) ||
                codigo.includes(pesquisa)
            );

        });

    montarTabelaCores(filtradas);

}


// ======================================================
// TAMANHOS
// ======================================================

async function carregarTamanhos() {

    try {

        const resposta =
            await requisicao(ROTAS.tamanho);

        listaTamanhos =
            extrairLista(resposta);

        montarTabelaTamanhos(
            listaTamanhos
        );

    } catch (erro) {

        console.error(
            "Erro ao carregar tamanhos:",
            erro
        );

        listaTamanhos = [];

        montarTabelaTamanhos([]);

    }

}


function montarTabelaTamanhos(tamanhos) {

    const tbody =
        document.getElementById(
            "tbody-tamanhos"
        );

    if (!tbody) {
        return;
    }

    limparElemento(tbody);

    if (tamanhos.length === 0) {

        adicionarLinhaVazia(
            tbody,
            4,
            "Nenhum tamanho cadastrado."
        );

        return;

    }

    tamanhos.forEach((tamanho) => {

        const id =
            tamanho.idTamanho ??
            tamanho.id;

        const linha =
            tbody.insertRow();

        adicionarCelula(
            linha,
            id
        );

        const celulaImagem =
            linha.insertCell();

        const imagem =
            criarImagemTabela(
                obterUrlImagem(
                    tamanho.imagem
                )
            );

        celulaImagem.appendChild(imagem);

        adicionarCelula(
            linha,
            tamanho.tamanho
        );

        const celulaAcoes =
            linha.insertCell();

        adicionarBotoesTabela(
            celulaAcoes,
            () => editarTamanho(id),
            () => excluirTamanho(id)
        );

    });

}


async function salvarTamanho() {

    const tamanho =
        obterValor("tamanho-nome");

    const inputImagem =
        document.getElementById(
            "tamanho-imagem"
        );

    const imagem =
        inputImagem?.files[0];

    if (tamanho === "") {

        alert("Informe o tamanho.");

        focarCampo("tamanho-nome");

        return;

    }

    const dados =
        new FormData();

    dados.append(
        "tamanho",
        tamanho
    );

    if (imagem) {
        dados.append(
            "imagem",
            imagem
        );
    }

    const botao =
        document.getElementById(
            "btn-salvar-tamanho"
        );

    try {

        definirCarregamento(botao, true);

        const url =
            tamanhoEditando === null
                ? ROTAS.tamanho
                : `${ROTAS.tamanho}/${tamanhoEditando}`;

        const metodo =
            tamanhoEditando === null
                ? "POST"
                : "PUT";

        await requisicao(
            url,
            {
                method: metodo,
                body: dados
            }
        );

        alert(
            tamanhoEditando === null
                ? "Tamanho cadastrado com sucesso."
                : "Tamanho atualizado com sucesso."
        );

        limparTamanho();

        await carregarTamanhos();

    } catch (erro) {

        console.error(
            "Erro ao salvar tamanho:",
            erro
        );

        alert(erro.message);

    } finally {

        definirCarregamento(botao, false);

    }

}


function editarTamanho(id) {

    const tamanho =
        listaTamanhos.find((item) => {

            const itemId =
                item.idTamanho ??
                item.id;

            return Number(itemId) === Number(id);

        });

    if (!tamanho) {
        return;
    }

    tamanhoEditando = id;

    definirValor(
        "tamanho-nome",
        tamanho.tamanho
    );

    alterarTextoBotao(
        "btn-salvar-tamanho",
        "Atualizar Tamanho"
    );

    abrirAccordion(
        "accordion-tamanho"
    );

    focarCampo("tamanho-nome");

}


async function excluirTamanho(id) {

    const confirmar =
        window.confirm(
            "Deseja realmente excluir este tamanho?"
        );

    if (!confirmar) {
        return;
    }

    try {

        await requisicao(
            `${ROTAS.tamanho}/${id}`,
            {
                method: "DELETE"
            }
        );

        alert(
            "Tamanho excluído com sucesso."
        );

        await carregarTamanhos();

    } catch (erro) {

        console.error(
            "Erro ao excluir tamanho:",
            erro
        );

        alert(erro.message);

    }

}


function limparTamanho() {

    tamanhoEditando = null;

    limparCampo("tamanho-nome");
    limparCampo("tamanho-imagem");

    definirImagem(
        "preview-imagem-tamanho",
        "../assets/sem-imagem.png"
    );

    alterarTextoBotao(
        "btn-salvar-tamanho",
        "Salvar Tamanho"
    );

}


function pesquisarTamanho() {

    const pesquisa =
        obterValor(
            "pesquisar-tamanho"
        ).toLowerCase();

    const filtrados =
        listaTamanhos.filter(
            (tamanho) => {

                const nome =
                    String(
                        tamanho.tamanho ?? ""
                    ).toLowerCase();

                return nome.includes(pesquisa);

            }
        );

    montarTabelaTamanhos(filtrados);

}


// ======================================================
// IMAGENS
// ======================================================

function selecionarImagens(evento) {

    imagensSelecionadas =
        Array.from(
            evento.target.files
        );

    mostrarPreviewImagens();

}


function mostrarPreviewImagens() {

    const container =
        document.getElementById(
            "preview-imagens"
        );

    if (!container) {
        return;
    }

    limparElemento(container);

    if (imagensSelecionadas.length === 0) {

        const mensagem =
            document.createElement("p");

        mensagem.textContent =
            "Nenhuma imagem selecionada.";

        container.appendChild(mensagem);

        return;

    }

    imagensSelecionadas.forEach(
        (arquivo, indice) => {

            const item =
                document.createElement("div");

            item.className =
                "preview-item";

            const imagem =
                document.createElement("img");

            imagem.src =
                URL.createObjectURL(arquivo);

            imagem.alt =
                arquivo.name;

            const botao =
                document.createElement("button");

            botao.type = "button";
            botao.className = "btn-delete";
            botao.textContent = "Remover";

            botao.addEventListener(
                "click",
                () => {

                    imagensSelecionadas.splice(
                        indice,
                        1
                    );

                    mostrarPreviewImagens();

                }
            );

            item.appendChild(imagem);
            item.appendChild(botao);

            container.appendChild(item);

        }
    );

}


async function salvarImagens() {

    const produtoId =
        obterValor("imagem-produto");

    if (produtoId === "") {

        alert(
            "Selecione o produto que receberá as imagens."
        );

        focarCampo("imagem-produto");

        return;

    }

    if (imagensSelecionadas.length === 0) {

        alert(
            "Selecione pelo menos uma imagem."
        );

        return;

    }

    const botao =
        document.getElementById(
            "btn-salvar-imagens"
        );

    try {

        definirCarregamento(botao, true);

        for (
            const arquivo
            of imagensSelecionadas
        ) {

            const dados =
                new FormData();

            dados.append(
                "arquivo",
                arquivo
            );

            dados.append(
                "Produto_idProduto",
                produtoId
            );

            await requisicao(
                ROTAS.imagem,
                {
                    method: "POST",
                    body: dados
                }
            );

        }

        alert(
            "Imagens cadastradas com sucesso."
        );

        imagensSelecionadas = [];

        limparCampo("produto-imagens");

        mostrarPreviewImagens();

        await carregarImagensDoProduto();

    } catch (erro) {

        console.error(
            "Erro ao salvar imagens:",
            erro
        );

        alert(erro.message);

    } finally {

        definirCarregamento(botao, false);

    }

}


async function carregarImagensDoProduto() {

    const produtoId =
        obterValor("imagem-produto");

    const galeria =
        document.getElementById(
            "galeria-imagens"
        );

    if (!galeria) {
        return;
    }

    limparElemento(galeria);

    if (produtoId === "") {
        return;
    }

    try {

        const resposta =
            await requisicao(
                `${ROTAS.imagem}/produto/${produtoId}`
            );

        const imagens =
            extrairLista(resposta);

        montarGaleriaImagens(imagens);

    } catch (erro) {

        console.error(
            "Erro ao carregar imagens:",
            erro
        );

        const mensagem =
            document.createElement("p");

        mensagem.textContent =
            "Não foi possível carregar as imagens.";

        galeria.appendChild(mensagem);

    }

}


function montarGaleriaImagens(imagens) {

    const galeria =
        document.getElementById(
            "galeria-imagens"
        );

    if (!galeria) {
        return;
    }

    limparElemento(galeria);

    if (imagens.length === 0) {

        const mensagem =
            document.createElement("p");

        mensagem.textContent =
            "Este produto ainda não possui imagens.";

        galeria.appendChild(mensagem);

        return;

    }

    imagens.forEach((registro) => {

        const id =
            registro.idImagem_Produto ??
            registro.idImagem ??
            registro.id;

        const item =
            document.createElement("div");

        item.className =
            "preview-item";

        const imagem =
            document.createElement("img");

        imagem.src =
            obterUrlImagem(
                registro.arquivo ??
                registro
            );

        imagem.alt =
            "Imagem do produto";

        const botao =
            document.createElement("button");

        botao.type = "button";
        botao.className = "btn-delete";
        botao.textContent = "Excluir";

        botao.addEventListener(
            "click",
            () => excluirImagem(id)
        );

        item.appendChild(imagem);
        item.appendChild(botao);

        galeria.appendChild(item);

    });

}


async function excluirImagem(id) {

    const confirmar =
        window.confirm(
            "Deseja excluir esta imagem?"
        );

    if (!confirmar) {
        return;
    }

    try {

        await requisicao(
            `${ROTAS.imagem}/${id}`,
            {
                method: "DELETE"
            }
        );

        alert(
            "Imagem excluída com sucesso."
        );

        await carregarImagensDoProduto();

    } catch (erro) {

        console.error(
            "Erro ao excluir imagem:",
            erro
        );

        alert(erro.message);

    }

}


function limparImagens() {

    imagensSelecionadas = [];

    definirValor(
        "imagem-produto",
        ""
    );

    limparCampo(
        "produto-imagens"
    );

    const preview =
        document.getElementById(
            "preview-imagens"
        );

    const galeria =
        document.getElementById(
            "galeria-imagens"
        );

    if (preview) {
        limparElemento(preview);
    }

    if (galeria) {
        limparElemento(galeria);
    }

}


// ======================================================
// PRÉ-VISUALIZAÇÕES
// ======================================================

function configurarPreVisualizacoes() {

    const inputLogo =
        document.getElementById(
            "marca-logo"
        );

    const inputTamanho =
        document.getElementById(
            "tamanho-imagem"
        );

    const seletorCor =
        document.getElementById(
            "cor-picker"
        );

    const codigoCor =
        document.getElementById(
            "cor-codigo"
        );


    if (inputLogo) {

        inputLogo.addEventListener(
            "change",
            () => {

                mostrarPreviewArquivo(
                    inputLogo,
                    "imagem-preview-marca"
                );

            }
        );

    }


    if (inputTamanho) {

        inputTamanho.addEventListener(
            "change",
            () => {

                mostrarPreviewArquivo(
                    inputTamanho,
                    "preview-imagem-tamanho"
                );

            }
        );

    }


    if (seletorCor) {

        seletorCor.addEventListener(
            "input",
            () => {

                definirValor(
                    "cor-codigo",
                    seletorCor.value
                );

                atualizarPreviewCor(
                    seletorCor.value
                );

            }
        );

    }


    if (codigoCor) {

        codigoCor.addEventListener(
            "input",
            () => {

                let codigo =
                    codigoCor.value.trim();

                if (
                    codigo !== "" &&
                    !codigo.startsWith("#")
                ) {

                    codigo =
                        `#${codigo}`;

                    codigoCor.value =
                        codigo;

                }

                if (
                    validarCorHexadecimal(
                        codigo
                    )
                ) {

                    definirValor(
                        "cor-picker",
                        codigo
                    );

                    atualizarPreviewCor(
                        codigo
                    );

                }

            }
        );

    }

}


function mostrarPreviewArquivo(
    input,
    idImagem
) {

    const arquivo =
        input.files[0];

    if (!arquivo) {
        return;
    }

    if (
        !arquivo.type.startsWith(
            "image/"
        )
    ) {

        alert(
            "Selecione um arquivo de imagem válido."
        );

        input.value = "";

        return;

    }

    definirImagem(
        idImagem,
        URL.createObjectURL(arquivo)
    );

}


function atualizarPreviewCor(codigo) {

    const preview =
        document.getElementById(
            "preview-cor"
        );

    const texto =
        document.getElementById(
            "preview-cor-texto"
        );

    if (preview) {
        preview.style.backgroundColor =
            codigo;
    }

    if (texto) {
        texto.textContent =
            codigo.toUpperCase();
    }

}


// ======================================================
// FUNÇÕES AUXILIARES DA INTERFACE
// ======================================================

function adicionarOpcaoSelect(
    select,
    valor,
    texto
) {

    const opcao =
        document.createElement("option");

    opcao.value =
        valor ?? "";

    opcao.textContent =
        texto ?? "";

    select.appendChild(opcao);

}


function removerOpcoesSelect(select) {

    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }

}


function adicionarCelula(
    linha,
    conteudo
) {

    const celula =
        linha.insertCell();

    celula.textContent =
        conteudo ?? "";

    return celula;

}


function adicionarLinhaVazia(
    tbody,
    quantidadeColunas,
    mensagem
) {

    const linha =
        tbody.insertRow();

    const celula =
        linha.insertCell();

    celula.colSpan =
        quantidadeColunas;

    celula.textContent =
        mensagem;

    celula.style.textAlign =
        "center";

}


function adicionarBotoesTabela(
    celula,
    editar,
    excluir
) {

    const botaoEditar =
        document.createElement("button");

    botaoEditar.type = "button";
    botaoEditar.className = "btn-edit";
    botaoEditar.textContent = "Editar";

    botaoEditar.addEventListener(
        "click",
        editar
    );


    const botaoExcluir =
        document.createElement("button");

    botaoExcluir.type = "button";
    botaoExcluir.className = "btn-delete";
    botaoExcluir.textContent = "Excluir";

    botaoExcluir.addEventListener(
        "click",
        excluir
    );


    celula.appendChild(botaoEditar);
    celula.appendChild(
        document.createTextNode(" ")
    );
    celula.appendChild(botaoExcluir);

}


function criarImagemTabela(url) {

    const imagem =
        document.createElement("img");

    imagem.src =
        url ||
        "../assets/sem-imagem.png";

    imagem.alt =
        "Imagem cadastrada";

    imagem.addEventListener(
        "error",
        () => {

            imagem.src =
                "../assets/sem-imagem.png";

        },
        {
            once: true
        }
    );

    return imagem;

}


function obterUrlImagem(valor) {

    if (!valor) {
        return "../assets/sem-imagem.png";
    }

    if (typeof valor === "string") {

        if (
            valor.startsWith("http") ||
            valor.startsWith("data:") ||
            valor.startsWith("blob:")
        ) {

            return valor;

        }

        return valor;

    }

    if (valor.url) {
        return valor.url;
    }

    if (valor.caminho) {
        return valor.caminho;
    }

    if (valor.arquivo_url) {
        return valor.arquivo_url;
    }

    if (valor.data) {

        try {

            const bytes =
                new Uint8Array(
                    valor.data
                );

            let binario = "";

            bytes.forEach((byte) => {

                binario +=
                    String.fromCharCode(
                        byte
                    );

            });

            return (
                "data:image/jpeg;base64," +
                btoa(binario)
            );

        } catch (erro) {

            console.error(
                "Erro ao converter imagem:",
                erro
            );

        }

    }

    return "../assets/sem-imagem.png";

}


function obterValor(id) {

    const elemento =
        document.getElementById(id);

    if (!elemento) {
        return "";
    }

    return String(
        elemento.value ?? ""
    ).trim();

}


function obterNumero(id) {

    const valor =
        obterValor(id);

    if (valor === "") {
        return 0;
    }

    const numero =
        Number(valor);

    return Number.isNaN(numero)
        ? 0
        : numero;

}


function definirValor(id, valor) {

    const elemento =
        document.getElementById(id);

    if (elemento) {
        elemento.value =
            valor ?? "";
    }

}


function limparCampo(id) {

    definirValor(id, "");

}


function focarCampo(id) {

    const elemento =
        document.getElementById(id);

    if (elemento) {
        elemento.focus();
    }

}


function definirImagem(id, url) {

    const imagem =
        document.getElementById(id);

    if (imagem) {
        imagem.src = url;
    }

}


function limparElemento(elemento) {

    while (elemento.firstChild) {
        elemento.removeChild(
            elemento.firstChild
        );
    }

}


function alterarTextoBotao(
    id,
    texto
) {

    const botao =
        document.getElementById(id);

    if (!botao) {
        return;
    }

    const icone =
        botao.querySelector("i");

    botao.textContent = "";

    if (icone) {
        botao.appendChild(icone);
        botao.appendChild(
            document.createTextNode(" ")
        );
    }

    botao.appendChild(
        document.createTextNode(texto)
    );

}


function definirCarregamento(
    botao,
    carregando
) {

    if (!botao) {
        return;
    }

    if (carregando) {

        botao.disabled = true;
        botao.dataset.textoOriginal =
            botao.textContent;

        botao.textContent =
            "Aguarde...";

    } else {

        botao.disabled = false;

        if (
            botao.dataset.textoOriginal
        ) {

            botao.textContent =
                botao.dataset.textoOriginal;

            delete botao.dataset.textoOriginal;

        }

    }

}


function validarCorHexadecimal(codigo) {

    return /^#[0-9A-Fa-f]{6}$/.test(
        codigo
    );

}


function voltarParaProdutos() {

    window.location.href =
        "./produtolojista.html";

}


//======================================================
// CADASTRO CATEGORIA
//======================================================

document.getElementById("btn-salvar-categoria").
    addEventListener("click", function () {
        //capturar os dados do input
        const categoriaNome
            = document.getElementById("categoria-nome").value;

        // criar um if para validar se o campo está vazio    
        if (categoriaNome === "") {
            alert("Por favor, preencha o nome da categoria.");
            return;
        }

        // criar um objeto com os dados da categoria
        const categoria = {
            nome: categoriaNome

        };

        // enviar os dados para o servidor
        fetch("http://localhost:3000/categorias", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(categoria)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Categoria cadastrada:", data);
                alert("Categoria cadastrada com sucesso!");
            })
            .catch(error => {
                console.error("Erro ao cadastrar categoria:", error);
                alert("Erro ao cadastrar categoria.");
            });
    });
