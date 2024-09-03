/*Elabore um programa que ilustra a montagem de uma estrutura de repetição decrescente, com o valor inicial informado pelo usuário até o número 1*/

let numero = Number(prompt("Digite um numero e vou lhe apresentar a decrescente dele até o 1"))
document.write(` <h2>Decrescente do ${numero} </h2>`)
for( i = numero; i >= 1; i-- ){
    document.write(`${i} <br>\t`)

}
