/*=====================================================
    CONFIGURAÇÕES DA PÁGINA
=====================================================*/

document.title = "Acesso";



/*=====================================================
    HEADER
=====================================================*/

document.getElementById("logo-img").src = "/assets/user.png";
document.getElementById("logo-img").alt = "Logo";

document.getElementById("logo-text").textContent = "Acesso";

document.getElementById("menu-login").textContent = "Entrar";
document.getElementById("menu-cadastro").textContent = "Cadastrar";
document.getElementById("menu-lojista").textContent = "Sou Lojista";
document.getElementById("menu-ajuda").textContent = "Ajuda";

document.getElementById("menu-login").href = "#login";
document.getElementById("menu-cadastro").href = "#register";
document.getElementById("menu-ajuda").href = "#footer";



/*=====================================================
    HERO
=====================================================*/

document.getElementById("hero-title").textContent =
    "Bem-vindo de volta 👋";

document.getElementById("hero-description").textContent =
    "Entre com sua conta para acessar sua plataforma.";

document.getElementById("btn-criar-conta").textContent =
    "Criar conta";

document.getElementById("btn-ir-login").textContent =
    "Entrar";

document.getElementById("hero-image").src =
    "/assets/marca.png";

document.getElementById("hero-image").alt =
    "Logo da empresa";



/*=====================================================
    LOGIN
=====================================================*/

document.getElementById("login-title").textContent =
    "Login";

document.getElementById("login-description").textContent =
    "Acesse sua conta em poucos segundos.";

document.getElementById("label-email").textContent =
    "E-mail";

document.getElementById("label-password").textContent =
    "Senha";

document.getElementById("email").placeholder =
    "Digite seu e-mail";

document.getElementById("password").placeholder =
    "Digite sua senha";

document.getElementById("btn-forgot-password").textContent =
    "Esqueci minha senha";

document.getElementById("btn-login").textContent =
    "Entrar";



/*=====================================================
    LOGIN SOCIAL
=====================================================*/

document.getElementById("social-title").textContent =
    "Entrar com Google ou Microsoft";

document.getElementById("social-description").textContent =
    "Faça autenticação utilizando sua conta.";

document.getElementById("google-icon").src =
    "/assets/google.png";

document.getElementById("google-icon").alt =
    "Google";

document.getElementById("google-title").textContent =
    "Google";

document.getElementById("google-description").textContent =
    "Utilize sua conta Google para acessar a plataforma.";

document.getElementById("btn-google").textContent =
    "Entrar com Google";

document.getElementById("microsoft-icon").src =
    "/assets/microsoft.png";

document.getElementById("microsoft-icon").alt =
    "Microsoft";

document.getElementById("microsoft-title").textContent =
    "Microsoft";

document.getElementById("microsoft-description").textContent =
    "Utilize sua conta Microsoft para acessar a plataforma.";

document.getElementById("btn-microsoft").textContent =
    "Entrar com Microsoft";



/*=====================================================
    CRIAR CONTA
=====================================================*/

document.getElementById("account-title").textContent =
    "Crie sua conta";

document.getElementById("account-description").textContent =
    "Cadastre-se para acessar o sistema.";

document.getElementById("btn-open-login").textContent =
    "Já tenho conta";

document.getElementById("btn-open-register").textContent =
    "Cadastrar";



/*=====================================================
    CADASTRO
=====================================================*/

document.getElementById("register-title").textContent =
    "Cadastro de usuário";

document.getElementById("register-description").textContent =
    "Preencha os dados abaixo para criar sua conta.";

document.getElementById("label-name").textContent =
    "Nome completo";

document.getElementById("label-register-email").textContent =
    "E-mail";

document.getElementById("label-register-password").textContent =
    "Senha";

document.getElementById("label-confirm-password").textContent =
    "Confirmar senha";

document.getElementById("name").placeholder =
    "Digite seu nome";

document.getElementById("register-email").placeholder =
    "Digite seu e-mail";

document.getElementById("register-password").placeholder =
    "Digite sua senha";

document.getElementById("confirm-password").placeholder =
    "Confirme sua senha";

document.getElementById("btn-back").textContent =
    "Voltar";

