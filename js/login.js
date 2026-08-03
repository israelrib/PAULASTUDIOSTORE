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
/*=====================================================
    CADASTRO DO CLIENTE
=====================================================*/

document
    .getElementById("btn-register")
    .addEventListener("click", async (event) => {

        // Impede o formulário de recarregar a página
        event.preventDefault();

        const nome = document
            .getElementById("name")
            .value
            .trim();

        const email = document
            .getElementById("register-email")
            .value
            .trim()
            .toLowerCase();

        const senha = document
            .getElementById("register-password")
            .value;

        const confirmarSenha = document
            .getElementById("confirm-password")
            .value;

        /*
        O seu HTML ainda não possui um elemento com id="mensagem".
        Por isso, ele será criado apenas uma vez pelo JavaScript.
        */
        let mensagem = document.getElementById("mensagem");

        if (!mensagem) {
            mensagem = document.createElement("p");
            mensagem.id = "mensagem";

            document
                .getElementById("form-register")
                .appendChild(mensagem);
        }

        // Limpa a mensagem anterior
        mensagem.innerHTML = "";

        // Verifica se todos os campos foram preenchidos
        if (
            nome === "" ||
            email === "" ||
            senha === "" ||
            confirmarSenha === ""
        ) {
            exibirMensagem(
                "Preencha todos os campos.",
                "red"
            );

            return;
        }

        // Validação do nome
        if (nome.length < 3) {
            exibirMensagem(
                "O nome deve possuir pelo menos 3 caracteres.",
                "red"
            );

            return;
        }

        // Validação do e-mail
        const emailValido =
            /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

        if (!emailValido.test(email)) {
            exibirMensagem(
                "Digite um e-mail válido.",
                "red"
            );

            return;
        }

        // Validação do tamanho da senha
        if (senha.length < 8 || senha.length > 13) {
            exibirMensagem(
                "A senha deve possuir entre 8 e 13 caracteres.",
                "red"
            );

            return;
        }

        // Verifica se existe letra maiúscula
        if (!/[A-Z]/.test(senha)) {
            exibirMensagem(
                "A senha deve conter pelo menos uma letra maiúscula.",
                "red"
            );

            return;
        }

        // Verifica se existe letra minúscula
        if (!/[a-z]/.test(senha)) {
            exibirMensagem(
                "A senha deve conter pelo menos uma letra minúscula.",
                "red"
            );

            return;
        }

        // Verifica se existe um número
        if (!/[0-9]/.test(senha)) {
            exibirMensagem(
                "A senha deve conter pelo menos um número.",
                "red"
            );

            return;
        }

        // Verifica se existe caractere especial
        if (!/[^A-Za-z0-9]/.test(senha)) {
            exibirMensagem(
                "A senha deve conter pelo menos um caractere especial.",
                "red"
            );

            return;
        }

        // Verifica se a senha contém o primeiro nome
        const primeiroNome = nome
            .split(" ")[0]
            .toLowerCase();

        if (
            primeiroNome.length >= 3 &&
            senha.toLowerCase().includes(primeiroNome)
        ) {
            exibirMensagem(
                "A senha não pode conter o seu nome.",
                "red"
            );

            return;
        }

        // Verifica se as senhas são iguais
        if (senha !== confirmarSenha) {
            exibirMensagem(
                "As senhas não são iguais.",
                "red"
            );

            return;
        }

        /*
        Como cpf, telefone e data de nascimento não existem
        no HTML, eles não podem ser enviados neste cadastro.
        */
        const cliente = {
            nome: nome,
            email: email,
            senha: senha,
            Loja_idLoja: 1
        };

        console.log("Cliente enviado:", cliente);

        try {
            exibirMensagem(
                "Realizando cadastro...",
                "blue"
            );

            const respostaServidor = await fetch(
                "http://localhost:3000/cliente",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(cliente)
                }
            );

            let resposta;

            try {
                resposta = await respostaServidor.json();
            } catch {
                resposta = {};
            }

            if (!respostaServidor.ok) {
                exibirMensagem(
                    resposta.mensagem ||
                    "Não foi possível realizar o cadastro.",
                    "red"
                );

                return;
            }

            exibirMensagem(
                resposta.mensagem ||
                "Cadastro realizado com sucesso!",
                "green"
            );

            limparCampos();

        } catch (erro) {
            console.error(
                "Erro ao cadastrar cliente:",
                erro
            );

            exibirMensagem(
                "Erro ao conectar com o servidor.",
                "red"
            );
        }

        function exibirMensagem(texto, cor) {
            mensagem.style.color = cor;
            mensagem.innerHTML = texto;
        }

        function limparCampos() {
            document.getElementById("name").value = "";
            document.getElementById("register-email").value = "";
            document.getElementById("register-password").value = "";
            document.getElementById("confirm-password").value = "";
        }
    });




    /*=====================================================
    LOGIN DO CLIENTE
=====================================================*/

document
    .getElementById("btn-login")
    .addEventListener("click", async () => {

        const email = document
            .getElementById("email")
            .value
            .trim()
            .toLowerCase();

        const senha = document
            .getElementById("password")
            .value;

        const mensagem = document
            .getElementById("mensagem");

        mensagem.textContent = "";

        /*=====================================================
            VALIDAR CAMPOS
        =====================================================*/

        if (email === "" || senha === "") {

            mensagem.style.color = "red";
            mensagem.textContent =
                "Preencha o e-mail e a senha.";
            return;

        }

        /*=====================================================
            VALIDAR E-MAIL
        =====================================================*/

        const emailValido =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailValido.test(email)) {

            mensagem.style.color = "red";
            mensagem.textContent =
                "Digite um e-mail válido.";
            return;

        }

        try {

            mensagem.style.color = "black";
            mensagem.textContent = "Entrando...";

            const respostaServidor = await fetch(
                "http://localhost:3000/clientes/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        email: email,
                        senha: senha
                    })
                }
            );

            const resposta = await respostaServidor.json();

            if (!respostaServidor.ok) {

                mensagem.style.color = "red";
                mensagem.textContent =
                    resposta.mensagem ||
                    "E-mail ou senha incorretos.";

                return;

            }

            if (!resposta.cliente) {

                mensagem.style.color = "red";
                mensagem.textContent =
                    "O servidor não retornou os dados do cliente.";
                return;

            }

            /*=====================================================
                SALVAR CLIENTE LOGADO
            =====================================================*/

            localStorage.setItem(
                "cliente",
                JSON.stringify(resposta.cliente)
            );

            mensagem.style.color = "green";
            mensagem.textContent =
                resposta.mensagem ||
                "Login realizado com sucesso.";

            setTimeout(() => {

                window.location.href = "../index.html";

            }, 500);

        } catch (erro) {

            console.error("Erro no login:", erro);

            mensagem.style.color = "red";
            mensagem.textContent =
                "Erro ao conectar com o servidor.";

        }

    });