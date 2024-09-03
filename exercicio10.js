let valor,rend
juros = 0,07

valor = parseFloat(prompt(`Qual o valor que foi depositado?`))

valor = juros * valor 

document.write(`seu rendimento foi: ${valor}`)