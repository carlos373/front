let idade;

idade = parseFloat(prompt(` Qual a sua idade?`));

if (idade >= 18) {
  document.write(`Você pode dirigir`);
} else if (idade < 18) {
  document.write(`Você não pode dirigir`);
}
