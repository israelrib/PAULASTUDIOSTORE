/*==========================================================
    PERFIL.JS
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*======================================================
        ELEMENTOS
    ======================================================*/

    const fotoPerfil = document.getElementById("fotoPerfil");
    const uploadFoto = document.getElementById("uploadFoto");

    const campos = document.querySelectorAll("input");

    const btnSalvar = document.querySelector(".salvar");
    const btnCancelar = document.querySelector(".cancelar");
    const btnSenha = document.getElementById("alterarSenha");

    /*======================================================
        BACKUP DOS DADOS
    ======================================================*/

    const valoresOriginais = [];

    campos.forEach((campo) => {
        valoresOriginais.push(campo.value);
    });

    /*======================================================
        ALTERAR FOTO
    ======================================================*/

    uploadFoto.addEventListener("change", function () {

        const arquivo = this.files[0];

        if (!arquivo) return;

        const leitor = new FileReader();

        leitor.onload = function (e) {

            fotoPerfil.src = e.target.result;

        };

        leitor.readAsDataURL(arquivo);

    });

    /*======================================================
        MÁSCARA CPF
    ======================================================*/

    const cpf = document.querySelector('input[value="000.000.000-00"]');

    if (cpf) {

        cpf.addEventListener("input", function () {

            let valor = this.value.replace(/\D/g, "");

            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

            this.value = valor;

        });

    }

    /*======================================================
        MÁSCARA TELEFONE
    ======================================================*/

    const telefone = document.querySelector('input[value="(11) 99999-9999"]');

    if (telefone) {

        telefone.addEventListener("input", function () {

            let valor = this.value.replace(/\D/g, "");

            valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
            valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

            this.value = valor;

        });

    }

    /*======================================================
        SALVAR
    ======================================================*/

    btnSalvar.addEventListener("click", () => {

        let valido = true;

        campos.forEach((campo) => {

            if (campo.value.trim() === "") {

                campo.style.border = "1px solid red";

                valido = false;

            } else {

                campo.style.border = "1px solid #DDD";

            }

        });

        if (!valido) {

            alert("Preencha todos os campos.");

            return;

        }

        alert("Alterações salvas com sucesso!");

    });

    /*======================================================
        CANCELAR
    ======================================================*/

    btnCancelar.addEventListener("click", () => {

        campos.forEach((campo, index) => {

            campo.value = valoresOriginais[index];

            campo.style.border = "1px solid #DDD";

        });

    });

    /*======================================================
        ALTERAR SENHA
    ======================================================*/

    btnSenha.addEventListener("click", () => {

        alert("Abrir tela para alteração de senha.");

    });

});