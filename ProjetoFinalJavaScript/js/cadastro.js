// #region Validações

function valida_nome(x) {

    var nome = x.value

    if (isNaN(nome)) {
        x.style.border = "2px solid green"
        return true;
    }

    else {
        x.style.border = "2px solid red"
        return false;
    }

}

function valida_cpf(x) {
    var cpf_valor = x.value;

    if (cpf_valor.length == 14) {
        x.style.border = "2px solid green"
        return true;
    }

    else {
        x.style.border = "2px solid red"
        return false;
    }
}

function valida_idade(x) {
    var idade = calculaIdade(x.value);
    if (idade > 130 || idade == " " || idade <= 0) {
        x.style.border = "2px solid red"
        return false;
    } else {
        x.style.border = "2px solid green"
        return true;
    }
}

function valida_email(field) {
    var usuario = field.value.substring(0, field.value.indexOf("@"));
    var dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
    if ((usuario.length >= 1) && (dominio.length >= 3) && (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) && (usuario.search(" ") == -1) && (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) && (dominio.indexOf(".") >= 1) && (dominio.lastIndexOf(".") < dominio.length - 1)) {
            field.style.border = "2px solid green"
        return true;
    }
    else {
        field.style.border = "2px solid red"
        return false;
    }
}

function valida_sexo(x) {
    if(x.value == "") {
        x.style.border = "2px solid red"
        return false;
    }
    else {
        x.style.border = "2px solid green"
        return true;
    }
}

// #region Máscaras e Cálculos

function fMasc(objeto, mascara) {
    obj = objeto;
    masc = mascara;
    setTimeout("fMascEx()", 1);
}

function fMascEx() {
    obj.value = masc(obj.value);
}

function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf;
}

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

// #endregion

// #endregion

class Pessoa { //classe pessoa, todos os objetos pessoa seguirão esse modelo 

    constructor(nome_construtor, email_construtor, data_nascimento_construtor, cpf_construtor, sexo_construtor, idade_construtor) {
        this.nome = nome_construtor; //no objeto pessoa(i) todos os this.variável vão receber o parametro na ordem do construtor 
        this.email = email_construtor;
        this.data_nascimento = data_nascimento_construtor;
        this.cpf = cpf_construtor;
        this.sexo = sexo_construtor;
        this.idade = idade_construtor
    }
    //Ola (nome ) , seu login é (email) , você tem (idade) se define como uma pessoa do sexo(sexo) e pode usar (CPF) como senha"
    mostrar_dados() {
        // return this.nome + " " + this.email + " " + this.data_nascimento + " " + this.cpf + " " + this.sexo + " " + this.idade
        return `<h3>Olá ${this.nome},<h3><br>
        <p>Seu login é ${this.email}, você tem ${this.idade} anos de idade, se define como uma pessoa ${this.sexo} e pode usar ${this.cpf} como senha.</p>`
    }
}

function enviar_dados() {
    var nome_input = document.getElementById("nome"); //está recebendo dados do input
    var cpf_input = document.getElementById("cpf");
    var email_input = document.getElementById("email");
    var data_nascimento_input = document.getElementById("data_nascimento");
    var sexo_input = document.getElementById("sexo");

    var formValido = true;

    //validando todos os dados do input segundo as funções valida
    
    if(!valida_nome(nome_input)) {
        formValido = false;
    }
      
    if(!valida_cpf(cpf_input)) {
        formValido = false;
    }

    if(!valida_idade(data_nascimento_input)) {
        formValido = false;
    }    

    
    if(!valida_email(email_input)) {
        formValido = false;
    }   

    if(!valida_sexo(sexo_input)) {
        formValido = false;
    }

    //se qualquer erro retorna falso e não envia o form

    if(!formValido) {
        document.getElementById("print").innerHTML = "<h3>Dados Inválidos!</h3><br><p>Por favor, verifique os campos em vermelho e tente novamente.</p>"
        return formValido;
    }
    else {
        //mostrar div  do form válido em verde com os dados da pessoa
        var nome = nome_input.value.toUpperCase();
        var cpf = cpf_input.value;
        var email = email_input.value;
        var dataNascimento = data_nascimento_input.value;
        var idade = calculaIdade(data_nascimento_input.value);
        var sexo = sexo_input.value;  

        //variavél novo objeto - pessoa_1 está recebendo uma instância da classe pessoa tornando-se um objeto  (pessoa_1.nome, pessoa_1.email, etcccc)     
        var pessoa_1 = new Pessoa(nome, email, dataNascimento, cpf, sexo, idade);        
        
        document.getElementById("center").innerHTML = pessoa_1.mostrar_dados(); //imprimindo os dados se tudo estiver correto 
        document.getElementById("print").innerHTML = ""; //limpando a mensagem de erro quando dados corretos 
        return true;
    }    
}

