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

document.getElementById("btn-criar-conta").addEventListener("click", () => {

    document.getElementById("register").scrollIntoView({
        behavior: "smooth"
    });

});

document.getElementById("btn-ir-login").addEventListener("click", () => {

    document.getElementById("login").scrollIntoView({
        behavior: "smooth"
    });

});

document.getElementById("btn-open-register").addEventListener("click", () => {

    document.getElementById("register").scrollIntoView({
        behavior: "smooth"
    });

});

document.getElementById("btn-open-login").addEventListener("click", () => {

    document.getElementById("login").scrollIntoView({
        behavior: "smooth"
    });

});


/*=====================================================
    FORMULÁRIOS
=====================================================*/

document
    .getElementById("form-login")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Login enviado.");

    });




document
    .getElementById("btn-register")
    .addEventListener("click", function (evento) {

        // Impede o formulário de recarregar a página
        evento.preventDefault();

        const name = document
            .getElementById("name")
            .value
            .trim();

        const email = document
            .getElementById("register-email")
            .value
            .trim();

        const password = document
            .getElementById("register-password")
            .value;

        const confirmPassword = document
            .getElementById("confirm-password")
            .value;


        if (
            name === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === ""
        ) {
            alert("Por favor, preencha todos os campos.");
            return;
        }


        if (password.length > 13) {
            alert("A senha deve ter no máximo 13 caracteres.");
            return;
        }


        if (password.length < 8) {
            alert("A senha deve ter no mínimo 8 caracteres.");
            return;
        }


        if (password !== confirmPassword) {
            alert("As senhas não coincidem.");
            return;
        }


        if (!email.includes("@") || !email.includes(".")) {
            alert("Por favor, insira um e-mail válido.");
            return;
        }


        const cliente = {
            nome: name,
            email: email,
            senha: password,
            Loja_idLoja: 1
        };


        console.log("Dados enviados:", cliente);


        fetch("http://localhost:3000/cliente", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(cliente)

        })
            .then(async function (response) {

                const resposta = await response.json();

                if (!response.ok) {
                    throw new Error(
                        resposta.mensagem ||
                        "Erro na requisição. Código: " + response.status
                    );
                }

                return resposta;

            })
            .then(function (resposta) {

                if (resposta.sucesso === true) {

                    alert(
                        resposta.mensagem ||
                        "Cadastro realizado com sucesso!"
                    );

                    document
                        .getElementById("form-register")
                        .reset();

                    document
                        .getElementById("login")
                        .scrollIntoView({
                            behavior: "smooth"
                        });

                } else {

                    alert(
                        "Erro ao cadastrar: " +
                        (resposta.mensagem || "Erro desconhecido.")
                    );

                }

            })
            .catch(function (erro) {

                console.error(
                    "Erro ao cadastrar cliente:",
                    erro
                );

                alert(erro.message);

            });

    });

