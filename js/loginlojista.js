// ======================================================
// CONFIGURAÇÕES DA API
// ======================================================

const API_URL = "http://localhost:3000";

const ROTAS = {

    cadastro:
        `${API_URL}/lojista`

};


// ======================================================
// ELEMENTOS - SEÇÕES
// ======================================================

const sectionLogin =
    document.getElementById(
        "section-login-lojista"
    );

const sectionCadastro =
    document.getElementById(
        "section-cadastro-lojista"
    );


// ======================================================
// ELEMENTOS - MENU
// ======================================================

const btnIrLogin =
    document.getElementById(
        "btn-ir-login"
    );

const btnIrCadastro =
    document.getElementById(
        "btn-ir-cadastro"
    );

const btnVoltarLoja =
    document.getElementById(
        "btn-voltar-loja"
    );


// ======================================================
// ELEMENTOS - LOGIN
// ======================================================

const loginEmail =
    document.getElementById(
        "login-lojista-email"
    );

const loginSenha =
    document.getElementById(
        "login-lojista-senha"
    );

const btnLogin =
    document.getElementById(
        "btn-login-lojista"
    );

const mensagemLogin =
    document.getElementById(
        "mensagem-login-lojista"
    );


// ======================================================
// ELEMENTOS - CADASTRO
// ======================================================

const lojistaNome =
    document.getElementById(
        "lojista-nome"
    );

const lojistaCpf =
    document.getElementById(
        "lojista-cpf"
    );

const lojistaCnpj =
    document.getElementById(
        "lojista-cnpj"
    );

const lojistaTelefone =
    document.getElementById(
        "lojista-telefone"
    );

const lojistaEmail =
    document.getElementById(
        "lojista-email"
    );

const lojistaSenha =
    document.getElementById(
        "lojista-senha"
    );

const lojistaConfirmarSenha =
    document.getElementById(
        "lojista-confirmar-senha"
    );

const btnCadastrar =
    document.getElementById(
        "btn-cadastrar-lojista"
    );

const mensagemCadastro =
    document.getElementById(
        "mensagem-cadastro-lojista"
    );


// ======================================================
// BOTÕES DE TROCA ENTRE LOGIN E CADASTRO
// ======================================================

const btnAbrirCadastro =
    document.getElementById(
        "btn-abrir-cadastro"
    );

const btnAbrirLogin =
    document.getElementById(
        "btn-abrir-login"
    );


// ======================================================
// BOTÕES MOSTRAR SENHA
// ======================================================

const btnVerSenhaLogin =
    document.getElementById(
        "btn-ver-senha-login"
    );

const btnVerSenhaCadastro =
    document.getElementById(
        "btn-ver-senha-cadastro"
    );

const btnVerConfirmarSenha =
    document.getElementById(
        "btn-ver-confirmar-senha"
    );


// ======================================================
// EVENTOS DE NAVEGAÇÃO
// ======================================================

if (btnIrLogin) {

    btnIrLogin.addEventListener(
        "click",
        abrirLogin
    );

}


if (btnIrCadastro) {

    btnIrCadastro.addEventListener(
        "click",
        abrirCadastro
    );

}


if (btnAbrirCadastro) {

    btnAbrirCadastro.addEventListener(
        "click",
        abrirCadastro
    );

}


if (btnAbrirLogin) {

    btnAbrirLogin.addEventListener(
        "click",
        abrirLogin
    );

}


if (btnVoltarLoja) {

    btnVoltarLoja.addEventListener(
        "click",
        () => {

            window.location.href =
                "./login.html";

        }
    );

}


// ======================================================
// ABRIR LOGIN
// ======================================================

