/*=========================================================
    BANNERS.JS
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================================
        ELEMENTOS
    =====================================================*/

    const pesquisa = document.getElementById("pesquisarBanner");
    const linhasTabela = document.querySelectorAll("tbody tr");
    const cardsBanner = document.querySelectorAll(".card-banner");

    const abas = document.querySelectorAll(".abas button");

    const btnNovo = document.querySelector(".novo-banner");
    const btnVerLoja = document.querySelector(".ver-loja");
    const btnNotificacao = document.querySelector(".notificacao");

    /*=====================================================
        PESQUISA
    =====================================================*/

    function pesquisar(texto){

        texto = texto.toLowerCase();

        linhasTabela.forEach(linha=>{

            linha.style.display =
                linha.innerText.toLowerCase().includes(texto)
                ? ""
                : "none";

        });

        cardsBanner.forEach(card=>{

            card.style.display =
                card.innerText.toLowerCase().includes(texto)
                ? ""
                : "none";

        });

    }

    if(pesquisa){

        pesquisa.addEventListener("keyup",(e)=>{

            pesquisar(e.target.value);

        });

    }

    /*=====================================================
        ABAS
    =====================================================*/

    abas.forEach(botao=>{

        botao.addEventListener("click",()=>{

            abas.forEach(b=>b.classList.remove("ativo"));

            botao.classList.add("ativo");

            alert("Categoria selecionada: " + botao.innerText);

        });

    });

    /*=====================================================
        NOVO BANNER
    =====================================================*/

    if(btnNovo){

        btnNovo.addEventListener("click",()=>{

            /*
                Futuramente:

                window.location =
                "cadastro-banner.html";
            */

            alert("Abrir cadastro de banner.");

        });

    }

    /*=====================================================
        VER LOJA
    =====================================================*/

    if(btnVerLoja){

        btnVerLoja.addEventListener("click",()=>{

            alert("Abrindo sua loja...");

        });

    }

    /*=====================================================
        NOTIFICAÇÕES
    =====================================================*/

    if(btnNotificacao){

        btnNotificacao.addEventListener("click",()=>{

            alert("Você possui novas notificações.");

        });

    }

    /*=====================================================
        EDITAR
    =====================================================*/

    document.querySelectorAll(".editar").forEach(botao=>{

        botao.addEventListener("click",(e)=>{

            e.stopPropagation();

            alert("Editar banner.");

        });

    });

    /*=====================================================
        EDITAR GRID
    =====================================================*/

    document.querySelectorAll(".editar-banner").forEach(botao=>{

        botao.addEventListener("click",(e)=>{

            e.stopPropagation();

            alert("Editar banner secundário.");

        });

    });

    /*=====================================================
        EXCLUIR
    =====================================================*/

    document.querySelectorAll(".excluir").forEach(botao=>{

        botao.addEventListener("click",(e)=>{

            e.stopPropagation();

            const confirmar = confirm(
                "Deseja realmente excluir este banner?"
            );

            if(confirmar){

                botao.closest("tr").remove();

            }

        });

    });

    /*=====================================================
        MENU
    =====================================================*/

    document.querySelectorAll(".menu").forEach(botao=>{

        botao.addEventListener("click",(e)=>{

            e.stopPropagation();

            alert(
`Opções disponíveis

• Visualizar
• Duplicar Banner
• Desativar
• Copiar Link
• Estatísticas`
            );

        });

    });

    /*=====================================================
        VISUALIZAR BANNER
    =====================================================*/

    document.querySelectorAll(".banner-info img").forEach(img=>{

        img.style.cursor = "pointer";

        img.addEventListener("click",()=>{

            window.open(img.src,"_blank");

        });

    });

    /*=====================================================
        DRAG (SIMULAÇÃO)
    =====================================================*/

    document.querySelectorAll(".drag").forEach(item=>{

        item.addEventListener("mousedown",()=>{

            item.style.cursor="grabbing";

        });

        item.addEventListener("mouseup",()=>{

            item.style.cursor="grab";

        });

    });

    /*=====================================================
        PERFORMANCE (SIMULAÇÃO)
    =====================================================*/

    const ctr = document.querySelector(".progresso.ctr");
    const cliques = document.querySelector(".progresso.cliques");

    if(ctr && cliques){

        setInterval(()=>{

            const valorCTR = 65 + Math.random()*20;
            const valorCliques = 80 + Math.random()*15;

            ctr.style.width = valorCTR + "%";
            cliques.style.width = valorCliques + "%";

        },5000);

    }

    /*=====================================================
        HOVER DOS CARDS
    =====================================================*/

    cardsBanner.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transition=".30s";

        });

    });

    /*=====================================================
        LINKS DA TABELA
    =====================================================*/

    document.querySelectorAll("td a").forEach(link=>{

        link.addEventListener("click",(e)=>{

            e.preventDefault();

            alert("Destino:\n\n" + link.innerText);

        });

    });

});