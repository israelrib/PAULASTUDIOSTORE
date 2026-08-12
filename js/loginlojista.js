// ======================================================
// CONFIGURAÇÕES DA API
// ======================================================

const API_URL = "http://localhost:3000";

const ROTAS = {

    cadastro:
        `${API_URL}/lojista`,

    login:
        `${API_URL}/lojista/login`

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

btnIrLogin.addEventListener(
    "click",
    abrirLogin
);


btnIrCadastro.addEventListener(
    "click",
    abrirCadastro
);


btnAbrirCadastro.addEventListener(
    "click",
    abrirCadastro
);


btnAbrirLogin.addEventListener(
    "click",
    abrirLogin
);


btnVoltarLoja.addEventListener(
    "click",
    () => {

        window.location.href =
            "./login.html";

    }
);


// ======================================================
// ABRIR LOGIN
// ======================================================

function abrirLogin() {

    sectionLogin.classList.add(
        "active"
    );

    sectionCadastro.classList.remove(
        "active"
    );


    btnIrLogin.classList.add(
        "active"
    );

    btnIrCadastro.classList.remove(
        "active"
    );


    limparMensagem(
        mensagemCadastro
    );


    loginEmail.focus();

}


// ======================================================
// ABRIR CADASTRO
// ======================================================

function abrirCadastro() {

    sectionCadastro.classList.add(
        "active"
    );

    sectionLogin.classList.remove(
        "active"
    );


    btnIrCadastro.classList.add(
        "active"
    );

    btnIrLogin.classList.remove(
        "active"
    );


    limparMensagem(
        mensagemLogin
    );


    lojistaNome.focus();

}


// ======================================================
// MOSTRAR / ESCONDER SENHA
// ======================================================

btnVerSenhaLogin.addEventListener(
    "click",
    () => {

        alternarSenha(
            loginSenha,
            btnVerSenhaLogin
        );

    }
);


btnVerSenhaCadastro.addEventListener(
    "click",
    () => {

        alternarSenha(
            lojistaSenha,
            btnVerSenhaCadastro
        );

    }
);


btnVerConfirmarSenha.addEventListener(
    "click",
    () => {

        alternarSenha(
            lojistaConfirmarSenha,
            btnVerConfirmarSenha
        );

    }
);


// ======================================================
// FUNÇÃO MOSTRAR / ESCONDER SENHA
// ======================================================

function alternarSenha(
    input,
    botao
) {

    if (
        input.type === "password"
    ) {

        input.type = "text";

        botao.textContent =
            "Ocultar";

    } else {

        input.type = "password";

        botao.textContent =
            "Mostrar";

    }

}


// ======================================================
// LOGIN DO LOJISTA
// ======================================================

btnLogin.addEventListener(
    "click",
    fazerLogin
);


async function fazerLogin() {

    const email =
        loginEmail.value.trim();

    const senha =
        loginSenha.value;

    limparMensagem(
        mensagemLogin
    );

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

    try {

        definirCarregamento(
            btnLogin,
            true,
            "Entrando..."
        );

        const resposta =
            await fetch(
                "http://localhost:3000/lojista/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify({
                            email: email,
                            senha: senha
                        })
                }
            );

        const dados =
            await resposta.json();

        if (!resposta.ok) {

            mostrarMensagem(
                mensagemLogin,
                dados.mensagem ||
                "E-mail ou senha inválidos.",
                "erro"
            );

            return;
        }

        // Salva os dados do lojista logado
        localStorage.setItem(
            "lojista",
            JSON.stringify(
                dados.lojista
            )
        );

        mostrarMensagem(
            mensagemLogin,
            "Login realizado com sucesso!",
            "sucesso"
        );

        // Redireciona para a home do lojista
        setTimeout(() => {

            window.location.href =
                "./homelojista.html";

        }, 500);

    } catch (erro) {

        console.error(
            "Erro no login do lojista:",
            erro
        );

        mostrarMensagem(
            mensagemLogin,
            "Não foi possível conectar ao servidor.",
            "erro"
        );

    } finally {

        definirCarregamento(
            btnLogin,
            false,
            "Entrar no painel"
        );
    }
}


// ======================================================
// CADASTRAR LOJISTA
// ======================================================

btnCadastrar.addEventListener(
    "click",
    cadastrarLojista
);


async function cadastrarLojista() {

    const nome =
        lojistaNome.value
            .trim();

    const cpf =
        lojistaCpf.value
            .trim();

    const cnpj =
        lojistaCnpj.value
            .trim();

    const telefone =
        lojistaTelefone.value
            .trim();

    const email =
        lojistaEmail.value
            .trim();

    const senha =
        lojistaSenha.value;

    const confirmarSenha =
        lojistaConfirmarSenha.value;


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
    // VALIDAÇÃO DO E-MAIL
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
    // VALIDAÇÃO DA SENHA
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


    if (
        senha !== confirmarSenha
    ) {

        mostrarMensagem(
            mensagemCadastro,
            "As senhas não coincidem.",
            "erro"
        );

        return;

    }


    // ==================================================
    // OBJETO LOJISTA
    // ==================================================

    const lojista = {

        nome: nome,

        cpf:
            cpf, 

        cnpj:
            cnpj, 

        telefone:
            telefone || null,

        email: email,

        senha: senha

    };


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

                    method: "POST",

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


        const dados =
            await resposta.json();


        if (!resposta.ok) {

            mostrarMensagem(
                mensagemCadastro,
                dados.mensagem ||
                "Não foi possível realizar o cadastro.",
                "erro"
            );

            return;

        }


        mostrarMensagem(
            mensagemCadastro,
            "Cadastro realizado com sucesso!",
            "sucesso"
        );


        // ==================================================
        // PREENCHE O LOGIN COM O E-MAIL CADASTRADO
        // ==================================================

        loginEmail.value =
            email;


        // ==================================================
        // LIMPA O CADASTRO
        // ==================================================

        limparCadastro();


        // ==================================================
        // VOLTA PARA LOGIN
        // ==================================================

        setTimeout(
            () => {

                abrirLogin();

                loginEmail.value =
                    email;

                loginSenha.focus();

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

    return regex.test(email);

}


// ======================================================
// MENSAGENS
// ======================================================

function mostrarMensagem(
    elemento,
    texto,
    tipo
) {

    elemento.textContent =
        texto;

    elemento.className =
        `mensagem ${tipo}`;

}


function limparMensagem(
    elemento
) {

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

    lojistaNome.value =
        "";

    lojistaCpf.value =
        "";

    lojistaCnpj.value =
        "";

    lojistaTelefone.value =
        "";

    lojistaEmail.value =
        "";

    lojistaSenha.value =
        "";

    lojistaConfirmarSenha.value =
        "";


    // Volta os campos para password

    lojistaSenha.type =
        "password";

    lojistaConfirmarSenha.type =
        "password";


    btnVerSenhaCadastro.textContent =
        "Mostrar";

    btnVerConfirmarSenha.textContent =
        "Mostrar";

}


// ======================================================
// MÁSCARA CPF
// ======================================================

lojistaCpf.addEventListener(
    "input",
    () => {

        let valor =
            lojistaCpf.value
                .replace(/\D/g, "");

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


// ======================================================
// MÁSCARA CNPJ
// ======================================================

lojistaCnpj.addEventListener(
    "input",
    () => {

        let valor =
            lojistaCnpj.value
                .replace(/\D/g, "");

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


// ======================================================
// MÁSCARA TELEFONE
// ======================================================

lojistaTelefone.addEventListener(
    "input",
    () => {

        let valor =
            lojistaTelefone.value
                .replace(/\D/g, "");

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