document.getElementById("btn-register").textContent =
    "Cadastrar";



/*=====================================================
    FOOTER
=====================================================*/

document.getElementById("footer-copy").textContent =
    "© 2025 Sua Plataforma";

document.getElementById("footer-policy").textContent =
    "Política de Privacidade";

document.getElementById("footer-policy").href =
    "#";

document.getElementById("footer-terms").textContent =
    "Termos de Uso";

document.getElementById("footer-terms").href =
    "#";

document.getElementById("footer-contact").textContent =
    "Contato";

document.getElementById("footer-contact").href =
    "mailto:suporte@suaempresa.com";



/*=====================================================
    EVENTOS
=====================================================*/

// =======================
// HERO
// =======================

// Entrar
document.getElementById("btn-ir-login").addEventListener("click", () => {

    document.getElementById("login").scrollIntoView({
        behavior: "smooth"
    });

});

// Criar conta
document.getElementById("btn-criar-conta").addEventListener("click", () => {

    document.getElementById("register").scrollIntoView({
        behavior: "smooth"
    });

});

// =======================
// MENU SUPERIOR
// =======================

// Menu Entrar
document.getElementById("menu-login").addEventListener("click", (e) => {

    e.preventDefault();

    document.getElementById("login").scrollIntoView({
        behavior: "smooth"
    });

});

// Menu Cadastrar
document.getElementById("menu-cadastro").addEventListener("click", (e) => {

    e.preventDefault();

    document.getElementById("register").scrollIntoView({
        behavior: "smooth"
    });

});

// =======================
// SEÇÃO "CRIE SUA CONTA"
// =======================

// Já tenho conta
document.getElementById("btn-open-login").addEventListener("click", () => {

    document.getElementById("login").scrollIntoView({
        behavior: "smooth"
    });

});

// Cadastrar
document.getElementById("btn-open-register").addEventListener("click", () => {

    document.getElementById("register").scrollIntoView({
        behavior: "smooth"
    });

});

// =======================
// BOTÃO VOLTAR
// =======================

document.getElementById("btn-back").addEventListener("click", () => {

    document.getElementById("login").scrollIntoView({
        behavior: "smooth"
    });

});
/*=====================================================
    CADASTRO DO CLIENTE
=====================================================*/

