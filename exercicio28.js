// Solicita ao usuário que insira um número
var numero = parseInt(prompt("Digite um número:"));

// Inicializa uma variável para indicar se o número é primo
var ehPrimo = true;

// Verifica se o número é menor que 2 (números menores que 2 não são primos)
if (numero < 2) {
    ehPrimo = false;
} else {
    // Itera de 2 até o número - 1
    for (var i = 2; i < numero; i++) {
        // Verifica se o número é divisível por i
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }else{
            continue
        }
    }
}

// Mostra o resultado
if (ehPrimo) {
    document.write(numero + " é um número primo.");
} else {
    document.write(numero + " não é um número primo.");
}
