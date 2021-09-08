$(document).ready(function () {
    window.addEventListener("resize", function () {
        var tam = $(window).width();
        if (tam <= 900) {
            $(".menu_drop").show();
            $(".box_menu_principal").hide();
        } else {
            $(".menu_drop").hide();
            $(".box_menu_principal").show();
        }
    });

    $(window).load(function () {
        var tam = $(window).width();
        if (tam <= 900) {
            $(".menu_drop").show();
            $(".box_menu_principal").hide();
        } else {
            $(".menu_drop").hide();
            $(".box_menu_principal").show();
        }
    });

});

  //EFEITO TOGGLE
  $(document).ready(function () {
    $(".title").click(function () {
        $(".dropdown").toggle(500);  //EFEITO TOGGLE
    })
});

////JQuery ui Accordion (Efeito 1)
$(function () {
    $("#accordion").accordion({
        heightStyle: "content"
    });
});

$("#botao_alerta").mouseover(function () {
    $("#botao_alerta").css({ backgroundColor: "blue" });
});

const zeroFill = n => {
    return ('0' + n).slice(-2);
}

//DATA E HORA DO SISTEMA
const interval = setInterval(() => {
    // Pega o horário atual
    const now = new Date();

    // Formata a data conforme dd/mm/aaaa hh:ii:ss
    const dataHora = zeroFill(now.getDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());

    // Exibe na tela usando a div#data-hora
    document.getElementById('data-hora').innerHTML = dataHora;
}, 1000);


//EVENTO SCROLL
$(window).scroll(function () {
    var altura = $(window).scrollTop();
    if (altura > 650) {
        $(".botao-top").show();
    } else {
        $(".botao-top").hide();
    }
});

$('.botao-top a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset - 100
    }, 1200);
});

//MODO NOTURNO
$(document).ready(function () {
    $("#modoEscuro").click(function () {
        //PRINCIPAL
        $("body").toggleClass("modoNoturno");
        $(".cabecalho").toggleClass("modoNoturnoFundo");
        $(".rodape").toggleClass("modoNoturnoFundo");
        //INDEX
        $(".container_index").toggleClass("modoNoturno");
        $(".alerta_index").toggleClass("modoNoturnoBorda");
        $(".cuidados_index").toggleClass("modoNoturnoBorda");
        $("#vacinas_aprov").toggleClass("modoNoturnoBorda");
        $("#protocolos").toggleClass("modoNoturnoBorda");
        $("#tratamentos").toggleClass("modoNoturnoBorda");

        //GALERIA
        $("#noticias").toggleClass("modoNoturnoBorda");
        $("#container_galeria").toggleClass("modoNoturno");
        $("#conteudo_galeria").toggleClass("modoNoturno");
        $(".caixa_noticia").toggleClass("modoNoturno");
        $(".main_galeria").toggleClass("modoNoturno");
        //FASES
        //PRE-CADASTRO
        $(".main_cadastro").toggleClass("modoNoturno");
        $(".selecoes").toggleClass("modoNoturno");
        $(".formulario").toggleClass("modoNoturno");
        $(".item").toggleClass("modoNoturno");
        $(".tituloForm").toggleClass("modoNoturno");
        $(".texto").toggleClass("modoNoturno");
    });
});
//MODO NOTURNO

//AUMENTAR/DIMINUIR FONTE
tamanho = 16;
function aumentarFonte() {
  tamanho++;
  document.body.style.fontSize = tamanho + "px"; //style que muda tamanho da fonte 
}

function diminuirFonte() {
  tamanho--;
  document.body.style.fontSize = tamanho + "px";
}
//AUMENTAR/DIMINUIR FONTE