function abrirLogin() {

    if (sectionLogin) {

        sectionLogin.classList.add(
            "active"
        );

    }


    if (sectionCadastro) {

        sectionCadastro.classList.remove(
            "active"
        );

    }


    if (btnIrLogin) {

        btnIrLogin.classList.add(
            "active"
        );

    }


    if (btnIrCadastro) {

        btnIrCadastro.classList.remove(
            "active"
        );

    }


    limparMensagem(
        mensagemCadastro
    );


    if (loginEmail) {

        loginEmail.focus();

    }

}


// ======================================================
// ABRIR CADASTRO
// ======================================================

function abrirCadastro() {

    if (sectionCadastro) {

        sectionCadastro.classList.add(
            "active"
        );

    }


    if (sectionLogin) {

        sectionLogin.classList.remove(
            "active"
        );

    }


    if (btnIrCadastro) {

        btnIrCadastro.classList.add(
            "active"
        );

    }


    if (btnIrLogin) {

        btnIrLogin.classList.remove(
            "active"
        );

    }


    limparMensagem(
        mensagemLogin
    );


    if (lojistaNome) {

        lojistaNome.focus();

    }

}


// ======================================================
// MOSTRAR / ESCONDER SENHA
// ======================================================

if (
    btnVerSenhaLogin &&
    loginSenha
) {

    btnVerSenhaLogin.addEventListener(
        "click",
        () => {

            alternarSenha(
                loginSenha,
                btnVerSenhaLogin
            );

        }
    );

}


if (
    btnVerSenhaCadastro &&
    lojistaSenha
) {

    btnVerSenhaCadastro.addEventListener(
        "click",
        () => {

            alternarSenha(
                lojistaSenha,
                btnVerSenhaCadastro
            );

        }
    );

}


if (
    btnVerConfirmarSenha &&
    lojistaConfirmarSenha
) {

    btnVerConfirmarSenha.addEventListener(
        "click",
        () => {

            alternarSenha(
                lojistaConfirmarSenha,
                btnVerConfirmarSenha
            );

        }
    );

}


// ======================================================
// FUNÇÃO MOSTRAR / ESCONDER SENHA
// ======================================================

function alternarSenha(
    input,
    botao
) {

    if (!input || !botao) {

        return;

    }


    if (
        input.type === "password"
    ) {

        input.type =
            "text";

        botao.textContent =
            "Ocultar";

    } else {

        input.type =
            "password";

        botao.textContent =
            "Mostrar";

    }

}


// ======================================================
// LOGIN TEMPORÁRIO DO LOJISTA
// ======================================================

if (btnLogin) {

    btnLogin.addEventListener(
        "click",
        fazerLogin
    );

}


