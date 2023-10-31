function calcularIMC(peso, altura) {
  const imc = peso / Math.pow(altura, 2);
  console.log(imc.toFixed(2));
  return imc;
}

function classficarIMC(imc) {
  if (imc < 18.5) {
    return "Voce esta abaixo do peso";
  } else if (imc >= 18.5 && imc <= 25) {
    return "Voce esta com o peso correto";
  } else if (imc >= 30 && imc <= 40) {
    return "GORDO";
  } else {
    return "BALEAIA";
  }
}

function main() {
  const tes = calcularIMC(67, 1.75);
  console.log(classficarIMC(tes));
}

main();
