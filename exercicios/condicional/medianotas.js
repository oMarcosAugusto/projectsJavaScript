const nota1 = 8.9;
const nota2 = 6.9;
const nota3 = 7.8;

const media = (nota1 + nota2 + nota3) / 3;
console.log(media.toFixed(2));

if (media < 5) {
  console.log("Reprovado");
} else if (media >= 5 && media < 7) {
  console.log("Recuperacao");
} else {
  console.log("Aprovado");
}