function fazerLogin(event) {

    if (event) {

        event.preventDefault();

    }


    // ==================================================
    // PEGAR DADOS DIGITADOS
    // ==================================================

    const email =
        loginEmail
            ? loginEmail.value
                .trim()
                .toLowerCase()
            : "";


    const senha =
        loginSenha
            ? loginSenha.value
            : "";


    limparMensagem(
        mensagemLogin
    );


    // ==================================================
    // VALIDAR CAMPOS VAZIOS
    // ==================================================

    if (
        email === "" ||
        senha === ""
    ) {

        mostrarMensagem(
            mensagemLogin,
            "Preencha e-mail e senha.",
            "erro"
        );

        return;

    }


    // ==================================================
    // DADOS DO LOJISTA
    // LOGIN TEMPORÁRIO PARA APRESENTAÇÃO
    // ==================================================

    const lojistaCadastrado = {

        idLojista: 1,

        nome:
            "Israel",

        cpf:
            "6288778117",

        cnpj:
            "45472546000183",

        email:
            "israel.contato02@gmail.com",

        senha:
            "123456789rs",

        telefone:
            "63992938076"

    };


    // ==================================================
    // VERIFICAR E-MAIL E SENHA
    // ==================================================

    if (
        email !==
        lojistaCadastrado.email ||
        senha !==
        lojistaCadastrado.senha
    ) {

        mostrarMensagem(
            mensagemLogin,
            "E-mail ou senha incorretos.",
            "erro"
        );

        return;

    }


    // ==================================================
    // CRIAR OBJETO DO LOJISTA LOGADO
    // NÃO SALVAMOS A SENHA
    // ==================================================

    const lojistaLogado = {

        idLojista:
            lojistaCadastrado.idLojista,

        nome:
            lojistaCadastrado.nome,

        cpf:
            lojistaCadastrado.cpf,

        cnpj:
            lojistaCadastrado.cnpj,

        email:
            lojistaCadastrado.email,

        telefone:
            lojistaCadastrado.telefone

    };


    // ==================================================
    // SALVAR LOJISTA NO LOCALSTORAGE
    // ==================================================

    localStorage.setItem(
        "lojista",
        JSON.stringify(
            lojistaLogado
        )
    );


    // ==================================================
    // REMOVER POSSÍVEL CLIENTE LOGADO
    // ==================================================

    localStorage.removeItem(
        "cliente"
    );


    // ==================================================
    // MOSTRAR NO CONSOLE
    // ==================================================

    console.log(
        "Lojista logado:",
        lojistaLogado
    );


    // ==================================================
    // MENSAGEM DE SUCESSO
    // ==================================================

    mostrarMensagem(
        mensagemLogin,
        "Login realizado com sucesso!",
        "sucesso"
    );


    // ==================================================
    // ABRIR HOME DO LOJISTA
    // ==================================================

    setTimeout(
        () => {

            window.location.href =
                "./homelojista.html";

        },
        500
    );

}


// ======================================================
// CADASTRAR LOJISTA
// ======================================================

if (btnCadastrar) {

    btnCadastrar.addEventListener(
        "click",
        cadastrarLojista
    );

}


