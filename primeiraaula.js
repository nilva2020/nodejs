// criando uma variavel
// const e uma variavel que nao pode mudar o valor dela
/* ao rodar o codigo no terminal com o valor false observe que 
o endereço do site não será exibido.  
Ao trocar por true o codigo entendo que agora é para ser exibido*/

var mostrarSite = false
const site = "www.devnilva.com"

console.log("Hello World!!!")
console.log("Eu sou Dev backend")
console.log("E estou aprendendo Node.js com o guia do programador")

// usando o If na função
if(mostrarSite){
    console.log(site)
}