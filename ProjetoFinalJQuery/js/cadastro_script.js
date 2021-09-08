//Formulário: Os campos devem ter validações .
//Idade : Não pode idade negativa ao maior que 130 anos
//Profissão : Indicado que possa existir um seletor ou auto-completar para profissões com base no
//plano de vacinação , Caso não previsto disponibilizar um campo (outros)
//Etnia : Seletor com opção de não informado
//Sexo : se feminino habilitar o campo de gestante (sim/Não)
//CPF : Validador com um placeholder da tipagem
//Comorbidade: Que influenciem na ordem de vacinação ou cuidados
//Baseado no Peso e altura fornecer o IMC do usuario para fins de classificação em comorbidade

//MASCARAS
$(document).ready(function () {
    $('#cpf').mask('000.000.000-00');
    $('#tel').mask('(00) 00000-0000');
    $('#sus').mask('000 0000 0000 0000');
    $('#altura').mask('0.00');
    $('#peso').mask('000');

});


//JQUERY UI TABS (Efeito 2)
$(function () {
    $("#tabs").tabs();
});


//JQUERY UI PROGRESSBAR (Efeito 3)
function setProgressbar(value) {
    $("#progressbar").progressbar({
        value: value
    });

    $(".progress-label").text(value + "%")
}

$(document).ready(function () {
    setProgressbar(1);
});
//FIM TABS FORMULARIO

$("#nome").blur(function () {
    var nome = document.querySelector("#nome").value;

    if (isNaN(nome)) {
        $("#nome").css("border", "2px solid green");
        return true;
    } else {
        $("#nome").css("border", "2px solid red");
        return false;
    }
});

//VALIDA NOME
//evento blur
$("#nome").blur(function () {
    var nome = document.querySelector("#nome").value;

    if (isNaN(nome)) {
        $("#nome").css("border", "2px solid green");
        return true;
    } else {
        $("#nome").css("border", "2px solid red");
        return false;
    }
});
//VALIDA NOME

//VALIDAÇÃO SOBRENOME
//evento blur
$("#sobrenome").blur(function () {
    var sobrenome = document.querySelector("#nome").value;

    if (isNaN(sobrenome)) {
        $("#sobrenome").css("border", "2px solid green");
        return true;
    } else {
        $("#sobrenome").css("border", "2px solid red");
        return false;
    }
});
//VALIDAÇÃO SOBRENOME

//VALIDAÇÃO EMAIL
function valida_email(field) {
    var usuario = field.value.substring(0, field.value.indexOf("@"));
    var dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
    if ((usuario.length >= 1) && (dominio.length >= 3) && (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) && (usuario.search(" ") == -1) && (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) && (dominio.indexOf(".") >= 1) && (dominio.lastIndexOf(".") < dominio.length - 1)) {
        field.style.border = "2px solid green"
        return true;
    } else {
        field.style.border = "2px solid red"
        return false;
    }
}
//VALIDAÇÃO EMAIL

//CALCULAR DATA DE NASCIMENTO
function calculaIdade(dataNasc) {
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var anoNascParts = dataNasc.split('-');
    var anoNasc = anoNascParts[0];
    var mesNasc = anoNascParts[1];
    var diaNasc = anoNascParts[2];
    var idade = anoAtual - anoNasc;
    var mesAtual = dataAtual.getMonth() + 1;
    //Se mes atual for menor que o nascimento, nao fez aniversario ainda;
    if (mesAtual < mesNasc) {
        idade--;
    } else {
        //Se estiver no mes do nascimento, verificar o dia
        if (mesAtual == mesNasc) {
            if (new Date().getDate() < diaNasc) {
                //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
                idade--;
            }
        }
    }
    return idade;
}
//CALCULAR DATA DE NASCIMENTO

//VALIDAÇÃO IDADE
//evento blur
$("#datanascimento").blur(function () {
    var idade = calculaIdade(document.querySelector("#datanascimento").value);
    if (idade > 130 || idade == " " || idade <= 0) {
        $("#datanascimento").css("border", "2px solid red");
        return false;
    } else {
        $("#datanascimento").css("border", "2px solid green");
        return true;
    }
});
//VALIDAÇÃO IDADE

//VALIDAÇÃO CPF
//evento blur
$("#cpf").blur(function () {
    var cpf_valor = document.querySelector("#cpf").value;

    if (cpf_valor.length == 14) {
        $("#cpf").css("border", "2px solid green");
        return true;
    } else {
        $("#cpf").css("border", "2px solid red");
        return false;
    }
});
//VALIDAÇÃO CPF

//VALIDAÇÃO TELEFONE
//evento blur
$("#tel").blur(function () {
    var tel_valor = document.querySelector("#tel").value;

    if (tel_valor.length == 15) {
        $("#tel").css("border", "2px solid green");
        return true;
    } else {
        $("#tel").css("border", "2px solid red");
        return false;
    }
});
//VALIDAÇÃO TELEFONE

//VALIDAÇÃO SUS
//evento blur
$("#sus").blur(function () {
    var sus_valor = document.querySelector("#sus").value;

    if (sus_valor.length == 18) {
        $("#sus").css("border", "2px solid green");
        return true;
    } else {
        $("#sus").css("border", "2px solid red");
        return false;
    }
});
//VALIDAÇÃO SUS

//VALIDAÇÃO PROFISSÃO
//UTILIZANDO EVENTO CLICK
$("#outros2").click(function () {
    $("#outros").show();
});

//UTILIZANDO EVENTO CLICK
$(".inputs_hide").click(function () {
    $("#outros").hide();
});