document
    .getElementById("btn-register")
    .addEventListener("click", async () => {

        /*=================================================
            ELEMENTOS DO FORMULÁRIO
        =================================================*/

        const campoNome =
            document.getElementById("name");

        const campoEmail =
            document.getElementById("register-email");

        const campoSenha =
            document.getElementById("register-password");

        const campoConfirmarSenha =
            document.getElementById("confirm-password");

        const botaoCadastrar =
            document.getElementById("btn-register");

        const mensagem =
            document.getElementById("mensagem");


        /*=================================================
            VALORES DIGITADOS
        =================================================*/

        const nome =
            campoNome.value.trim();

        const email =
            campoEmail.value.trim().toLowerCase();

        const senha =
            campoSenha.value;

        const confirmarSenha =
            campoConfirmarSenha.value;


        /*=================================================
            LIMPAR MENSAGEM ANTERIOR
        =================================================*/

        mensagem.textContent = "";

        mensagem.style.color = "";


        /*=================================================
            VALIDAR CAMPOS VAZIOS
        =================================================*/

        if (
            nome === "" ||
            email === "" ||
            senha === "" ||
            confirmarSenha === ""
        ) {

            mensagem.style.color = "red";

            mensagem.textContent =
                "Preencha todos os campos.";

            return;

        }


        /*=================================================
            VALIDAR NOME
        =================================================*/

        if (nome.length < 3) {

            mensagem.style.color = "red";

            mensagem.textContent =
                "O nome deve possuir pelo menos 3 caracteres.";

            campoNome.focus();

            return;

        }


        /*=================================================
            VALIDAR E-MAIL
        =================================================*/

        const emailValido =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailValido.test(email)) {

            mensagem.style.color = "red";

            mensagem.textContent =
                "Digite um e-mail válido.";

            campoEmail.focus();

            return;

        }


        /*=================================================
            VALIDAR TAMANHO DA SENHA
        =================================================*/

        if (
            senha.length < 8 ||
            senha.length > 13
        ) {

            mensagem.style.color = "red";

            mensagem.textContent =
                "A senha deve possuir entre 8 e 13 caracteres.";

            campoSenha.focus();

            return;

        }


        /*=================================================
            VALIDAR LETRA MAIÚSCULA
        =================================================*/

        if (!/[A-Z]/.test(senha)) {

            mensagem.style.color = "red";

            mensagem.textContent =
                "A senha deve conter pelo menos uma letra maiúscula.";

            campoSenha.focus();

            return;

        }


        /*=================================================
            VALIDAR LETRA MINÚSCULA
        =================================================*/

        if (!/[a-z]/.test(senha)) {

            mensagem.style.color = "red";

            mensagem.textContent =
                "A senha deve conter pelo menos uma letra minúscula.";

            campoSenha.focus();

            return;

        }


        /*=================================================
            VALIDAR NÚMERO
        =================================================*/

        if (!/[0-9]/.test(senha)) {

            mensagem.style.color = "red";

            mensagem.textContent =
                "A senha deve conter pelo menos um número.";

            campoSenha.focus();

            return;

        }


        /*=================================================
            VALIDAR CARACTERE ESPECIAL
        =================================================*/

        const possuiCaractereEspecial =
            /[!@#$%^&*(),.?":{}|<>_\-+=/\[\]\\;'`~]/;

        if (!possuiCaractereEspecial.test(senha)) {

            mensagem.style.color = "red";

            mensagem.textContent =
                "A senha deve conter pelo menos um caractere especial.";

            campoSenha.focus();

            return;

        }


        /*=================================================
            VALIDAR SENHA COM O NOME
        =================================================*/

        const primeiroNome =
            nome
                .split(" ")[0]
                .toLowerCase();

        if (
            primeiroNome.length >= 3 &&
            senha.toLowerCase().includes(primeiroNome)
        ) {

            mensagem.style.color = "red";

            mensagem.textContent =
                "A senha não pode conter o nome do usuário.";

            campoSenha.focus();

            return;

        }


        /*=================================================
            COMPARAR AS SENHAS
        =================================================*/

        if (senha !== confirmarSenha) {

            mensagem.style.color = "red";

            mensagem.textContent =
                "As senhas não conferem.";

            campoConfirmarSenha.focus();

            return;

        }


        /*=================================================
            CRIAR OBJETO CLIENTE
        =================================================*/

        const cliente = {

            nome: nome,

            cpf: null,

            telefone: null,

            email: email,

            senha: senha,

            data_nascimento: null,

            Loja_idLoja: 1

        };


        console.log(
            "Cliente enviado:",
            cliente
        );


        /*=================================================
            DESABILITAR BOTÃO DURANTE O CADASTRO
        =================================================*/

        botaoCadastrar.disabled = true;

        botaoCadastrar.textContent =
            "Cadastrando...";


        /*=================================================
            ENVIAR PARA O BACKEND
        =================================================*/

        try {

            const respostaHttp =
                await fetch(
                    "http://localhost:3000/clientes",
                    {

                        method: "POST",

                        headers: {

                            "Content-Type":
                                "application/json"

                        },

                        body:
                            JSON.stringify(cliente)

                    }
                );


            /*=================================================
                LER A RESPOSTA DO SERVIDOR
            =================================================*/

            let resposta;

            try {

                resposta =
                    await respostaHttp.json();

            } catch (erroJson) {

                throw new Error(
                    "O servidor retornou uma resposta inválida."
                );

            }


            /*=================================================
                TRATAR RESPOSTAS DE ERRO
            =================================================*/

            if (
                !respostaHttp.ok ||
                !resposta.sucesso
            ) {

                throw new Error(
                    resposta.mensagem ||
                    "Não foi possível realizar o cadastro."
                );

            }


            /*=================================================
                CADASTRO REALIZADO COM SUCESSO
            =================================================*/

            mensagem.style.color = "green";

            mensagem.textContent =
                resposta.mensagem ||
                "Cliente cadastrado com sucesso!";

            alert(
                resposta.mensagem ||
                "Cliente cadastrado com sucesso!"
            );


            /*=================================================
                LIMPAR SOMENTE OS CAMPOS EXISTENTES
            =================================================*/

            campoNome.value = "";

            campoEmail.value = "";

            campoSenha.value = "";

            campoConfirmarSenha.value = "";


            /*=================================================
                OCULTAR NOVAMENTE AS SENHAS
            =================================================*/

            campoSenha.type = "password";

            campoConfirmarSenha.type = "password";

            document
                .getElementById("toggle-password")
                .textContent = "👁";

            document
                .getElementById(
                    "toggle-confirm-password"
                )
                .textContent = "👁";


            /*=================================================
                VOLTAR O FOCO PARA O NOME
            =================================================*/

            campoNome.focus();

        } catch (erro) {

            console.error(
                "Erro durante o cadastro:",
                erro
            );

            mensagem.style.color = "red";

            mensagem.textContent =
                erro.message ||
                "Erro ao conectar com o servidor.";

        } finally {

            botaoCadastrar.disabled = false;

            botaoCadastrar.textContent =
                "Cadastrar";

        }

    });

