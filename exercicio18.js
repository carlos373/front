let l1, l2, l3;

l1 = Number(prompt(`Qual o valor do l1?`));
l2 = Number(prompt(`Qual o valor do l2?`));
l3 = Number(prompt(`Qual o valor do l3?`));

if (l1 > l2 && l1 > l3) {
  document.write(`Seu triangulo é válido`);
} else if (l2 > l1 && l2 > l3) {
  document.write(`Seu triangulo é válido`);
} else if (l3 > l1 && l3 > l2) {
  document.write(`Seu triangulo é válido`);
} else {
  document.write(`Seu triangulo não é válido`);
}

// outro jeito de fazer
if (l1 + l2 > l3 && l2 + l3 > l1 && l1 + l3 > l2) {
} else {
}
