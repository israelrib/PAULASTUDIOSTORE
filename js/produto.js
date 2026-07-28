//======================================================
// DADOS DO PRODUTO
//======================================================

const produto = {

    nome: "Kit 3 Conjuntos Top + Short Legging",

    descricao:
        "Confeccionado em tecido macio, com excelente elasticidade e toque suave. O conjunto proporciona ajuste perfeito ao corpo, valorizando a silhueta e oferecendo conforto durante todo o treino.",

    precoAntigo: 120.50,

    precoPromocional: 85.43,

    desconto: "-15%",

    estoque: 10,

    avaliacao: 4.5,

    favorito: false,

    imagens: [

        "/assets/produto1.png",

        "/assets/produto2.png",

        "/assets/produto3.png",

        "/assets/produto4.png"

    ],

    cores: [

        "ROSA",

        "VERDE",

        "PRETO"

    ],

    tamanhos: [

        "P",

        "M",

        "G",

        "GG"

    ]

};

//======================================================
// FORMATAR PREÇO
//======================================================

function formatarPreco(valor){

    return valor.toLocaleString(

        "pt-BR",

        {

            style:"currency",

            currency:"BRL"

        }

    );

}

//======================================================
// PREENCHER DADOS
//======================================================

document.getElementById("nome-produto").textContent =
produto.nome;

document.getElementById("descricao-produto").textContent =
produto.descricao;

document.getElementById("preco-antigo").textContent =
formatarPreco(produto.precoAntigo);

document.getElementById("preco-promocional").textContent =
formatarPreco(produto.precoPromocional);

document.getElementById("desconto").textContent =
produto.desconto;

document.getElementById("estoque-disponivel").textContent =
`Disponível em estoque: ${produto.estoque} unidades`;

document.getElementById("valor-avaliacao").textContent =
`${produto.avaliacao}/5`;


//======================================================
// ESTRELAS
//======================================================

const estrelas =
document.getElementById("estrela-avaliacao");

let textoEstrelas = "";

for(let i=1;i<=5;i++){

    if(i<=Math.floor(produto.avaliacao)){

        textoEstrelas+="★";

    }else{

        textoEstrelas+="☆";

    }

}

estrelas.textContent = textoEstrelas;


//======================================================
// IMAGEM PRINCIPAL
//======================================================

const imagemMaior =
document.getElementById("imagem-maior");

imagemMaior.src =
produto.imagens[0];


//======================================================
// MINIATURAS
//======================================================

const miniaturas = [

    document.getElementById("imagem-miniatura-1"),

    document.getElementById("imagem-miniatura-2"),

    document.getElementById("imagem-miniatura-3"),

    document.getElementById("imagem-miniatura-4")

];

const botoesMiniaturas = [

    document.getElementById("miniatura-1"),

    document.getElementById("miniatura-2"),

    document.getElementById("miniatura-3"),

    document.getElementById("miniatura-4")

];

produto.imagens.forEach((imagem,indice)=>{

    miniaturas[indice].src = imagem;

});


produto.imagens.forEach((imagem,indice)=>{

    botoesMiniaturas[indice].addEventListener(

        "click",

        ()=>{

            imagemMaior.src = imagem;

            botoesMiniaturas.forEach(botao=>{

                botao.classList.remove("ativa");

            });

            botoesMiniaturas[indice].classList.add("ativa");

        }

    );

});


//======================================================
// ESCONDER MINIATURAS NÃO UTILIZADAS
//======================================================

for(

    let i=produto.imagens.length;

    i<miniaturas.length;

    i++

){

    document
    .getElementById(`miniatura-${i+1}`)
    .classList
    .add("oculta");

}

//======================================================
// SELEÇÃO DE CORES
//======================================================

const botoesCores = [

    document.getElementById("cor-1"),

    document.getElementById("cor-2"),

    document.getElementById("cor-3")

];

const corSelecionadaTexto =
    document.getElementById("cor-selecionada");

const coresVisuais = {

    ROSA: "#d88f9a",

    VERDE: "#687b67",

    PRETO: "#1f1f1f"

};


// PREENCHER OS BOTÕES DE CORES

