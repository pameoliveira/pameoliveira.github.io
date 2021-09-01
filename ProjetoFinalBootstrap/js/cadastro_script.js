//MASCARAS
$(document).ready(function () {
    $('#cpf').mask('000.000.000-00');
    $('#telefone').mask('(00) 00000-0000');
    $('#cep').mask('00000-00');
    $('#numero').mask('00000');
    $('#cc-numero').mask('0000 0000 0000 0000')
    $('#cc-expiracao').mask('00/00')
    $('#cc-cvv').mask('000')


});



$(document).ready(function () {

    //validação e-mail

    $("#formContinue").click(function () {
        var email_val = document.querySelector("#email").value;
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(email_val) == false) {
            $("#spanEmail").text("Por favor, insira um endereço de e-mail válido, para atualizações de entrega.");
            return false;

        } else {
            $(".spanRed").text("");
            $(".dados").attr("data-toggle", "tab");
            $(".emailAba").attr("data-toggle", "tab");

            $(".emailAba").removeClass("active").attr("aria-selected", "false");
            $(".dados").addClass("active").attr("aria-selected", "true");
            $("#emailAba").removeClass("active");
            $("#dados").addClass("active");

            return true;
        }
    });

    //validação dados pessoais 

    $("#formDados").click(function () {
        var nome_val = document.querySelector("#primeiroNome").value;
        var sobrenome_val = document.querySelector("#sobrenome").value;
        var cpf_val = document.querySelector("#cpf").value;
        var tel_val = document.querySelector("#telefone").value;
        var senha_val = document.querySelector("#senha").value;
        var senhaConfirma_val = document.querySelector("#senhaConfirma").value;

        // console.log(senhaConfirma_val);
        // console.log(senha_val);

        $(".nav a").attr("data-toggle", "");


        if (!isNaN(nome_val)) {
            $("#spanNome").text("Insira um nome válido.");
        }
        if (!isNaN(sobrenome_val)) {
            $("#spanSobrenome").text("Insira um sobrenome válido.");
        }
        if (cpf_val.length != 14) {
            $("#spanCPF").text("Insira um cpf válido.");
        }
        if (tel_val.length != 15) {
            $("#spanTelefone").text("Insira um telefone válido.");
        }
        if (senha_val.length < 6) {
            $("#spanSenha").text("Mínimo de 6 dígitos.");
        }
        if (senhaConfirma_val.length < 6 || senhaConfirma_val !== senha_val) {
            $("#spanSenhaConfirma").text("Senha não confere.");
        }
        else {
            $(".spanRed").text("");//limpa os spans           
            $(".entrega").attr("data-toggle", "tab");//liberar a próxima aba
            $(".dados").attr("data-toggle", "tab"); //liberar a aba atual para conseguir voltar para arrumar algo se necessário

            //ir para aba seguinte
            $(".dados").removeClass("active").attr("aria-selected", "false");
            $(".entrega").addClass("active").attr("aria-selected", "true");
            $("#dados").removeClass("active");
            $("#entrega").addClass("active");

            return true;
        }
    });


    //validação cadastro

    $("#formEntrega").click(function () {
        var pais_val = document.querySelector("#pais").value;
        var estado_val = document.querySelector("#estado").value;
        var cep_val = document.querySelector("#cep").value;
        var endereco_val = document.querySelector("#endereco").value;
        var numero_val = document.querySelector("#numero").value;
        var bairro_val = document.querySelector("#bairro").value;

        $(".nav a").attr("data-toggle", "");


        if (pais_val == "Escolha") {
            $("#spanPais").text("Selecione o país.");
        }
        if (estado_val == "Escolha") {
            $("#spanEstado").text("Selecione o estado.");
        }
        if (cep_val.length != 8) {
            $("#spanCEP").text("Insira um CEP válido.");
        }
        if (!isNaN(endereco_val)) {
            $("#spanEndereco").text("Insira endereço válido.");
        }
        if (numero_val.length == 0) {
            $("#spanNumero").text("Insira um número válido.");
        }
        if (!isNaN(bairro_val)) {
            $("#spanBairro").text("Insira um bairro válido.");
        }

        else {
            $(".spanRed").text("");
            $(".pagamento").attr("data-toggle", "tab");
            $(".entrega").attr("data-toggle", "tab");

            $(".entrega").removeClass("active").attr("aria-selected", "false");
            $(".pagamento").addClass("active").attr("aria-selected", "true");
            $("#entrega").removeClass("active");
            $("#pagamento").addClass("active");

            return true;
        }
    });


    //ativando/desativando campos do cartão 
    $("#credito").click(function () {
        $(".camposCartao").show();
    });

    $("#boleto").click(function () {
        $(".camposCartao").hide();
    });

    //valida dados do cartao e botão enviar
    $("#credito").click(function () {
        $("#formFinalizar").prop("disabled", true);

    });

    $("#boleto").click(function () {
        $("#formFinalizar").prop("disabled", false);
    });


    $(".camposCartao input").blur(function () {
        var nomeCartao_val = document.querySelector("#cc-nome").value;
        var numeroCartao_val = document.querySelector("#cc-numero").value;
        var validade_val = document.querySelector("#cc-expiracao").value;
        var codigo_val = document.querySelector("#cc-cvv").value;

        if (!isNaN(nomeCartao_val)) {
            $("#spanNomeCartao").text("Insira um nome válido.");
            $("#formFinalizar").prop("disabled", true);
        }
        if (numeroCartao_val.length != 19) {
            $("#spanNumeroCartao").text("Insira um número válido.");
            $("#formFinalizar").prop("disabled", true);
        }
        if (validade_val.length != 5) {
            $("#spanValidade").text("Insira uma data válido.");
            $("#formFinalizar").prop("disabled", true);
        }
        if (codigo_val.length != 3) {
            $("#spanCodigo").text("Insira um código válido.");
            $("#formFinalizar").prop("disabled", true);
        }
        else {
            $("#spanNomeCartao").text("");
            $("#spanNumeroCartao").text("");
            $("#spanValidade").text("");
            $("#spanCodigo").text("");
            $("#formFinalizar").prop("disabled", false);

        }
    })


    //enviar formulário
    $("#formFinalizar").click(function () {

        $(".nav a").attr("data-toggle", "");

        $(".concluido").attr("data-toggle", "tab");
        $(".pagamento").attr("data-toggle", "tab");

        $(".pagamento").removeClass("active").attr("aria-selected", "false");
        $(".concluido").addClass("active").attr("aria-selected", "true");
        $("#pagamento").removeClass("active");
        $("#concluido").addClass("active");
    });

});








