// Elabore um programa que leia um número e
// apresentar a tabuada desse numero

let numero = Number(prompt("Digite um numero para tabuada"))
debugger;

for( let i = 1; i <= 10; i++){
    document.write(`${numero} x ${i} = ${numero*i} <br>`)
}