/*=========================================================
    PROMOCOES.JS
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================================
        ELEMENTOS
    =====================================================*/

    const pesquisaTopo = document.getElementById("pesquisaPromocao");
    const pesquisaTabela = document.getElementById("buscarTabela");
    const selectStatus = document.querySelector(".filtros-lista select");

    const linhas = document.querySelectorAll("tbody tr");
    const abas = document.querySelectorAll(".abas button");

    /*=====================================================
        PESQUISA
    =====================================================*/

    function pesquisar(texto){

        texto = texto.toLowerCase();

        linhas.forEach(linha => {

            linha.style.display = linha.innerText.toLowerCase().includes(texto)
                ? ""
                : "none";

        });

    }

    if(pesquisaTopo){

        pesquisaTopo.addEventListener("keyup",(e)=>{

            pesquisar(e.target.value);

        });

    }

    if(pesquisaTabela){

        pesquisaTabela.addEventListener("keyup",(e)=>{

            pesquisar(e.target.value);

        });

    }

    /*=====================================================
        FILTRO STATUS
    =====================================================*/

    if(selectStatus){

        selectStatus.addEventListener("change",()=>{

            const statusSelecionado = selectStatus.value.toLowerCase();

            linhas.forEach(linha=>{

                if(statusSelecionado==="status"){

                    linha.style.display="";

                    return;

                }

                const status = linha.querySelector(".status")
                    .innerText
                    .toLowerCase();

                linha.style.display =
                    status===statusSelecionado
                    ? ""
                    : "none";

            });

        });

    }

    /*=====================================================
        ABAS
    =====================================================*/

    abas.forEach((aba)=>{

        aba.addEventListener("click",()=>{

            abas.forEach(btn=>btn.classList.remove("ativo"));

            aba.classList.add("ativo");

            const texto = aba.innerText.toLowerCase();

            if(texto.includes("ofertas")){

                alert("Visualizando Ofertas Ativas.");

            }else{

                alert("Visualizando Cupons de Desconto.");

            }

        });

    });

    /*=====================================================
        CRIAR PROMOÇÃO
    =====================================================*/

    const criar = document.querySelector(".criar-promocao");

    criar.addEventListener("click",()=>{

        /*
            Quando existir:

            window.location =
            "cadastro-promocao.html";
        */

        alert("Abrir Cadastro de Promoção.");

    });

    /*=====================================================
        VER LOJA
    =====================================================*/

    const loja = document.querySelector(".ver-loja");

    loja.addEventListener("click",()=>{

        alert("Abrindo loja virtual...");

    });

    /*=====================================================
        NOTIFICAÇÕES
    =====================================================*/

    document.querySelector(".notificacao")
        .addEventListener("click",()=>{

            alert("Você possui novas notificações.");

        });

    /*=====================================================
        EDITAR
    =====================================================*/

    document.querySelectorAll(".editar")
        .forEach(botao=>{

            botao.addEventListener("click",(e)=>{

                e.stopPropagation();

                alert("Editar promoção.");

            });

        });

    /*=====================================================
        EXCLUIR
    =====================================================*/

    document.querySelectorAll(".excluir")
        .forEach(botao=>{

            botao.addEventListener("click",(e)=>{

                e.stopPropagation();

                const confirmar = confirm(
                    "Deseja realmente excluir esta promoção?"
                );

                if(confirmar){

                    botao.closest("tr").remove();

                }

            });

        });

    /*=====================================================
        MENU
    =====================================================*/

    document.querySelectorAll(".menu")
        .forEach(botao=>{

            botao.addEventListener("click",(e)=>{

                e.stopPropagation();

                alert(
`Opções disponíveis:

• Duplicar Promoção
• Encerrar Promoção
• Compartilhar
• Ver Relatório`
                );

            });

        });

    /*=====================================================
        COPIAR CUPOM
    =====================================================*/

    document.querySelectorAll(".copiar-cupom")
        .forEach(botao=>{

            botao.addEventListener("click",()=>{

                const codigo = botao
                    .closest(".cupom")
                    .querySelector("h3")
                    .innerText;

                navigator.clipboard.writeText(codigo);

                alert("Cupom copiado: " + codigo);

            });

        });

    /*=====================================================
        AGENDAR CAMPANHA
    =====================================================*/

    const campanha =
        document.querySelector(".btn-campanha");

    campanha.addEventListener("click",()=>{

        alert("Abrir agenda de campanhas.");

    });

    /*=====================================================
        PAGINAÇÃO
    =====================================================*/

    document.querySelectorAll(".paginacao button")
        .forEach(botao=>{

            botao.addEventListener("click",()=>{

                if(isNaN(botao.innerText)) return;

                document
                    .querySelectorAll(".paginacao button")
                    .forEach(btn=>{

                        btn.classList.remove("ativo");

                    });

                botao.classList.add("ativo");

            });

        });

    /*=====================================================
        HOVER DAS LINHAS
    =====================================================*/

    linhas.forEach(linha=>{

        linha.addEventListener("mouseenter",()=>{

            linha.style.transition=".25s";

        });

    });

});