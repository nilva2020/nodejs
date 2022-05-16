

var calculadora = require("./calculadora");



console.log(calculadora.mult(10,20));
console.log(calculadora.soma(20,40));
calculadora.nome = "Calculadora do Victor!"
console.log(calculadora.nome);



/* EXPLICAÇÃO GERAL

 var somaFuncao = require("./calculadora") 
// obs foi usado ./nomearquivo este ponto e a barra é  para indicar que o arquivo esta no mesma pasta que o arquivo app.js

// para utilizar a função que o arquivo app.js exportou tem que utilizar o  metodo require("./nomedoarquivo) que é uma importação da função, é este
metodo e para importar a função tem que ser precedido de uma variavel.

// este metodo é aplicado na pasta principal app.js
*/







/*var mostrarSite = true;
const site = "www.guiadoprogramador.com";

console.log("Hello World!");
console.log("Meu nome é Victor!");
console.log("E eu estou aprendendo Node.js com o Guia do programador");

if(mostrarSite){ // Se mostrar site
    console.log(site); // Printe o site
}*/