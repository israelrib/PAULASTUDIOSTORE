/*=========================================================
    PRODUTOS.JS
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================================
        ELEMENTOS
    =====================================================*/

    const pesquisa = document.getElementById("pesquisarProduto");
    const filtroNome = document.getElementById("filtroNome");
    const categoria = document.getElementById("categoria");
    const preco = document.getElementById("preco");

    const linhas = document.querySelectorAll("tbody tr");

    /*=====================================================
        PESQUISA PRINCIPAL
    =====================================================*/

    function pesquisar(valor){

        valor = valor.toLowerCase();

        linhas.forEach((linha)=>{

            const texto = linha.innerText.toLowerCase();

            linha.style.display = texto.includes(valor)
                ? ""
                : "none";

        });

    }

    if(pesquisa){

        pesquisa.addEventListener("keyup",(e)=>{

            pesquisar(e.target.value);

        });

    }

    if(filtroNome){

        filtroNome.addEventListener("keyup",(e)=>{

            pesquisar(e.target.value);

        });

    }

    /*=====================================================
        FILTRO CATEGORIA
    =====================================================*/

    categoria.addEventListener("change",()=>{

        const valor = categoria.value.toLowerCase();

        linhas.forEach((linha)=>{

            if(valor === "todas categorias"){

                linha.style.display="";

                return;

            }

            const texto = linha.children[1].innerText.toLowerCase();

            linha.style.display = texto.includes(valor)
                ? ""
                : "none";

        });

    });

    /*=====================================================
        FILTRO PREÇO
    =====================================================*/

    preco.addEventListener("change",()=>{

        const opcao = preco.selectedIndex;

        linhas.forEach((linha)=>{

            const texto = linha.children[2]
                .innerText
                .replace("R$","")
                .replace(".","")
                .replace(",",".")
                .trim();

            const valor = parseFloat(texto);

            let mostrar = true;

            switch(opcao){

                case 1:

                    mostrar = valor <= 50;
                    break;

                case 2:

                    mostrar = valor > 50 && valor <=100;
                    break;

                case 3:

                    mostrar = valor >100;
                    break;

            }

            linha.style.display = mostrar ? "" : "none";

        });

    });

    /*=====================================================
        ABAS
    =====================================================*/

    const abas = document.querySelectorAll(".abas button");

    abas.forEach((aba)=>{

        aba.addEventListener("click",()=>{

            abas.forEach(btn=>btn.classList.remove("ativo"));

            aba.classList.add("ativo");

            const tipo = aba.innerText.toLowerCase();

            linhas.forEach((linha)=>{

                const status = linha.querySelector(".status")
                    .innerText
                    .toLowerCase();

                if(tipo==="todos"){

                    linha.style.display="";

                }

                else{

                    linha.style.display =
                        status===tipo
                        ? ""
                        : "none";

                }

            });

        });

    });

    /*=====================================================
        EDITAR
    =====================================================*/

    document.querySelectorAll(".editar")
        .forEach((botao)=>{

            botao.addEventListener("click",(e)=>{

                e.stopPropagation();

                alert("Abrir tela de edição do produto.");

            });

        });

    /*=====================================================
        EXCLUIR
    =====================================================*/

    document.querySelectorAll(".excluir")
        .forEach((botao)=>{

            botao.addEventListener("click",(e)=>{

                e.stopPropagation();

                if(confirm("Deseja realmente excluir este produto?")){

                    botao.closest("tr").remove();

                }

            });

        });

    /*=====================================================
        MENU
    =====================================================*/

    document.querySelectorAll(".menu")
        .forEach((botao)=>{

            botao.addEventListener("click",(e)=>{

                e.stopPropagation();

                alert(
                    "Menu:\n\n• Duplicar\n• Ocultar\n• Compartilhar"
                );

            });

        });

    /*=====================================================
        NOVO PRODUTO
    =====================================================*/

    const novoProduto =
        document.querySelector(".novo-produto");

    novoProduto.addEventListener("click",()=>{

        /*
            Quando existir a página:
            window.location = "cadastro-produto.html";
        */

        alert("Abrir Cadastro de Produto.");

    });

    /*=====================================================
        VER LOJA
    =====================================================*/

    const verLoja =
        document.querySelector(".ver-loja");

    verLoja.addEventListener("click",()=>{

        alert("Abrir loja pública.");

    });

    /*=====================================================
        NOTIFICAÇÕES
    =====================================================*/

    const notificacao =
        document.querySelector(".notificacao");

    notificacao.addEventListener("click",()=>{

        alert("Você possui novas notificações.");

    });

    /*=====================================================
        PAGINAÇÃO
    =====================================================*/

    document.querySelectorAll(".paginacao button")
        .forEach((botao)=>{

            botao.addEventListener("click",()=>{

                document
                    .querySelectorAll(".paginacao button")
                    .forEach(btn=>btn.classList.remove("ativo"));

                if(!isNaN(botao.innerText)){

                    botao.classList.add("ativo");

                }

            });

        });

    /*=====================================================
        HOVER DAS LINHAS
    =====================================================*/

    linhas.forEach((linha)=>{

        linha.addEventListener("mouseenter",()=>{

            linha.style.transition=".25s";

        });

    });

});