/*=====================================================
    CONFIGURAÇÕES DA PÁGINA
=====================================================*/

document.title = "Checkout";

/*=====================================================
    HEADER
=====================================================*/

document.getElementById("logo-img").src = "../assets/logo.png";
document.getElementById("logo-img").alt = "Logo Paula Store";

document.getElementById("logo-text").textContent = "Paula Studio Store";

document.getElementById("menu-home").textContent = "Home";
document.getElementById("menu-produtos").textContent = "Produtos";
document.getElementById("menu-carrinho").textContent = "Carrinho";
document.getElementById("menu-perfil").textContent = "Minha Conta";

document.getElementById("menu-home").href = "#";
document.getElementById("menu-produtos").href = "#";
document.getElementById("menu-carrinho").href = "#checkout";
document.getElementById("menu-perfil").href = "#";

/*=====================================================
    TÍTULOS DA PÁGINA
=====================================================*/

document.getElementById("cart-title").textContent = "Meu Carrinho";

document.getElementById("address-title").textContent = "Endereço de Entrega";

document.getElementById("btn-new-address").textContent = "+ Novo Endereço";

document.getElementById("summary-title").textContent = "Resumo do Pedido";

document.getElementById("subtotal-label").textContent = "Subtotal";

document.getElementById("shipping-label").textContent = "Frete";

document.getElementById("discount-label").textContent = "Desconto";

document.getElementById("total-label").textContent = "Total";

document.getElementById("coupon-input").placeholder = "Cupom de desconto";

document.getElementById("btn-coupon").textContent = "Aplicar";

document.getElementById("btn-checkout").textContent = "Finalizar Pedido";

document.getElementById("secure-info").textContent =
"Pagamento 100% seguro";

/*=====================================================
    FOOTER
=====================================================*/

document.getElementById("footer-copy").textContent =
"© 2025 Paula Store";

document.getElementById("footer-policy").textContent =
"Política de Privacidade";

document.getElementById("footer-terms").textContent =
"Termos de Uso";

document.getElementById("footer-contact").textContent =
"Contato";

/*=====================================================
    PRODUTOS
=====================================================*/

const produtos = [

    {

        id:1,

        nome:"Headphone Premium Wireless",

        cor:"Preto",

        modelo:"Bluetooth 5.3",

        preco:499.90,

        quantidade:1,

        imagem:"../assets/produto8.png"

    },

    {

        id:2,

        nome:"Mouse Gamer RGB",

        cor:"Preto",

        modelo:"USB",

        preco:189.90,

        quantidade:2,

        imagem:"../assets/produto7.png"

    },

    {

        id:3,

        nome:"Teclado Mecânico",

        cor:"Branco",

        modelo:"ABNT2",

        preco:349.90,

        quantidade:1,

        imagem:"../assets/produto6.png"

    }

];

/*=====================================================
    ENDEREÇOS
=====================================================*/

const enderecos = [

    {

        id:1,

        tipo:"Casa",

        titulo:"Principal",

        rua:"Rua das Flores, 120",

        cidade:"São Paulo - SP",

        cep:"01000-000",

        principal:true

    },

    {

        id:2,

        tipo:"Trabalho",

        titulo:"Escritório",

        rua:"Av. Paulista, 1500",

        cidade:"São Paulo - SP",

        cep:"01310-100",

        principal:false

    }

];

/*=====================================================
    PEDIDO
=====================================================*/

const pedido = {

    frete:0,

    desconto:0,

    cupom:"",

    subtotal:0,

    total:0

};

/*=====================================================
    ELEMENTOS
=====================================================*/

const listaProdutos =
document.getElementById("cart-products");

const listaEnderecos =
document.getElementById("address-list");

const subtotalValue =
document.getElementById("subtotal-value");

const shippingValue =
document.getElementById("shipping-value");

const discountValue =
document.getElementById("discount-value");

const totalValue =
document.getElementById("total-value");

const pixInfo =
document.getElementById("pix-info");

/*=====================================================
    FORMATAÇÃO MONETÁRIA
=====================================================*/

function moeda(valor){

    return valor.toLocaleString("pt-BR",{

        style:"currency",

        currency:"BRL"

    });

}

