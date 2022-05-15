 # Módulos como utiliza-los:

 Neste artigo será tratado a importância da organização do código
através dos módulos.

### OBSERVE que o  programa está grande o que fazer?

* SOLUÇÔES:
SOLUÇÃO 1 - Criar outro arquivo exemplo: calculadora.js e inserir a função
function soma(a,b){
    return a + b
}
module.exports = soma

SOLUÇÃO 2 - Criar um arquivo MULTIPLAS FUNÇÕES: calculadora.js
*** insira o codigo total e no final insira o module.exports observe o exemplo abaixo.

function soma(a,b){
    return a + b
}

function mult(a,b){
    return a + b
}

function sub(a,b){
    return a + b
}

function div(a,b){
    return a + b
}

module.exports = {
    soma,
    mult,
    sub,
    div
}

Após este passo  criar um novo arquivo EXEMPLO app.js

var calculadora = require("./calculadora");

console.log(calculadora.mult(10,20));
console.log(calculadora.soma(20,40));

OBS: este codigo importou a função total do arquivo calculadora e poderá 
ser utilizado na chamada da funcao.


### IMPORTANDO O CÓDIGO
O back-end é  escrito em node.js, então deverá usar uma função chamada require que vai ser responsável por chamar o módulo calculadora.js para dentro do nosso funcaoPrincipal.js. É essa função que vai ler e interpretar o módulo. Assim podemos reutilizar o código sem precisar reescrever a classe.
var somaFuncao = require("./calculadora.js)

### EXPORTANDO O CÓDIGO
O require é responsável por interpretar e retornar o conteúdo do código para que possamos utilizar na aplicação principal, para que o código funcione na aplicação principal além de importar tem que exportar, deixando o código visível para a aplicação principal. 
Para que isto ocorra utilizar o seguinte comando:
module.exports = soma


### EXPORTANDO variavel
no arquivo funcaoPrincipal insira o codigo:

var nome = "Calculadora Fantástica"

module.export = {
    nome
}

No arquivo app.js
console.log(calculadora.nome)

### FUNÇÃO PRINCIPAL PARA EXEMPLO (funcaoPrincipal)

function soma(a,b){
    return a + b
}

function mult(a,b){
    return a + b
}

function sub(a,b){
    return a + b
}

function div(a,b){
    return a + b
}

console.log(soma(10,20))
var resultado = mult(10,10)
var resultadoSub = sub(30,40)
console.log(div(10,6))
console.log(resultado)
console.log(resultadoSub)