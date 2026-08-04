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

document.getElementById("btn-register").addEventListener("click", () => {

   

    const nome = document.getElementById("name").value.trim();
    const email = document.getElementById("register-email").value.trim();
    const senha = document.getElementById("register-password").value;
    const confirmarSenha = document.getElementById("confirm-password").value;
    const mensagem =
        document.getElementById("mensagem");

    //verificar se todos os campos foram preenchidos
    if (
        nome == "" ||
        email == "" ||
        senha == "" ||
        confirmarSenha == ""
    ) {

        mensagem.style.color = "red";
        mensagem.innerHTML = "Preencha todos os campos.";
        



        return;

    }

    if (senha.length < 8 || senha.length > 13) {

         alert("A senha deve possuir entre 8 e 13 caracteres!");
        return;
        

    }
    // verificar se a senha possui letras maiusculas
    if (!/[A-Z]/.test(senha)) {
       alert(   
            "A senha deve conter pelo menos uma letra maiúscula.");
        return;
    }
    if (!/[a-z]/.test(senha)) {
       alert(
            "A senha deve conter pelo menos uma letra minúscula.");
        return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>_\-+=/\[\]\\;'`~]/.test(senha)) {
       alert(
            "A senha deve conter pelo menos um caracter especial.");
        return;
    }
    if (!/[0-9]/.test(senha)) {
        alert("A senha deve conter pelo menos um número.");
        return;
    }
    //verificar se a senha possui nome da pessoa
    if (senha.includes(nome)) {
        alert("A senha não pode conter o nome do usuário.");
        return;
    }




    if (!email.includes("@gmail.com") &&
        !email.includes("@hotmail.com") &&
        !email.includes("@yahoo.com") &&
        !email.includes("@outlook.com") && !email.includes("@") &&
        !email.includes("@icloud.com")) {

       alert( "Digite um e-mail válido.");

        return;

    }

  

    // Objeto pronto para enviar ao Node.js
    const cliente = {
        nome: nome,
        cpf: "",
        telefone: "",
        email: email,
        senha: senha,
        data_nascimento: "",
        Loja_idLoja: 1
    };

    console.log(cliente);


    fetch("http://localhost:3000/clientes", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(cliente)

    })
        .then(res => res.json())

        .then(resposta => {

            if (resposta.sucesso) {

                mensagem.style.color = "green";
                mensagem.innerHTML = resposta.mensagem;

                // Limpa os campos
                document.getElementById("name").value = "";
                document.getElementById("cpf").value = "";
                document.getElementById("telefone").value = "";
                document.getElementById("register-email").value = "";
                document.getElementById("register-password").value = "";
                document.getElementById("confirm-password").value = "";

            } else {

                mensagem.style.color = "red";
                mensagem.innerHTML = resposta.mensagem;

            }

        })

        .catch(() => {
            alert("Erro ao conectar com o servidor.");

            mensagem.style.color = "red";
            mensagem.innerHTML = "Erro ao conectar com o servidor.";

        });


});






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