/*=====================================================
    CALCULA SUBTOTAL
=====================================================*/

function calcularSubtotal(){

    let subtotal = 0;

    produtos.forEach(produto=>{

        subtotal += produto.preco * produto.quantidade;

    });

    pedido.subtotal = subtotal;

}

/*=====================================================
    CALCULA FRETE
=====================================================*/

function calcularFrete(){

    if(pedido.subtotal >= 500){

        pedido.frete = 0;

    }else{

        pedido.frete = 29.90;

    }

}

/*=====================================================
    CALCULA TOTAL
=====================================================*/

function calcularTotal(){

    pedido.total =
    pedido.subtotal +
    pedido.frete -
    pedido.desconto;

}

/*=====================================================
    ATUALIZA RESUMO
=====================================================*/

function atualizarResumo(){

    calcularSubtotal();

    calcularFrete();

    calcularTotal();

    subtotalValue.textContent =
    moeda(pedido.subtotal);

    shippingValue.textContent =
    pedido.frete === 0
    ? "Grátis"
    : moeda(pedido.frete);

    discountValue.textContent =
    "-" + moeda(pedido.desconto);

    totalValue.textContent =
    moeda(pedido.total);

    pixInfo.textContent =
    "ou 10x de " +
    moeda(pedido.total/10) +
    " sem juros.";

}
/*=====================================================
    RENDERIZA PRODUTOS
=====================================================*/

function renderizarProdutos() {

    listaProdutos.innerHTML = "";

    produtos.forEach((produto) => {

        const card = document.createElement("article");
        card.className = "product-item";

        card.innerHTML = `

            <img
                class="product-image"
                src="${produto.imagem}"
                alt="${produto.nome}">

            <div class="product-info">

                <h3>${produto.nome}</h3>

                <p><strong>Cor:</strong> ${produto.cor}</p>

                <p><strong>Modelo:</strong> ${produto.modelo}</p>

                <div class="product-actions">

                    <button
                        class="btn-minus"
                        data-id="${produto.id}">
                        −
                    </button>

                    <input
                        type="number"
                        value="${produto.quantidade}"
                        min="1"
                        readonly>

                    <button
                        class="btn-plus"
                        data-id="${produto.id}">
                        +
                    </button>

                    <button
                        class="btn-remove"
                        data-id="${produto.id}">
                        Remover
                    </button>

                </div>

            </div>

            <div class="product-price">

                ${moeda(produto.preco * produto.quantidade)}

            </div>

        `;

        listaProdutos.appendChild(card);

    });

    adicionarEventosProdutos();

}

/*=====================================================
    RENDERIZA ENDEREÇOS
=====================================================*/

function renderizarEnderecos() {

    listaEnderecos.innerHTML = "";

    enderecos.forEach((endereco) => {

        const card = document.createElement("div");

        card.className = endereco.principal
            ? "address-card active"
            : "address-card";

        card.dataset.id = endereco.id;

        card.innerHTML = `

            <div class="address-type">

                ${endereco.tipo}

            </div>

            <div class="address-title">

                ${endereco.titulo}

            </div>

            <div class="address-text">

                ${endereco.rua}

            </div>

            <div class="address-text">

                ${endereco.cidade}

            </div>

            <div class="address-text">

                CEP ${endereco.cep}

            </div>

        `;

        listaEnderecos.appendChild(card);

    });

    adicionarEventosEnderecos();

}

/*=====================================================
    EVENTOS DOS PRODUTOS
=====================================================*/

function adicionarEventosProdutos() {

    const botoesMais =
        document.querySelectorAll(".btn-plus");

    const botoesMenos =
        document.querySelectorAll(".btn-minus");

    const botoesRemover =
        document.querySelectorAll(".btn-remove");



    botoesMais.forEach((botao) => {

        botao.addEventListener("click", () => {

            const id = Number(botao.dataset.id);

            const produto =
                produtos.find(p => p.id === id);

            produto.quantidade++;

            atualizarResumo();

            renderizarProdutos();

        });

    });



    botoesMenos.forEach((botao) => {

        botao.addEventListener("click", () => {

            const id = Number(botao.dataset.id);

            const produto =
                produtos.find(p => p.id === id);

            if (produto.quantidade > 1) {

                produto.quantidade--;

            }

            atualizarResumo();

            renderizarProdutos();

        });

    });



    botoesRemover.forEach((botao) => {

        botao.addEventListener("click", () => {

            const id = Number(botao.dataset.id);

            const indice =
                produtos.findIndex(p => p.id === id);

            if (indice >= 0) {

                produtos.splice(indice, 1);

            }

            atualizarResumo();

            renderizarProdutos();

        });

    });

}

