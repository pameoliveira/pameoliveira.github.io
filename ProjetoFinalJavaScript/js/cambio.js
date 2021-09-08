function identifica_moedas() {
    var dolarAmericano = 5.60;
    var dolarCanadense = 4.52;
    var euro = 6.70;
    var libra = 7.81;
    var pesoArgentino = 0.062;
    var real = 1;
    var indice = 0;

    var aux1 = document.getElementById("opcoes1").value;

    switch (aux1) {
        case "Moeda":
            aux1 = 0;
            break

        case "Dólar Americano":
            aux1 = dolarAmericano;
            break

        case "Dólar Canadense":
            aux1 = dolarCanadense;
            break

        case "Euro":
            aux1 = euro;
            break

        case "Libra Esterlina":
            aux1 = libra;
            break

        case "Peso Argentino":
            aux1 = pesoArgentino;
            break

        case "Real":
            aux1 = real;
            break
    }

    var aux2 = document.getElementById("opcoes2").value;

    switch (aux2) {
        case "Moeda":
            aux2 = 0;
            break

        case "Dólar Americano":
            aux2 = dolarAmericano;
            break

        case "Dólar Canadense":
            aux2 = dolarCanadense;
            break

        case "Euro":
            aux2 = euro;
            break

        case "Libra Esterlina":
            aux2 = libra;
            break

        case "Peso Argentino":
            aux2 = pesoArgentino;
            break

        case "Real":
            aux2 = real;
            break
    }

    if (aux1 == 0  || aux2 == 0) {
        return indice = 0;

    } else{
        indice = aux1 / aux2;
        return indice;
    }
    
}

function converte() {
    var indice_validado = identifica_moedas();
    var valor = parseFloat(document.getElementById("valor").value);

    if (indice_validado ==0 ){ 
        document.getElementById("valor_final").innerHTML = " ";
        alert("Escolha uma moeda.");                
        return;        
    } 
    if (valor == 0 ){
        document.getElementById("valor_final").innerHTML = " ";  
        alert("Digite um valor.");  
        return;
    } else {
        var resultado = (valor * indice_validado);
        document.getElementById("valor_final").innerHTML = (resultado).toFixed(2);         
        return;
    }      
}

//MaskValor
function fMasc(objeto, mascara) { //(this, função mascara) this-> próprio input
    obj = objeto; //conteúdo sendo digitado no input
    masc = mascara; //função mascara (mValor)
    setTimeout("fMascEx()", 1); //chama função fMascEx a cada 1 MILÉSSIMO DE SEGUNDO
}

function fMascEx() {
    obj.value = masc(obj.value); //está retornando apenas o value do campo input 
}

function mValor(valor) {
    valor = valor.replace(/\D/g, "");   //replace substitui duas/ para indicar campo \D significa letras e g global, aplica espaço vazio 
    valor = valor.replace(/(\d{1})(\d{1,2})$/, "$1.$2");  //entre primeiro campo de captura e segundo vai ter um ponto
    return valor;
}


