// Solicita ao usuário que insira o número N
var N = parseInt(prompt("Digite o número de valores a serem lidos:"));

// Itera N vezes para ler os valores e calcular o fatorial
for (var i = 0; i < N; i++) {
    // Solicita ao usuário que insira um valor
    var valor = parseInt(prompt("Digite um valor inteiro e positivo:"));
    
    // Inicializa a variável para calcular o fatorial
    var fatorial = 1;
    
    // Calcula o fatorial do valor lido
    for (var j = 1; j <= valor; j++) {
        fatorial *= j;
    }
    
    // Mostra o valor lido e o fatorial
    document.write("Valor lido: " + valor + ", Fatorial: " + fatorial);
}