botoesCores.forEach((botao, indice) => {

    const cor = produto.cores[indice];

    if (cor) {

        botao.style.backgroundColor =
            coresVisuais[cor] || "#cccccc";

        botao.title = cor;

        botao.setAttribute(
            "aria-label",
            `Selecionar a cor ${cor}`
        );

    } else {

        botao.classList.add("oculta");

    }

});


// DEFINIR A PRIMEIRA COR COMO SELECIONADA

let corSelecionada = produto.cores[0];

corSelecionadaTexto.textContent =
    corSelecionada;

botoesCores[0].classList.add("ativa");


// EVENTO DE SELEÇÃO DAS CORES

botoesCores.forEach((botao, indice) => {

    if (!produto.cores[indice]) {

        return;

    }

    botao.addEventListener("click", () => {

        botoesCores.forEach((item) => {

            item.classList.remove("ativa");

        });

        botao.classList.add("ativa");

        corSelecionada =
            produto.cores[indice];

        corSelecionadaTexto.textContent =
            corSelecionada;

    });

});


//======================================================
// SELEÇÃO DE TAMANHOS
//======================================================

const botoesTamanhos = [

    document.getElementById("tamanho-1"),

    document.getElementById("tamanho-2"),

    document.getElementById("tamanho-3"),

    document.getElementById("tamanho-4")

];


// PREENCHER OS BOTÕES DE TAMANHO

botoesTamanhos.forEach((botao, indice) => {

    const tamanho = produto.tamanhos[indice];

    if (tamanho) {

        botao.textContent = tamanho;

        botao.setAttribute(
            "aria-label",
            `Selecionar o tamanho ${tamanho}`
        );

    } else {

        botao.classList.add("oculta");

    }

});


// DEFINIR O PRIMEIRO TAMANHO COMO SELECIONADO

let tamanhoSelecionado =
    produto.tamanhos[0];

botoesTamanhos[0].classList.add("ativa");


// EVENTO DE SELEÇÃO DOS TAMANHOS

botoesTamanhos.forEach((botao, indice) => {

    if (!produto.tamanhos[indice]) {

        return;

    }

    botao.addEventListener("click", () => {

        botoesTamanhos.forEach((item) => {

            item.classList.remove("ativa");

        });

        botao.classList.add("ativa");

        tamanhoSelecionado =
            produto.tamanhos[indice];

    });

});


//======================================================
// CONTROLE DE QUANTIDADE
//======================================================

let quantidadeSelecionada = 1;

const botaoAumentar =
    document.getElementById("aumentar");

const botaoDiminuir =
    document.getElementById("diminuir");

const numeroQuantidade =
    document.getElementById("numero-quantidade");


// MOSTRAR QUANTIDADE INICIAL

numeroQuantidade.textContent =
    quantidadeSelecionada;


// AUMENTAR QUANTIDADE

botaoAumentar.addEventListener("click", () => {

    if (
        quantidadeSelecionada <
        produto.estoque
    ) {

        quantidadeSelecionada++;

        numeroQuantidade.textContent =
            quantidadeSelecionada;

    } else {

        alert(
            "Você atingiu o limite disponível em estoque."
        );

    }

});


// DIMINUIR QUANTIDADE

botaoDiminuir.addEventListener("click", () => {

    if (quantidadeSelecionada > 1) {

        quantidadeSelecionada--;

        numeroQuantidade.textContent =
            quantidadeSelecionada;

    } else {

        alert(
            "A quantidade mínima do produto é 1."
        );

    }

});


//======================================================
// BOTÃO FAVORITAR
//======================================================

const botaoFavoritar =
    document.getElementById("btn-favoritar");

const iconeFavorito =
    document.getElementById("icone-favorito");

const textoFavorito =
    document.getElementById("texto-favorito");


botaoFavoritar.addEventListener("click", () => {

    produto.favorito =
        !produto.favorito;

    if (produto.favorito) {

        botaoFavoritar.classList.add("ativo");

        iconeFavorito.textContent = "♥";

        textoFavorito.textContent =
            "Favoritado";

    } else {

        botaoFavoritar.classList.remove("ativo");

        iconeFavorito.textContent = "♡";

        textoFavorito.textContent =
            "Favoritar";

    }

});