/*=====================================================
    MOSTRAR / OCULTAR SENHA
=====================================================*/

// Cadastro - Senha

const togglePassword =
    document.getElementById("toggle-password");

const registerPassword =
    document.getElementById("register-password");

togglePassword.addEventListener("click", () => {

    if (registerPassword.type === "password") {

        registerPassword.type = "text";
        togglePassword.textContent = "🙈";

    } else {

        registerPassword.type = "password";
        togglePassword.textContent = "👁";

    }

});


// Cadastro - Confirmar senha

const toggleConfirmPassword =
    document.getElementById("toggle-confirm-password");

const confirmPassword =
    document.getElementById("confirm-password");

toggleConfirmPassword.addEventListener("click", () => {

    if (confirmPassword.type === "password") {

        confirmPassword.type = "text";
        toggleConfirmPassword.textContent = "🙈";

    } else {

        confirmPassword.type = "password";
        toggleConfirmPassword.textContent = "👁";

    }

});


// Login

const passwordLogin =
    document.getElementById("password");

if (passwordLogin) {

    // Cria o botão apenas se ele ainda não existir

    if (!document.getElementById("toggle-login-password")) {

        const botao = document.createElement("button");

        botao.type = "button";

        botao.id = "toggle-login-password";

        botao.className = "btn-password";

        botao.textContent = "👁";

        passwordLogin.parentNode.style.position = "relative";

        botao.style.position = "absolute";
        botao.style.right = "10px";
        botao.style.top = "50%";
        botao.style.transform = "translateY(-50%)";
        botao.style.border = "none";
        botao.style.background = "transparent";
        botao.style.cursor = "pointer";

        passwordLogin.parentNode.appendChild(botao);

        botao.addEventListener("click", () => {

            if (passwordLogin.type === "password") {

                passwordLogin.type = "text";
                botao.textContent = "🙈";

            } else {

                passwordLogin.type = "password";
                botao.textContent = "👁";

            }

        });

    }

}
/*=====================================================
LOGIN DO CLIENTE
=====================================================*/

const btnEntrar = document.getElementById("btn-login");

btnEntrar.addEventListener("click", () => {
    

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("password").value;

    

    if (email === "" || senha === "") {

        alert("Preencha todos os campos.");
        return;

    }

    if (senha.length < 8) {

        alert("A senha deve possuir no mínimo 8 caracteres.");
        return;

    }

    fetch("http://localhost:3000/clientes/login", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({
        email,
        senha
    })

})

.then(res => res.json())

.then(resposta => {

    if (resposta.sucesso) {

        localStorage.setItem(
            "cliente",
            JSON.stringify(resposta.cliente)
        );

        alert("Login realizado com sucesso!");
        window.location.href = "../index.html";

    } else {

        alert(resposta.mensagem);

    }

});
});

//==========================================
// ACESSO DO LOJISTA
//==========================================

const menuLojista =
    document.getElementById(
        "menu-lojista"
    );


if (menuLojista) {

    menuLojista.addEventListener(
        "click",
        (event) => {

            event.preventDefault();

            window.location.href =
                "./loginlojista.html";

        }
    );

}