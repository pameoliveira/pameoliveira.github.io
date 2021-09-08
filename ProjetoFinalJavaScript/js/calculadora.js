function btn_ride() {  //escolher entre cietífica e comum
  var btn = document.getElementById('calc_tipo');
  var cientifica = document.querySelector('.cientifica');  //querySelector selecionar um seletor especifico ex div, section, etc
   
  if(cientifica.style.display === 'inline-block') {  
    cientifica.style.display = 'none'; //display none some a div .cientifica
    btn.innerHTML = "Comum";
  } else {
    cientifica.style.display = 'inline-block'; //display inline-block para a cientica, ou seja, mostra a calculadora
    btn.innerHTML = "Científica";
  }
};


function writeNumber(elementId) {   //está no input field os numeros de 0-9 e pi, elementeId=função tem um parâmetro

  var outputValueTo = document.getElementById('field1'); //outputValueTo var que recebe o valor dos botões
  if (outputValueTo.value == '0' || outputValueTo.value == 'Syntax error') {  //se não digitar nada ou erro permanece igual
    outputValueTo.value = elementId.textContent;
  }

  else {
    outputValueTo.value += elementId.textContent; //como está recebendo string, só concatena
  }
}

function cleartxt() {
  document.getElementById('field1').value = '0'; //retorna zero no field1
  document.getElementById('dec').disabled = false; //tira o ponto
}

function setOperator(elementId) {
  var outputValueTo = document.getElementById('field1'); 
  if (outputValueTo.value == '0' || outputValueTo.value == 'Syntax error') {
    outputValueTo.value = '0';
  } else {
    outputValueTo.value += elementId.textContent; //concatena o operador 
    document.getElementById('dec').disabled = false; //depois que concatena o operador limpa o status do ponto para permitir atribuir ponto novamente, no segundo elemento 
  }
}

function setDecimal(elementId, status) {
  var outputValueTo = document.getElementById('field1');
  outputValueTo.value += elementId.textContent; //concatenando o ponto na string caso clique no button dec
  document.getElementById('dec').disabled = status; //está atribuindo true ao decimal/ponto
}

function raiz_quadrada() {
  var raiz_quadrada = document.getElementById('field1');
  raiz_quadrada.value = Math.sqrt(raiz_quadrada.value);
  field1txt.value = raiz_quadrada; 
}

function expoente_2() {
  var expoente_2 = document.getElementById('field1');
  expoente_2.value = Math.pow(expoente_2.value, 2);
  field1txt.value = expoente_2;
}

function expoente_3() {
  var expoente_3 = document.getElementById('field1');
  expoente_3.value = Math.pow(expoente_3.value, 3);
  field1txt.value = expoente_3;
}

// function expoente_3() {
//   var expoente_3 = document.getElementById('field1');
//   var field1txt = 0;
//   if (expoente_3.value.indexOf("+") == -1 ){
//     expoente_3.value = Math.pow(expoente_3.value, 3);
//     field1txt.value = expoente_3;   
//   } else {
//     field1txt.value = "Sintax error";    
//   }
// }

function pi() {
  var pi = document.getElementById('field1');
  if (pi.value == '0' || pi.value == '') {
    pi.value = 0;
  }
  else {
    pi.value = Math.PI
  }
  return pi;
}

function calculate() {

  try {  //tenta algo que pode ou não ser entendido, podendo gerar exceção ou erro, usando o try ele não para a excecução caso retorne erro
    var field1txt = document.getElementById('field1');
    if (field1txt.value != '') {
      if (field1txt.value.includes("π")) {
        field1txt.value = field1txt.value.replace('π', `${Math.PI}`) //exceção para entender o caracter dp pi e atribuir valor pra ele 
      }
      var calculateResult = eval(field1txt.value); //pega uma string, identifica o que é o que num, operador, ponto e faz o cálculo 
      field1txt.value = calculateResult; //imprimindo no field o resultado
    }
  } catch (err) {
    field1txt.value = 'Syntax error'; //caso aconteça algum erro retorna erro
  }

}

function removeLastNumber() {
  var field1txt = document.getElementById('field1');
  if (field1txt.value.length == 1 || field1txt.value == '0' || field1txt.value == 'Syntax error') {
    field1txt.value = '0';
    document.getElementById('dec').disabled = false;
  } else {
    field1txt.value = field1txt.value.substring(0, field1txt.value.length - 1);
  }
}