async function cadastrarLojista(event) {

    if (event) {

        event.preventDefault();

    }


    // ==================================================
    // PEGAR VALORES
    // ==================================================

    const nome =
        lojistaNome
            ? lojistaNome.value.trim()
            : "";


    const cpf =
        lojistaCpf
            ? lojistaCpf.value.trim()
            : "";


    const cnpj =
        lojistaCnpj
            ? lojistaCnpj.value.trim()
            : "";


    const telefone =
        lojistaTelefone
            ? lojistaTelefone.value.trim()
            : "";


    const email =
        lojistaEmail
            ? lojistaEmail.value
                .trim()
                .toLowerCase()
            : "";


    const senha =
        lojistaSenha
            ? lojistaSenha.value
            : "";


    const confirmarSenha =
        lojistaConfirmarSenha
            ? lojistaConfirmarSenha.value
            : "";


    limparMensagem(
        mensagemCadastro
    );


    // ==================================================
    // CAMPOS OBRIGATÓRIOS
    // ==================================================

    if (
        nome === "" ||
        cpf === "" ||
        cnpj === "" ||
        email === "" ||
        senha === "" ||
        confirmarSenha === ""
    ) {

        mostrarMensagem(
            mensagemCadastro,
            "Preencha todos os campos obrigatórios.",
            "erro"
        );

        return;

    }


    // ==================================================
    // VALIDAR E-MAIL
    // ==================================================

    if (
        !validarEmail(email)
    ) {

        mostrarMensagem(
            mensagemCadastro,
            "Informe um e-mail válido.",
            "erro"
        );

        return;

    }


    // ==================================================
    // VALIDAR SENHA
    // ==================================================

    if (
        senha.length < 8
    ) {

        mostrarMensagem(
            mensagemCadastro,
            "A senha deve possuir pelo menos 8 caracteres.",
            "erro"
        );

        return;

    }


    if (
        senha.length > 13
    ) {

        mostrarMensagem(
            mensagemCadastro,
            "A senha deve possuir no máximo 13 caracteres.",
            "erro"
        );

        return;

    }


    // ==================================================
    // CONFIRMAR SENHA
    // ==================================================

    if (
        senha !==
        confirmarSenha
    ) {

        mostrarMensagem(
            mensagemCadastro,
            "As senhas não coincidem.",
            "erro"
        );

        return;

    }


    // ==================================================
    // REMOVER MÁSCARAS
    // ==================================================

    const cpfSemMascara =
        cpf.replace(
            /\D/g,
            ""
        );


    const cnpjSemMascara =
        cnpj.replace(
            /\D/g,
            ""
        );


    const telefoneSemMascara =
        telefone
            ? telefone.replace(
                /\D/g,
                ""
            )
            : null;


    // ==================================================
    // OBJETO LOJISTA
    // ==================================================

    const lojista = {

        nome:
            nome,

        cpf:
            cpfSemMascara,

        cnpj:
            cnpjSemMascara,

        telefone:
            telefoneSemMascara,

        email:
            email,

        senha:
            senha

    };


    console.log(
        "Lojista enviado:",
        lojista
    );


    // ==================================================
    // CADASTRAR NO BACKEND
    // ==================================================

    try {

        definirCarregamento(
            btnCadastrar,
            true,
            "Criando acesso..."
        );


        const resposta =
            await fetch(
                ROTAS.cadastro,
                {

                    method:
                        "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body:
                        JSON.stringify(
                            lojista
                        )

                }
            );


        let dados;


        try {

            dados =
                await resposta.json();

        } catch {

            throw new Error(
                "O servidor retornou uma resposta inválida."
            );

        }


        // ==================================================
        // ERRO
        // ==================================================

        if (
            !resposta.ok ||
            !dados.sucesso
        ) {

            mostrarMensagem(
                mensagemCadastro,
                dados.mensagem ||
                "Não foi possível realizar o cadastro.",
                "erro"
            );

            return;

        }


        // ==================================================
        // SUCESSO
        // ==================================================

        mostrarMensagem(
            mensagemCadastro,
            dados.mensagem ||
            "Cadastro realizado com sucesso!",
            "sucesso"
        );


        // ==================================================
        // PREENCHE LOGIN COM E-MAIL CADASTRADO
        // ==================================================

        if (loginEmail) {

            loginEmail.value =
                email;

        }


        // ==================================================
        // LIMPAR CADASTRO
        // ==================================================

        limparCadastro();


        // ==================================================
        // VOLTAR PARA LOGIN
        // ==================================================

        setTimeout(
            () => {

                abrirLogin();


                if (loginEmail) {

                    loginEmail.value =
                        email;

                }


                if (loginSenha) {

                    loginSenha.focus();

                }

            },
            800
        );


    } catch (erro) {

        console.error(
            "Erro ao cadastrar lojista:",
            erro
        );


        mostrarMensagem(
            mensagemCadastro,
            "Não foi possível conectar ao servidor.",
            "erro"
        );


    } finally {

        definirCarregamento(
            btnCadastrar,
            false,
            "Criar acesso"
        );

    }

}


// ======================================================
// VALIDAR E-MAIL
// ======================================================

function validarEmail(email) {

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(
        email
    );

}


// ======================================================
// MENSAGENS
// ======================================================

function mostrarMensagem(
    elemento,
    texto,
    tipo
) {

    if (!elemento) {

        if (tipo === "erro") {

            alert(texto);

        }

        return;

    }


    elemento.textContent =
        texto;

    elemento.className =
        `mensagem ${tipo}`;

}


function limparMensagem(
    elemento
) {

    if (!elemento) {

        return;

    }


    elemento.textContent =
        "";

    elemento.className =
        "mensagem";

}


// ======================================================
// CARREGAMENTO DOS BOTÕES
// ======================================================

function definirCarregamento(
    botao,
    carregando,
    texto
) {

    if (!botao) {

        return;

    }


    if (carregando) {

        botao.disabled =
            true;

        botao.textContent =
            texto;

    } else {

        botao.disabled =
            false;

        botao.textContent =
            texto;

    }

}


