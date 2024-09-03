let dolar, real, conversao

dolar = parseFloat(prompt(`Qual a cotação do dolar?`))

real = parseFloat(prompt(`Qual o seu valor em real?`))

dolar = real / dolar

document.write(`seu valor de real em dolar é: ${dolar}`)