let nota1, nota2, nota3, media;

nota1 = parseFloat(prompt(`Qual a sua primeira nota?`));

nota2 = parseFloat(prompt(`Qual sua segunda nota?`));

nota3 = parseFloat(prompt(`Qual sua  terceira nota?`));

media = (nota1 + nota2 + nota3) / 3;


if ((nota1 || nota2|| nota3) <= 10 && (nota1 || nota2|| nota3) >= 1) {
    document.write(`Sua média é: ${media}<br>`);
  if (media >= 7) {
    document.write(`Você passou`);
  } else {
    document.write(`Você foi reprovado`);
  }
} else {
    document.write(`Você digitou algum numero errado`)
}