/*=====================================================
    EVENTOS DOS ENDEREÇOS
=====================================================*/

function adicionarEventosEnderecos() {

    const cards =
        document.querySelectorAll(".address-card");

    cards.forEach((card) => {

        card.addEventListener("click", () => {

            const id =
                Number(card.dataset.id);

            enderecos.forEach((endereco) => {

                endereco.principal =
                    endereco.id === id;

            });

            renderizarEnderecos();

        });

    });

}
/*=====================================================
    APLICAR CUPOM
=====================================================*/

function aplicarCupom() {

    const campoCupom =
        document.getElementById("coupon-input");

    const codigo =
        campoCupom.value.trim().toUpperCase();

    pedido.desconto = 0;

    switch (codigo) {

        case "DESCONTO10":
            pedido.desconto = pedido.subtotal * 0.10;
            break;

        case "FRETEGRATIS":
            pedido.frete = 0;
            break;

        case "PAULA20":
            pedido.desconto = pedido.subtotal * 0.20;
            break;

        case "":
            pedido.desconto = 0;
            break;

        default:

            alert("Cupom inválido.");

            campoCupom.focus();

            atualizarResumo();

            return;

    }

    calcularTotal();

    atualizarResumo();

}

/*=====================================================
    NOVO ENDEREÇO
=====================================================*/

function novoEndereco() {

    const nome = prompt("Nome do endereço");

    if (!nome) return;

    const rua = prompt("Rua");

    if (!rua) return;

    const cidade = prompt("Cidade");

    if (!cidade) return;

    const cep = prompt("CEP");

    if (!cep) return;

    enderecos.forEach(endereco => {

        endereco.principal = false;

    });

    enderecos.push({

        id: Date.now(),

        tipo: "Novo",

        titulo: nome,

        rua: rua,

        cidade: cidade,

        cep: cep,

        principal: true

    });

    renderizarEnderecos();

}

/*=====================================================
    FINALIZAR PEDIDO
=====================================================*/

function finalizarPedido() {

    if (produtos.length === 0) {

        alert("Seu carrinho está vazio.");

        return;

    }

    const endereco =
        enderecos.find(e => e.principal);

    if (!endereco) {

        alert("Selecione um endereço.");

        return;

    }

    alert(

`Pedido realizado com sucesso!

Total: ${moeda(pedido.total)}

Entrega em:

${endereco.titulo}
${endereco.rua}
${endereco.cidade}
CEP ${endereco.cep}`

    );

}

/*=====================================================
    EVENTOS
=====================================================*/

document
.getElementById("btn-coupon")
.addEventListener("click", aplicarCupom);

document
.getElementById("coupon-input")
.addEventListener("keypress", function(e){

    if(e.key==="Enter"){

        e.preventDefault();

        aplicarCupom();

    }

});

document
.getElementById("btn-checkout")
.addEventListener("click", finalizarPedido);

document
.getElementById("btn-new-address")
.addEventListener("click", novoEndereco);

/*=====================================================
    LINKS DO MENU
=====================================================*/

document
.getElementById("menu-home")
.addEventListener("click", function(e){

    e.preventDefault();

    alert("Ir para Home");

});

document
.getElementById("menu-produtos")
.addEventListener("click", function(e){

    e.preventDefault();

    alert("Ir para Produtos");

});

document
.getElementById("menu-perfil")
.addEventListener("click", function(e){

    e.preventDefault();

    alert("Ir para Minha Conta");

});

/*=====================================================
    INICIALIZAÇÃO
=====================================================*/

function iniciarCheckout() {

    atualizarResumo();

    renderizarProdutos();

    renderizarEnderecos();

}

iniciarCheckout();