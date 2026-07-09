/* ======================================================
   PEDIDOS.JS
====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const campoBusca = document.getElementById("buscarPedido");
    const btnBuscar = document.getElementById("btnBuscar");
    const pedidos = document.querySelectorAll(".pedido");

    /*=========================================
        PESQUISAR PEDIDOS
    =========================================*/

    function pesquisarPedidos() {

        const texto = campoBusca.value.toLowerCase().trim();

        let encontrou = false;

        pedidos.forEach((pedido) => {

            const conteudo = pedido.innerText.toLowerCase();

            if (conteudo.includes(texto)) {

                pedido.style.display = "block";
                encontrou = true;

            } else {

                pedido.style.display = "none";

            }

        });

        mostrarMensagem(encontrou);

    }

    campoBusca.addEventListener("keyup", pesquisarPedidos);

    btnBuscar.addEventListener("click", pesquisarPedidos);

    /*=========================================
        MENSAGEM SEM RESULTADOS
    =========================================*/

    function mostrarMensagem(encontrou) {

        let aviso = document.getElementById("semResultado");

        if (!encontrou) {

            if (!aviso) {

                aviso = document.createElement("div");

                aviso.id = "semResultado";

                aviso.style.textAlign = "center";
                aviso.style.padding = "30px";
                aviso.style.color = "#888";
                aviso.style.fontSize = "18px";

                aviso.innerHTML = "Nenhum pedido encontrado.";

                document.querySelector(".container").appendChild(aviso);

            }

        } else {

            if (aviso) {

                aviso.remove();

            }

        }

    }

    /*=========================================
        BOTÕES
    =========================================*/

    document.querySelectorAll(".detalhes").forEach((botao) => {

        botao.addEventListener("click", (e) => {

            e.preventDefault();

            alert("Abrir detalhes do pedido.");

        });

    });

    document.querySelectorAll(".vermelho").forEach((botao) => {

        botao.addEventListener("click", () => {

            alert("Abrindo rastreamento do pedido...");

        });

    });

    document.querySelectorAll(".destaque").forEach((botao) => {

        botao.addEventListener("click", () => {

            alert("Produto adicionado novamente ao carrinho!");

        });

    });

    /*=========================================
        BOTÕES BRANCOS
    =========================================*/

    document.querySelectorAll(".branco").forEach((botao) => {

        if (botao.classList.contains("destaque")) return;

        botao.addEventListener("click", () => {

            const texto = botao.innerText;

            if (texto === "Ajuda") {

                alert("Central de ajuda.");

            }

            if (texto === "Avaliar") {

                alert("Abrindo tela de avaliação.");

            }

        });

    });

    /*=========================================
        EFEITO HOVER NOS CARDS
    =========================================*/

    pedidos.forEach((pedido) => {

        pedido.addEventListener("mouseenter", () => {

            pedido.style.transform = "translateY(-3px)";
            pedido.style.transition = ".25s";
            pedido.style.boxShadow = "0 12px 25px rgba(0,0,0,.08)";

        });

        pedido.addEventListener("mouseleave", () => {

            pedido.style.transform = "translateY(0)";
            pedido.style.boxShadow = "0 3px 10px rgba(0,0,0,.04)";

        });

    });

});