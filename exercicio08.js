let h,s,d,min

h = parseInt(prompt("Qual a hora que está agora?"))

min = h / 60
h = h / 60
d = (h/24) 

document.write(`O resultado das suas horas em dias são: ${d} já em horas são: ${h} já em minutos são: ${min}`)