function valida_outros(x) {
    var outros = x.value

    if (isNaN(outros)) {
        x.style.border = "2px solid green"
        return true;
    } else {
        x.style.border = "2px solid red"
        return false;
    }
}
//VALIDAÇÃO PROFISSÃO

//VALIDAÇÃO ETNIA
$("#etnia").blur(function () {
    var etnia = document.querySelector("#etnia").value;

    if (etnia == "") {
        $("#etnia").css("border", "2px solid red");
        return false;
    } else {
        $("#etnia").css("border", "2px solid green");
        return true;
    }
});
//VALIDAÇÃO ETNIA

//VALIDAÇÃO SEXO
$("#sexo").blur(function () {
    var sexo = document.querySelector("#sexo").value;

    if (sexo == "") {
        $("#sexo").css("border", "2px solid red");
        return false;
    } else {
        $("#sexo").css("border", "2px solid green");
        return true;
    }
});
//VALIDAÇÃO SEXO

//VALIDA IMC****************************************************
function valida_altura(x) {
    var altura = x.value;
    if (altura > 3 || altura == " " || altura <= 0) {
        x.style.border = "2px solid red"
        return false;
    } else {
        x.style.border = "2px solid green"
        return true;
    }
}

function valida_peso(x) {
    var peso = x.value;
    if (peso == " " || peso <= 0) {
        x.style.border = "2px solid red"
        return false;
    } else {
        x.style.border = "2px solid green"
        return true;
    }
}

function calcula_IMC() {
    var pesoIMC = (document.getElementById("peso")).value;
    var alturaIMC = (document.getElementById("altura")).value;
    var IMC = 0;

    IMC = pesoIMC / (alturaIMC * alturaIMC);
    $("#resultado").text((IMC).toFixed(2));
}
//*************************************************

//VALIDA SE O FORMULARIO ESTA PREENCHIDO ANTES DE ENVIAR
$(document).ready(function () {
    $("#btn").click(function () {
        var cont = 0;
        $(".formulario input").each(function () {
           if ($(this).val() == "") {
                $(this).css("border", "2px solid red");
                $("#siga").text("Preencha todos os campos corretamente para enviar o formulário!")
                cont++;
            }
        });
        $(".formulario2 input").each(function () {
            if ($(this).val() == "") {
                 $(this).css("border", "2px solid red");
                 $("#siga").text("Preencha todos os campos corretamente para enviar o formulário!")
                 cont++;
             }
         });
        if (cont == 0) {
           mostra_data2();             
        } 
    });
});
//VALIDA SE O FORMULARIO ESTA PREENCHIDO ANTES DE ENVIAR



//CALCULA DATA DA VACINA
function mostra_data2(){
    // var nome_input = document.getElementById("nome").value; 
    //  var sobrenome_input = document.getElementById("sobrenome").value; 
    //  var email_input = document.getElementById("email").value;    
    //  var cpf_input = document.getElementById("cpf").value;
    //  var tel_input = document.getElementById("tel").value;
    //  var sus_input = document.getElementById("sus").value;
    //  var sexo_input = document.getElementById("sexo").value;
    var data_nascimento_input = document.getElementById("datanascimento").value;
    var idade = calculaIdade(data_nascimento_input);
    //var etnia_input = document.getElementById("etnia").value;

    // var areaatuacao = document.querySelector('input[name="areaatuacao"]:checked').value;  
   
    var gestante = document.querySelector('input[name="gestante"]:checked').value;
    var comorbidade = document.querySelector('input[name="comorbidade"]:checked').value;

    console.log(comorbidade);

    var pesoIMC = (document.getElementById("peso")).value;
    var alturaIMC = (document.getElementById("altura")).value;
    var IMC = 0;
    IMC = pesoIMC / (alturaIMC * alturaIMC);

    if (idade >=18){       
        $("#siga").text("Siga para a próxima página para saber sua data provável de vacinação!")
        $("#data_provavel").text("já foi liberada, por favor procure um posto de atendimento");
    }else if((idade==16 || idade==17) && (gestante == "sim" || comorbidade!="Não possuo comorbidades nem faço tratamentos" || IMC>=40 ) ){
        var data = "será entre os dias 18 e 25 de agosto de 2021"
        $("#siga").text("Siga para a próxima página para saber sua data provável de vacinação!")
        $("#data_provavel").text(data);
    }else if((idade==12 || idade==15) && (gestante == "sim" || comorbidade!="Não possuo comorbidades nem faço tratamentos" || IMC>=40) ){
        var data = "será entre os dias 26 e 29 de agosto de 2021"
        $("#siga").text("Siga para a próxima página para saber sua data provável de vacinação!")
        $("#data_provavel").text(data);
    }else if (idade>=15 && idade<=17){
        var data = "será entre os dias 30 de agosto e 5 de setembro de 2021"
        $("#siga").text("Siga para a próxima página para saber sua data provável de vacinação!")
        $("#data_provavel").text(data);
    }else if (idade>=12 && idade<=14){
        var data = "será entre os dias 6 e 12 de setembro de 2021"
        $("#siga").text("Siga para a próxima página para saber sua data provável de vacinação!")
        $("#data_provavel").text(data);
    }else{
        $("#siga").text("Siga para a próxima página para saber sua data provável de vacinação!")
        $("#data_provavel").text("ainda não tem data definida, em breve teremos mais informações");
    }

}
//CALCULA DATA DA VACINA

// $("input[name ='areaatuacao']").click(function () {
//     var areaatuacao = document.querySelector('input[name="areaatuacao"]:checked').value;
// });

// function area_atuacao(){
//     var areaatuacao = document.querySelector('input[name="areaatuacao"]:checked').value;
// }




