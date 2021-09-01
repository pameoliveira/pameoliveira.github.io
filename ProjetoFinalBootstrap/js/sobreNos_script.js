function validaName(x) {
    var nome = document.getElementById("nome");
    if (nome.value == "" || !isNaN(nome.value)) {
        $("#spanNome").text("Insira um nome válido.");
        return;
    } else {        
        return;
    }
}

function validaPhone(x) {
    var telefone = document.getElementById("telefone");            
    if (telefone.value == "" || isNaN(telefone.value)) {
        $("#spanTelefone").text("Insira um telefone válido.");
        return;
    } else {        
        return;
    }
}

function validaEmail(x) {
    var usuario = x.value.substring(0, x.value.indexOf("@"));
    var dominio = x.value.substring(x.value.indexOf("@") + 1, x.value.length);
    if ((usuario.length >= 1) && (dominio.length >= 3) && (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) && (usuario.search(" ") == -1) && (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) && (dominio.indexOf(".") >= 1) && (dominio.lastIndexOf(".") < dominio.length - 1)) {        
        return true;
    }
    else {
        $("#spanEmail").text("Por favor, insira um endereço de e-mail válido, para que possamos retornar o contato.");        
        return false;
    }
}

function validaAssunto(x) {
    var msg = document.getElementById("assunto");
    if (msg.value == "") {
        $("#spanAssunto").text("Insira o assunto.");
        return;
    } else {       
        return;
    }
} 

function validaMsg(x) {
    var msg = document.getElementById("msg");
    if (msg.value == "") {
        $("#spanMsg").text("Insira sua mensagem.");
        return;
    } else {      
        return;
    }
}  

