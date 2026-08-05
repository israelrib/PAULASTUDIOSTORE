document.addEventListener("DOMContentLoaded", () => {

    /*=====================================================
        ELEMENTOS DO PRODUTO
    =====================================================*/

    const nomeProduto =
        document.getElementById("nome-produto");

    const codigoProduto =
        document.getElementById("codigo-produto");

    const descricaoProduto =
        document.getElementById("descricao-produto");

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


    /*=====================================================
        ELEMENTOS DAS CORES
    =====================================================*/

    const camposCores =
        document.querySelectorAll(
            'input[name="cores-produto"]'
        );

    const mensagemCores =
        document.getElementById("mensagem-cores");


    /*=====================================================
        ELEMENTOS DAS IMAGENS
    =====================================================*/

    const campoImagens =
        document.getElementById("imagens-produto");

    const contadorImagens =
        document.getElementById("contador-imagens");

    const mensagemImagens =
        document.getElementById("mensagem-imagens");

    const imagensPreview = [

        document.getElementById("imagem-preview-1"),

        document.getElementById("imagem-preview-2"),

        document.getElementById("imagem-preview-3"),

        document.getElementById("imagem-preview-4")

    ];

    const caixasPreview = [

        document.getElementById("preview-imagem-1"),

        document.getElementById("preview-imagem-2"),

        document.getElementById("preview-imagem-3"),

        document.getElementById("preview-imagem-4")

    ];

    const botoesRemoverImagem =
        document.querySelectorAll(".remover-imagem");

    let imagensSelecionadas = [];


    /*=====================================================
        OUTROS ELEMENTOS
    =====================================================*/

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
        ENDEREÇOS DO BACKEND
    =====================================================*/

    const URL_PRODUTOS =
        "http://localhost:3000/produtos";

    const URL_PRODUTO_CORES =
        "http://localhost:3000/produto_has_cores";

    const URL_IMAGENS =
        "http://localhost:3000/imagens";


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
        MOSTRAR MENSAGEM GERAL
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
        LIMPAR MENSAGEM GERAL
    =====================================================*/

    function limparMensagem() {

        mensagemProduto.textContent = "";

        mensagemProduto.classList.remove(
            "sucesso",
            "erro"
        );

    }


    /*=====================================================
        LIMPAR MENSAGENS DAS CORES E IMAGENS
    =====================================================*/

    function limparMensagensRelacionadas() {

        mensagemCores.textContent = "";

        mensagemImagens.textContent = "";

    }


    /*=====================================================
        REMOVER ERROS DOS CAMPOS
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
        VALIDAR NÚMERO
    =====================================================*/

    function numeroValido(valor) {

        return (
            valor !== "" &&
            !isNaN(Number(valor)) &&
            Number(valor) >= 0
        );

    }


    /*=====================================================
        OBTER CORES SELECIONADAS
    =====================================================*/

    function obterCoresSelecionadas() {

        return Array
            .from(camposCores)

            .filter((campo) => {

                return campo.checked;

            })

            .map((campo) => {

                return Number(campo.value);

            });

    }


    /*=====================================================
        ATUALIZAR PRÉ-VISUALIZAÇÃO DAS IMAGENS
    =====================================================*/

    function atualizarPreviewImagens() {

        imagensPreview.forEach((imagem, indice) => {

            const arquivo =
                imagensSelecionadas[indice];

            if (arquivo) {

                const enderecoTemporario =
                    URL.createObjectURL(arquivo);

                imagem.src =
                    enderecoTemporario;

                caixasPreview[indice]
                    .classList
                    .remove("oculta");

                imagem.onload = () => {

                    URL.revokeObjectURL(
                        enderecoTemporario
                    );

                };

            } else {

                imagem.src = "";

                caixasPreview[indice]
                    .classList
                    .add("oculta");

            }

        });

        contadorImagens.textContent =
            `${imagensSelecionadas.length}/4 imagens`;

    }


    /*=====================================================
        SELECIONAR IMAGENS
    =====================================================*/

    campoImagens.addEventListener("change", () => {

        mensagemImagens.textContent = "";

        const arquivos =
            Array.from(campoImagens.files);

        if (arquivos.length === 0) {

            return;

        }


        /*=================================================
            SOMAR AS NOVAS IMAGENS ÀS JÁ SELECIONADAS
        =================================================*/

        const novasImagens = [
            ...imagensSelecionadas,
            ...arquivos
        ];


        /*=================================================
            VALIDAR QUANTIDADE
        =================================================*/

        if (novasImagens.length > 4) {

            mensagemImagens.textContent =
                "Você pode selecionar no máximo 4 imagens.";

            campoImagens.value = "";

            return;

        }


        /*=================================================
            VALIDAR TIPO DAS IMAGENS
        =================================================*/

        const tiposPermitidos = [

            "image/png",

            "image/jpeg",

            "image/webp"

        ];

        const arquivoInvalido =
            arquivos.find((arquivo) => {

                return !tiposPermitidos.includes(
                    arquivo.type
                );

            });

        if (arquivoInvalido) {

            mensagemImagens.textContent =
                "Utilize apenas imagens PNG, JPG, JPEG ou WEBP.";

            campoImagens.value = "";

            return;

        }


        /*=================================================
            VALIDAR TAMANHO DAS IMAGENS
        =================================================*/

        const tamanhoMaximo =
            5 * 1024 * 1024;

        const arquivoMuitoGrande =
            arquivos.find((arquivo) => {

                return arquivo.size > tamanhoMaximo;

            });

        if (arquivoMuitoGrande) {

            mensagemImagens.textContent =
                "Cada imagem deve possuir no máximo 5 MB.";

            campoImagens.value = "";

            return;

        }


        /*=================================================
            SALVAR AS IMAGENS
        =================================================*/

        imagensSelecionadas =
            novasImagens;

        campoImagens.value = "";

        atualizarPreviewImagens();

    });


    /*=====================================================
        REMOVER IMAGEM
    =====================================================*/

    botoesRemoverImagem.forEach((botao) => {

        botao.addEventListener("click", () => {

            const indice =
                Number(botao.dataset.indice);

            imagensSelecionadas.splice(
                indice,
                1
            );

            atualizarPreviewImagens();

            mensagemImagens.textContent = "";

        });

    });


    /*=====================================================
        VALIDAR CAMPOS DO PRODUTO
    =====================================================*/

    function validarProduto() {

        removerErrosDosCampos();

        limparMensagem();

        limparMensagensRelacionadas();


        /*=================================================
            NOME
        =================================================*/

        const nome =
            nomeProduto.value.trim();

        if (nome === "") {

            mostrarMensagem(
                "Digite o nome do produto.",
                "erro"
            );

            marcarCampoComErro(nomeProduto);

            return false;

        }

        if (nome.length > 100) {

            mostrarMensagem(
                "O nome deve possuir no máximo 100 caracteres.",
                "erro"
            );

            marcarCampoComErro(nomeProduto);

            return false;

        }


        /*=================================================
            CÓDIGO
        =================================================*/

        const codigo =
            codigoProduto.value.trim();

        if (codigo === "") {

            mostrarMensagem(
                "Digite o código do produto.",
                "erro"
            );

            marcarCampoComErro(codigoProduto);

            return false;

        }

        if (codigo.length > 45) {

            mostrarMensagem(
                "O código deve possuir no máximo 45 caracteres.",
                "erro"
            );

            marcarCampoComErro(codigoProduto);

            return false;

        }


        /*=================================================
            DESCRIÇÃO
        =================================================*/

        if (
            descricaoProduto.value.trim().length > 1000
        ) {

            mostrarMensagem(
                "A descrição deve possuir no máximo 1000 caracteres.",
                "erro"
            );

            marcarCampoComErro(descricaoProduto);

            return false;

        }


        /*=================================================
            PREÇO ANTIGO
        =================================================*/

        if (!numeroValido(precoAntigo.value)) {

            mostrarMensagem(
                "Digite um preço antigo válido.",
                "erro"
            );

            marcarCampoComErro(precoAntigo);

            return false;

        }


        /*=================================================
            PREÇO PROMOCIONAL
        =================================================*/

        if (!numeroValido(precoPromocional.value)) {

            mostrarMensagem(
                "Digite um preço promocional válido.",
                "erro"
            );

            marcarCampoComErro(precoPromocional);

            return false;

        }


        /*=================================================
            COMPARAR OS PREÇOS
        =================================================*/

        if (
            Number(precoPromocional.value) >
            Number(precoAntigo.value)
        ) {

            mostrarMensagem(
                "O preço promocional não pode ser maior que o preço antigo.",
                "erro"
            );

            marcarCampoComErro(precoPromocional);

            return false;

        }


        /*=================================================
            QUANTIDADE
        =================================================*/

        if (!numeroValido(quantidadeEstoque.value)) {

            mostrarMensagem(
                "Digite uma quantidade válida para o estoque.",
                "erro"
            );

            marcarCampoComErro(quantidadeEstoque);

            return false;

        }

        if (
            !Number.isInteger(
                Number(quantidadeEstoque.value)
            )
        ) {

            mostrarMensagem(
                "A quantidade em estoque deve ser um número inteiro.",
                "erro"
            );

            marcarCampoComErro(quantidadeEstoque);

            return false;

        }


        /*=================================================
            LOJA
        =================================================*/

        if (
            lojaId.value === "" ||
            Number(lojaId.value) <= 0
        ) {

            mostrarMensagem(
                "Informe uma loja válida.",
                "erro"
            );

            marcarCampoComErro(lojaId);

            return false;

        }


        /*=================================================
            CORES
        =================================================*/

        const coresSelecionadas =
            obterCoresSelecionadas();

        if (coresSelecionadas.length === 0) {

            mensagemCores.textContent =
                "Selecione pelo menos uma cor.";

            return false;

        }


        /*=================================================
            IMAGENS
        =================================================*/

        if (imagensSelecionadas.length === 0) {

            mensagemImagens.textContent =
                "Selecione pelo menos uma imagem do produto.";

            return false;

        }

        return true;

    }


    /*=====================================================
        CRIAR OBJETO DO PRODUTO
    =====================================================*/

    function criarObjetoProduto() {

        const descricao =
            descricaoProduto.value.trim();

        const valorMarcaId =
            marcaId.value;

        const valorCategoriaId =
            categoriaId.value;

        return {

            nome:
                nomeProduto.value.trim(),

            descricao:
                descricao === ""
                    ? null
                    : descricao,

            codigo:
                codigoProduto.value.trim(),

            preco_antigo:
                Number(precoAntigo.value),

            preco_promocional:
                Number(precoPromocional.value),

            quantidade_estoque:
                Number(quantidadeEstoque.value),

            ativo:
                produtoAtivo.checked
                    ? 1
                    : 0,

            Loja_idLoja:
                Number(lojaId.value),

            Marca_idMarca:
                valorMarcaId === ""
                    ? null
                    : Number(valorMarcaId),

            Categoria_idCategoria:
                valorCategoriaId === ""
                    ? null
                    : Number(valorCategoriaId)

        };

    }


    /*=====================================================
        CONVERTER RESPOSTA PARA JSON
    =====================================================*/

    async function converterResposta(resposta) {

        let dados;

        try {

            dados = await resposta.json();

        } catch (erro) {

            dados = {
                sucesso: false,
                mensagem:
                    "O servidor retornou uma resposta inválida."
            };

        }

        return dados;

    }


    /*=====================================================
        CADASTRAR PRODUTO
    =====================================================*/

    async function cadastrarProduto(produto) {

        const resposta = await fetch(
            URL_PRODUTOS,
            {

                method: "POST",

                headers: {

                    "Content-Type":
                        "application/json"

                },

                body:
                    JSON.stringify(produto)

            }
        );

        const dados =
            await converterResposta(resposta);

        if (!resposta.ok || !dados.sucesso) {

            throw new Error(
                dados.mensagem ||
                "Erro ao cadastrar produto."
            );

        }

        if (!dados.idProduto) {

            throw new Error(
                "O servidor não retornou o ID do produto."
            );

        }

        return dados;

    }


    /*=====================================================
        CADASTRAR UMA COR DO PRODUTO
    =====================================================*/

    async function cadastrarCorDoProduto(
        idProduto,
        idCor
    ) {

        const resposta = await fetch(
            URL_PRODUTO_CORES,
            {

                method: "POST",

                headers: {

                    "Content-Type":
                        "application/json"

                },

                body: JSON.stringify({

                    Produto_idProduto:
                        idProduto,

                    Cores_idCores:
                        idCor

                })

            }
        );

        const dados =
            await converterResposta(resposta);

        if (!resposta.ok) {

            throw new Error(
                dados.mensagem ||
                "Erro ao cadastrar uma cor do produto."
            );

        }

        return dados;

    }


    /*=====================================================
        CADASTRAR TODAS AS CORES
    =====================================================*/

    async function cadastrarCoresDoProduto(
        idProduto,
        cores
    ) {

        const requisicoes =
            cores.map((idCor) => {

                return cadastrarCorDoProduto(
                    idProduto,
                    idCor
                );

            });

        await Promise.all(requisicoes);

    }


    /*=====================================================
        CADASTRAR UMA IMAGEM
    =====================================================*/

    async function cadastrarImagemDoProduto(
        idProduto,
        arquivo
    ) {

        const formulario =
            new FormData();

        formulario.append(
            "arquivo",
            arquivo
        );

        formulario.append(
            "Produto_idProduto",
            idProduto
        );

        const resposta = await fetch(
            URL_IMAGENS,
            {

                method: "POST",

                body:
                    formulario

            }
        );

        const dados =
            await converterResposta(resposta);

        if (!resposta.ok) {

            throw new Error(
                dados.mensagem ||
                "Erro ao cadastrar uma imagem."
            );

        }

        return dados;

    }


    /*=====================================================
        CADASTRAR TODAS AS IMAGENS
    =====================================================*/

    async function cadastrarImagensDoProduto(
        idProduto,
        imagens
    ) {

        const requisicoes =
            imagens.map((arquivo) => {

                return cadastrarImagemDoProduto(
                    idProduto,
                    arquivo
                );

            });

        await Promise.all(requisicoes);

    }


    /*=====================================================
        ALTERAR ESTADO DO BOTÃO
    =====================================================*/

    function alterarBotaoCadastrar(carregando) {

        botaoCadastrar.disabled =
            carregando;

        if (carregando) {

            botaoCadastrar.innerHTML = `
                <i class="fa-solid fa-spinner fa-spin"></i>
                Cadastrando...
            `;

        } else {

            botaoCadastrar.innerHTML = `
                <i class="fa-solid fa-floppy-disk"></i>
                Cadastrar Produto
            `;

        }

    }


    /*=====================================================
        EVENTO DE CADASTRO
    =====================================================*/

    botaoCadastrar.addEventListener(
        "click",
        async () => {

            if (!validarProduto()) {

                return;

            }

            const produto =
                criarObjetoProduto();

            const coresSelecionadas =
                obterCoresSelecionadas();

            /*
                Criamos uma cópia para evitar que as imagens
                sejam apagadas antes do envio terminar.
            */

            const imagensParaEnviar = [
                ...imagensSelecionadas
            ];

            alterarBotaoCadastrar(true);

            try {

                /*=========================================
                    1. CADASTRAR PRODUTO
                =========================================*/

                const respostaProduto =
                    await cadastrarProduto(produto);

                const idProduto =
                    respostaProduto.idProduto;


                /*=========================================
                    2. CADASTRAR CORES
                =========================================*/

                await cadastrarCoresDoProduto(
                    idProduto,
                    coresSelecionadas
                );


                /*=========================================
                    3. CADASTRAR IMAGENS
                =========================================*/

                await cadastrarImagensDoProduto(
                    idProduto,
                    imagensParaEnviar
                );


                /*=========================================
                    SUCESSO
                =========================================*/

                mostrarMensagem(
                    "Produto, cores e imagens cadastrados com sucesso!",
                    "sucesso"
                );

                limparCampos();

            } catch (erro) {

                console.error(
                    "Erro no cadastro:",
                    erro
                );

                mostrarMensagem(
                    erro.message ||
                    "Ocorreu um erro durante o cadastro.",
                    "erro"
                );

            } finally {

                alterarBotaoCadastrar(false);

            }

        }
    );


    /*=====================================================
        LIMPAR CAMPOS
    =====================================================*/

    function limparCampos() {

        nomeProduto.value = "";

        codigoProduto.value = "";

        descricaoProduto.value = "";

        precoAntigo.value = "";

        precoPromocional.value = "";

        quantidadeEstoque.value = "";

        produtoAtivo.checked = true;

        lojaId.value = "1";

        marcaId.value = "";

        categoriaId.value = "";

        contadorDescricao.textContent =
            "0/1000 caracteres";


        /*=================================================
            LIMPAR CORES
        =================================================*/

        camposCores.forEach((campo) => {

            campo.checked = false;

        });


        /*=================================================
            LIMPAR IMAGENS
        =================================================*/

        imagensSelecionadas = [];

        campoImagens.value = "";

        atualizarPreviewImagens();


        /*=================================================
            LIMPAR ERROS
        =================================================*/

        removerErrosDosCampos();

        limparMensagensRelacionadas();

        nomeProduto.focus();

    }


    /*=====================================================
        CANCELAR CADASTRO
    =====================================================*/

    botaoCancelar.addEventListener("click", () => {

        const confirmarCancelamento =
            confirm(
                "Deseja cancelar o cadastro do produto?"
            );

        if (confirmarCancelamento) {

            window.location.href =
                "produtoslojista.html";

        }

    });


    /*=====================================================
        VOLTAR
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


    /*=====================================================
        INICIALIZAÇÃO DA PÁGINA
    =====================================================*/

    atualizarPreviewImagens();

});