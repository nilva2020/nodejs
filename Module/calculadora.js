var nome = "Minha calculadora V1";

function soma(a,b){
    return a + b;
}

function mult(a,b){
    return a * b;
}

function sub(a,b){
    return a-b;
}

function div(a,b){
    return a/b;
}

module.exports = {
    soma,
    mult,
    sub,
    div,
    nome
};

/* EXPLICAÇÃO GERAL
 module.exports
Este método disponibiliza para acesso em qualquer parte do projeto */