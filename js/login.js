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

document.getElementById("form-login").addEventListener("submit", function(e){

    e.preventDefault();

    alert("Login enviado.");

});

document.getElementById("form-register").addEventListener("submit", function(e){

    e.preventDefault();

    alert("Cadastro enviado.");

});