// ======================================================
// LIMPAR CADASTRO
// ======================================================

function limparCadastro() {

    if (lojistaNome) {

        lojistaNome.value =
            "";

    }


    if (lojistaCpf) {

        lojistaCpf.value =
            "";

    }


    if (lojistaCnpj) {

        lojistaCnpj.value =
            "";

    }


    if (lojistaTelefone) {

        lojistaTelefone.value =
            "";

    }


    if (lojistaEmail) {

        lojistaEmail.value =
            "";

    }


    if (lojistaSenha) {

        lojistaSenha.value =
            "";

        lojistaSenha.type =
            "password";

    }


    if (lojistaConfirmarSenha) {

        lojistaConfirmarSenha.value =
            "";

        lojistaConfirmarSenha.type =
            "password";

    }


    if (btnVerSenhaCadastro) {

        btnVerSenhaCadastro.textContent =
            "Mostrar";

    }


    if (btnVerConfirmarSenha) {

        btnVerConfirmarSenha.textContent =
            "Mostrar";

    }

}


// ======================================================
// MÁSCARA CPF
// ======================================================

if (lojistaCpf) {

    lojistaCpf.addEventListener(
        "input",
        () => {

            let valor =
                lojistaCpf.value
                    .replace(
                        /\D/g,
                        ""
                    );


            valor =
                valor.substring(
                    0,
                    11
                );


            if (
                valor.length > 9
            ) {

                valor =
                    valor.replace(
                        /(\d{3})(\d{3})(\d{3})(\d{1,2})/,
                        "$1.$2.$3-$4"
                    );

            } else if (
                valor.length > 6
            ) {

                valor =
                    valor.replace(
                        /(\d{3})(\d{3})(\d+)/,
                        "$1.$2.$3"
                    );

            } else if (
                valor.length > 3
            ) {

                valor =
                    valor.replace(
                        /(\d{3})(\d+)/,
                        "$1.$2"
                    );

            }


            lojistaCpf.value =
                valor;

        }
    );

}


// ======================================================
// MÁSCARA CNPJ
// ======================================================

if (lojistaCnpj) {

    lojistaCnpj.addEventListener(
        "input",
        () => {

            let valor =
                lojistaCnpj.value
                    .replace(
                        /\D/g,
                        ""
                    );


            valor =
                valor.substring(
                    0,
                    14
                );


            valor =
                valor.replace(
                    /^(\d{2})(\d)/,
                    "$1.$2"
                );


            valor =
                valor.replace(
                    /^(\d{2})\.(\d{3})(\d)/,
                    "$1.$2.$3"
                );


            valor =
                valor.replace(
                    /\.(\d{3})(\d)/,
                    ".$1/$2"
                );


            valor =
                valor.replace(
                    /(\d{4})(\d)/,
                    "$1-$2"
                );


            lojistaCnpj.value =
                valor;

        }
    );

}


// ======================================================
// MÁSCARA TELEFONE
// ======================================================

if (lojistaTelefone) {

    lojistaTelefone.addEventListener(
        "input",
        () => {

            let valor =
                lojistaTelefone.value
                    .replace(
                        /\D/g,
                        ""
                    );


            valor =
                valor.substring(
                    0,
                    11
                );


            if (
                valor.length > 10
            ) {

                valor =
                    valor.replace(
                        /(\d{2})(\d{5})(\d{4})/,
                        "($1) $2-$3"
                    );

            } else if (
                valor.length > 6
            ) {

                valor =
                    valor.replace(
                        /(\d{2})(\d{4})(\d{0,4})/,
                        "($1) $2-$3"
                    );

            } else if (
                valor.length > 2
            ) {

                valor =
                    valor.replace(
                        /(\d{2})(\d+)/,
                        "($1) $2"
                    );

            }


            lojistaTelefone.value =
                valor;

        }
    );

}