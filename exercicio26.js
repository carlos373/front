// Solicita ao usuário que insira um número
var numero = parseInt(prompt("Digite um número:"));

// Inicializa a soma dos divisores
var somaDivisores = 0;

// Itera sobre todos os números de 1 até o número - 1
for (var i = 1; i < numero; i++) {
    // Verifica se i é um divisor do número
    if (numero % i === 0) {
        // Adiciona o divisor à soma
        somaDivisores += i;
    }
}

// Verifica se a soma dos divisores é igual ao número
if (somaDivisores === numero) {
    document.write(numero + " é um número perfeito.");
} else {
    document.write(numero + " não é um número perfeito.");
}
