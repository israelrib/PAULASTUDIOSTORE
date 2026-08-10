/*=========================================================
    DASHBOARD.JS
=========================================================*/

// ==========================================
// PROTEÇÃO DA ÁREA DO LOJISTA
// ==========================================

const lojistaLogado =
    JSON.parse(
        localStorage.getItem("lojista")
    );

if (!lojistaLogado) {

    window.location.href =
        "./loginlojista.html";
}
//==========================================
// MOSTRA O NOME DO LOJISTA
//==========================================

const nomeLojista =
    document.getElementById(
        "nome-lojista"
    );


if (
    nomeLojista &&
    lojistaLogado
) {

    nomeLojista.textContent =
        lojistaLogado.nome;
}

//==========================================
// LOGOUT DO LOJISTA
//==========================================

const btnSairLojista =
    document.getElementById(
        "btn-sair-lojista"
    );


if (btnSairLojista) {

    btnSairLojista.addEventListener(
        "click",
        () => {

            localStorage.removeItem(
                "lojista"
            );

            localStorage.removeItem(
                "tokenLojista"
            );

            window.location.href =
                "./loginlojista.html";
        }
    );
}

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================================
        GRÁFICO DE VENDAS
    =====================================================*/

    const ctx = document.getElementById("graficoVendas");

    if (ctx) {

        new Chart(ctx, {

            type: "line",

            data: {

                labels: [
                    "Seg",
                    "Ter",
                    "Qua",
                    "Qui",
                    "Sex",
                    "Sáb",
                    "Dom"
                ],

                datasets: [{

                    label: "Vendas",

                    data: [
                        3200,
                        4500,
                        4100,
                        6200,
                        5800,
                        7200,
                        6900
                    ],

                    borderColor: "#C96556",

                    backgroundColor: "rgba(201,101,86,.12)",

                    fill: true,

                    tension: .4,

                    borderWidth: 3,

                    pointRadius: 5,

                    pointBackgroundColor: "#C96556"

                }]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {

                        display: false

                    }

                },

                scales: {

                    y: {

                        beginAtZero: true,

                        grid: {

                            color: "#EEEEEE"

                        }

                    },

                    x: {

                        grid: {

                            display: false

                        }

                    }

                }

            }

        });

    }

    /*=====================================================
        PESQUISA
    =====================================================*/

    const pesquisa = document.querySelector(".pesquisa input");

    pesquisa.addEventListener("keyup", () => {

        const texto = pesquisa.value.toLowerCase();

        document.querySelectorAll("tbody tr").forEach((linha) => {

            linha.style.display = linha.innerText
                .toLowerCase()
                .includes(texto)
                ? ""
                : "none";

        });

    });

    /*=====================================================
        FILTROS
    =====================================================*/

    const filtros = document.querySelectorAll(".filtro button");

    filtros.forEach((botao) => {

        botao.addEventListener("click", () => {

            filtros.forEach(btn =>
                btn.classList.remove("ativo"));

            botao.classList.add("ativo");

            alert("Filtro: " + botao.innerText);

        });

    });

    /*=====================================================
        NOVO PRODUTO
    =====================================================*/

    const novoProduto = document.querySelector(".novo-produto");

    novoProduto.addEventListener("click", () => {

        alert("Abrir cadastro de novo produto.");

    });

    /*=====================================================
        VER LOJA
    =====================================================*/

    const verLoja = document.querySelector(".ver-loja");

    verLoja.addEventListener("click", () => {

        alert("Abrir página da loja.");

    });

    /*=====================================================
        NOTIFICAÇÕES
    =====================================================*/

    const notificacao = document.querySelector(".notificacao");

    notificacao.addEventListener("click", () => {

        alert("Você possui 3 novas notificações.");

    });

    /*=====================================================
        MENU DOS PEDIDOS
    =====================================================*/

    document.querySelectorAll(".menu-pedido")
        .forEach((botao) => {

            botao.addEventListener("click", () => {

                alert("Abrir opções do pedido.");

            });

        });

    /*=====================================================
        HOVER DOS CARDS
    =====================================================*/

    document.querySelectorAll(".card")
        .forEach((card) => {

            card.addEventListener("mouseenter", () => {

                card.style.transform = "translateY(-6px)";
                card.style.transition = ".25s";

            });

            card.addEventListener("mouseleave", () => {

                card.style.transform = "translateY(0px)";

            });

        });

    /*=====================================================
        PRODUTOS MAIS VENDIDOS
    =====================================================*/

    document.querySelectorAll(".produto")
        .forEach((produto) => {

            produto.addEventListener("mouseenter", () => {

                produto.style.background = "#FAFAFA";

            });

            produto.addEventListener("mouseleave", () => {

                produto.style.background = "transparent";

            });

        });

    /*=====================================================
        LINHAS DA TABELA
    =====================================================*/

    document.querySelectorAll("tbody tr")
        .forEach((linha) => {

            linha.addEventListener("click", () => {

                linha.classList.toggle("selecionado");

            });

        });

});

