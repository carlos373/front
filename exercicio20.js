let ano

ano = Number(prompt(`Qual o ano que você esta pesando?`))

if ( ano % 4 == 0){
    document.write(`O ano  que você digitou é bissexto`)

} else {
    document.write(`O ano que você digitou não é bissxto`)
}