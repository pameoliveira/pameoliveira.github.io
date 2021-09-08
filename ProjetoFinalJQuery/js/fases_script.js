// EFEITO SLIDE
$('.titulo-criterios-frases').click(function () {
    $(".criterios-frases").slideToggle(); // EFEITO SLIDE
});


//MASCARA DADOS USUARIO
$(document).ready(function () {
    $('#uti').mask('0000');
    $('#enfermaria').mask('0000');
});

// FUNÇÃO CALCULAR PORCENTAGEM
function identifica_setor() {
    var uti_setor1 = 450;
    var enferm_setor1 = 800;

    var uti_setor2 = 200;
    var enferm_setor2 = 600;

    var uti_setor3 = 180;
    var enferm_setor3 = 400;

    var aux1 = 0;
    var aux2 = 0;

    var select = document.getElementById("setor").value;

    switch (select) {
        case "setor1":
            aux1 = uti_setor1;
            aux2 = enferm_setor1;
            break
        case "setor2":
            aux1 = uti_setor2;
            aux2 = enferm_setor2;
            break
        case "setor3":
            aux1 = uti_setor3;
            aux2 = enferm_setor3;
            break
    }

    $(".aux1").text(aux1);
    $(".aux2").text(aux2);


    var uti_ocup = document.getElementById("uti").value;
    var enferm_ocup = document.getElementById("enfermaria").value;

    var taxa_uti = uti_ocup / aux1;

    var taxa_enferm = enferm_ocup / aux2;

    var ocupacao = (((2 * taxa_uti) + (taxa_enferm)) / 3) * 100;
    $(".paragrafo-porcentagem").text(`${ocupacao.toFixed(2)}% de ocupação.`);
    $(".leitos-oculpados2").text(`${parseInt(uti_ocup) + parseInt(enferm_ocup)} leitos ocupados.`);
    return ocupacao;
}


function fases() {
    var ocupacao = identifica_setor();
    console.log(ocupacao);
    if (ocupacao >= 80) {
        // $('.bolinha').css({backgroundColor: 'red'});
        document.querySelector(".bolinha").style.background = "red";
    } else if (ocupacao < 80 && ocupacao >= 70) {
        // $('.bolinha').css({backgroundColor: 'red'});
        document.querySelector(".bolinha").style.background = "orange";
    } else if (ocupacao < 70 && ocupacao >= 60) {
        // $('.bolinha').css({backgroundColor: 'red'});
        document.querySelector(".bolinha").style.background = "yellow";
    } else if (ocupacao < 60 && ocupacao >= 40) {
        // $('.bolinha').css({backgroundColor: 'red'});
        document.querySelector(".bolinha").style.background = "green";
    } else {
        // $('.bolinha').css({backgroundColor: 'red'});
        document.querySelector(".bolinha").style.background = "blue";
    }

    $(".insira-dados").show();
    $(".sessao-leitos2").hide();
}