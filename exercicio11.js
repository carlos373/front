let hora,minutos, conversão, titulo

titulo = (prompt(`Qual o nome do titulo da sua locadora?`))

minutos = parseFloat (prompt(`Quanto de duração o vídeo da locadora tem? em minutos`))




hora = minutos/60
hora = Math.floor(hora)
minutos = minutos - (hora*60)

document.write(``)
