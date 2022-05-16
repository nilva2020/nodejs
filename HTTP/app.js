// este modulo http ja esta dentro do node, basta inserir o codigo abaixo para importar
var http = require("http");

// chamar a variavel http
http.createServer(function(requisicao,resposta){
    resposta.end("<h1>Bem vindo ao meu site!</h1><h4>www.devnilva.com</h4>");
}).listen(3000);

console.log("Meu servidor está rodando!");

/* 
 para CRIAR UM SERVIDOR basta usar o seguinte codigo:
 nomedavariavel.createServer().listen(8181)

 observe a porta que esta disponivel no seu servidor(computador)
*/
