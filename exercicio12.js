let n1, n2;

n1 = parseFloat(prompt(`Digite um numero`));

if (n1 > 0) {
  document.write(`positivo`);
} else if (n1 < 0) {
  document.write(`negativo`);
} else {
  document.write(`zero`);
}
