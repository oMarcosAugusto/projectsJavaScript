const peso = 67;
const altura = 1.75;

const imc = peso / Math.pow(altura, 2);

console.log(imc.toFixed(2));

if (imc < 18.5) {
  console.log("Voce esta abaixo do peso");
} else if (imc >= 18.5 && imc <= 25) {
  console.log("Voce esta com o peso correto");
} else if (imc >= 30 && imc <= 40) {
  console.log("GORDO");
} else {
  console.log("BALEAIA");
}
