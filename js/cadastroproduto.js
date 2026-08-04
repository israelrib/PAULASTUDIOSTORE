document.addEventListener("DOMContentLoaded", () => {

    /*=====================================================
        ELEMENTOS DA PÁGINA
    =====================================================*/

    const nomeProduto =
        document.getElementById("nome-produto");

    const descricaoProduto =
        document.getElementById("descricao-produto");

    const codigoProduto =
        document.getElementById("codigo-produto");

    const precoAntigo =
        document.getElementById("preco-antigo");

    const precoPromocional =
        document.getElementById("preco-promocional");

    const quantidadeEstoque =
        document.getElementById("quantidade-estoque");

    const produtoAtivo =
        document.getElementById("produto-ativo");

    const lojaId =
        document.getElementById("loja-id");

    const marcaId =
        document.getElementById("marca-id");

    const categoriaId =
        document.getElementById("categoria-id");

    const contadorDescricao =
        document.getElementById("contador-descricao");

    const mensagemProduto =
        document.getElementById("mensagem-produto");

    const botaoCadastrar =
        document.getElementById("btn-cadastrar-produto");

    const botaoCancelar =
        document.getElementById("btn-cancelar");

    const botaoVoltar =
        document.getElementById("btn-voltar");

    const botaoVerLoja =
        document.getElementById("btn-ver-loja");


    /*=====================================================
        CONTADOR DA DESCRIÇÃO
    =====================================================*/

    descricaoProduto.addEventListener("input", () => {

        const quantidadeCaracteres =
            descricaoProduto.value.length;

        contadorDescricao.textContent =
            `${quantidadeCaracteres}/1000 caracteres`;

    });


    /*=====================================================
        FUNÇÃO PARA MOSTRAR MENSAGEM
    =====================================================*/

    function mostrarMensagem(texto, tipo) {

        mensagemProduto.textContent = texto;

        mensagemProduto.classList.remove(
            "sucesso",
            "erro"
        );

        mensagemProduto.classList.add(tipo);

    }


    /*=====================================================
        FUNÇÃO PARA LIMPAR MENSAGEM
    =====================================================*/

    function limparMensagem() {

        mensagemProduto.textContent = "";

        mensagemProduto.classList.remove(
            "sucesso",
            "erro"
        );

    }


    /*=====================================================
        REMOVER ERRO DOS CAMPOS
    =====================================================*/

    function removerErrosDosCampos() {

        const campos = document.querySelectorAll(
            ".campo input, .campo textarea, .campo select"
        );

        campos.forEach((campo) => {

            campo.classList.remove("erro");

        });

    }


    /*=====================================================
        MARCAR CAMPO COM ERRO
    =====================================================*/

    function marcarCampoComErro(campo) {

        campo.classList.add("erro");

        campo.focus();

    }


    /*=====================================================
        VALIDAR VALORES NUMÉRICOS
    =====================================================*/

    function numeroValido(valor) {

        return (
            valor !== "" &&
            !isNaN(Number(valor)) &&
            Number(valor) >= 0
        );

    }


    /*=====================================================
        CADASTRAR PRODUTO
    =====================================================*/

    botaoCadastrar.addEventListener("click", () => {

        limparMensagem();

        removerErrosDosCampos();


        /*=================================================
            CAPTURAR OS VALORES
        =================================================*/

        const nome =
            nomeProduto.value.trim();

        const descricao =
            descricaoProduto.value.trim();

        const codigo =
            codigoProduto.value.trim();

        const valorPrecoAntigo =
            precoAntigo.value.trim();

        const valorPrecoPromocional =
            precoPromocional.value.trim();

        const valorQuantidadeEstoque =
            quantidadeEstoque.value.trim();

        const valorLojaId =
            lojaId.value.trim();

        const valorMarcaId =
            marcaId.value;

        const valorCategoriaId =
            categoriaId.value;


        /*=================================================
            VALIDAR NOME
        =================================================*/

        if (nome === "") {

            mostrarMensagem(
                "Digite o nome do produto.",
                "erro"
            );

            marcarCampoComErro(nomeProduto);

            return;

        }

        if (nome.length > 100) {

            mostrarMensagem(
                "O nome do produto deve possuir no máximo 100 caracteres.",
                "erro"
            );

            marcarCampoComErro(nomeProduto);

            return;

        }


        /*=================================================
            VALIDAR CÓDIGO
        =================================================*/

        if (codigo === "") {

            mostrarMensagem(
                "Digite o código do produto.",
                "erro"
            );

            marcarCampoComErro(codigoProduto);

            return;

        }

        if (codigo.length > 45) {

            mostrarMensagem(
                "O código deve possuir no máximo 45 caracteres.",
                "erro"
            );

            marcarCampoComErro(codigoProduto);

            return;

        }


        /*=================================================
            VALIDAR DESCRIÇÃO
        =================================================*/

        if (descricao.length > 1000) {

            mostrarMensagem(
                "A descrição deve possuir no máximo 1000 caracteres.",
                "erro"
            );

            marcarCampoComErro(descricaoProduto);

            return;

        }


        /*=================================================
            VALIDAR PREÇO ANTIGO
        =================================================*/

        if (!numeroValido(valorPrecoAntigo)) {

            mostrarMensagem(
                "Digite um preço antigo válido.",
                "erro"
            );

            marcarCampoComErro(precoAntigo);

            return;

        }


        /*=================================================
            VALIDAR PREÇO PROMOCIONAL
        =================================================*/

        if (!numeroValido(valorPrecoPromocional)) {

            mostrarMensagem(
                "Digite um preço promocional válido.",
                "erro"
            );

            marcarCampoComErro(precoPromocional);

            return;

        }


        /*=================================================
            VALIDAR RELAÇÃO ENTRE OS PREÇOS
        =================================================*/

        if (
            Number(valorPrecoPromocional) >
            Number(valorPrecoAntigo)
        ) {

            mostrarMensagem(
                "O preço promocional não pode ser maior que o preço antigo.",
                "erro"
            );

            marcarCampoComErro(precoPromocional);

            return;

        }


        /*=================================================
            VALIDAR QUANTIDADE
        =================================================*/

        if (!numeroValido(valorQuantidadeEstoque)) {

            mostrarMensagem(
                "Digite uma quantidade válida para o estoque.",
                "erro"
            );

            marcarCampoComErro(quantidadeEstoque);

            return;

        }

        if (
            !Number.isInteger(
                Number(valorQuantidadeEstoque)
            )
        ) {

            mostrarMensagem(
                "A quantidade em estoque deve ser um número inteiro.",
                "erro"
            );

            marcarCampoComErro(quantidadeEstoque);

            return;

        }


        /*=================================================
            VALIDAR LOJA
        =================================================*/

        if (
            valorLojaId === "" ||
            Number(valorLojaId) <= 0
        ) {

            mostrarMensagem(
                "Informe uma loja válida.",
                "erro"
            );

            marcarCampoComErro(lojaId);

            return;

        }


        /*=================================================
            CRIAR OBJETO DO PRODUTO
        =================================================*/

        const produto = {

            nome: nome,

            descricao:
                descricao === ""
                    ? null
                    : descricao,

            codigo: codigo,

            preco_antigo:
                Number(valorPrecoAntigo),

            preco_promocional:
                Number(valorPrecoPromocional),

            quantidade_estoque:
                Number(valorQuantidadeEstoque),

            ativo:
                produtoAtivo.checked
                    ? 1
                    : 0,

            Loja_idLoja:
                Number(valorLojaId),

            Marca_idMarca:
                valorMarcaId === ""
                    ? null
                    : Number(valorMarcaId),

            Categoria_idCategoria:
                valorCategoriaId === ""
                    ? null
                    : Number(valorCategoriaId)

        };


        console.log(
            "Produto enviado:",
            produto
        );


        /*=================================================
            DESABILITAR BOTÃO
        =================================================*/

        botaoCadastrar.disabled = true;

        botaoCadastrar.innerHTML = `
            <i class="fa-solid fa-spinner fa-spin"></i>
            Cadastrando...
        `;


        /*=================================================
            ENVIAR PARA O BACKEND
        =================================================*/

        fetch("http://localhost:3000/produtos", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(produto)

        })

            .then((resposta) => {

                return resposta.json()
                    .then((dados) => {

                        return {

                            status: resposta.status,

                            dados: dados

                        };

                    });

            })

            .then((resultado) => {

                const resposta =
                    resultado.dados;

                if (
                    resultado.status === 201 &&
                    resposta.sucesso
                ) {

                    mostrarMensagem(
                        resposta.mensagem ||
                        "Produto cadastrado com sucesso!",
                        "sucesso"
                    );

                    console.log(
                        "ID do produto cadastrado:",
                        resposta.idProduto
                    );

                    limparCampos();

                } else {

                    mostrarMensagem(
                        resposta.mensagem ||
                        "Não foi possível cadastrar o produto.",
                        "erro"
                    );

                }

            })

            .catch((erro) => {

                console.error(
                    "Erro ao cadastrar produto:",
                    erro
                );

                mostrarMensagem(
                    "Erro ao conectar com o servidor.",
                    "erro"
                );

            })

            .finally(() => {

                botaoCadastrar.disabled = false;

                botaoCadastrar.innerHTML = `
                    <i class="fa-solid fa-floppy-disk"></i>
                    Cadastrar Produto
                `;

            });

    });


    /*=====================================================
        LIMPAR CAMPOS
    =====================================================*/

    function limparCampos() {

        nomeProduto.value = "";

        descricaoProduto.value = "";

        codigoProduto.value = "";

        precoAntigo.value = "";

        precoPromocional.value = "";

        quantidadeEstoque.value = "";

        produtoAtivo.checked = true;

        lojaId.value = "1";

        marcaId.value = "";

        categoriaId.value = "";

        contadorDescricao.textContent =
            "0/1000 caracteres";

        removerErrosDosCampos();

        nomeProduto.focus();

    }


    /*=====================================================
        CANCELAR CADASTRO
    =====================================================*/

    botaoCancelar.addEventListener("click", () => {

        const confirmarCancelamento = confirm(
            "Deseja cancelar o cadastro do produto?"
        );

        if (confirmarCancelamento) {

            window.location.href =
                "produtoslojista.html";

        }

    });


    /*=====================================================
        BOTÃO VOLTAR
    =====================================================*/

    botaoVoltar.addEventListener("click", () => {

        window.location.href =
            "produtoslojista.html";

    });


    /*=====================================================
        VER LOJA
    =====================================================*/

    botaoVerLoja.addEventListener("click", () => {

        window.location.href =
            "../index.html";

    });

});