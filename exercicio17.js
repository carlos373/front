let n1;

n1 = parseInt(prompt(`Escolha um numero`));

if (n1 % 3 == 0 && n1 % 5 == 0) {
  document.write(`Seu numero é multiplo de 3 e 5`);
} else {
  document.write(`Seu numero não é multiplo de 3 e nem  de 5`);
}
