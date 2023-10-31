const { gets, print } = require("./funcoes-auxiliares");

// const numeroSorteados = [];
let maiorValor = 0;

for (let i = 0; i < 5; i++) {
  const numeroSorteado = gets();
  if (numeroSorteado > maiorValor) {
    maiorValor = numeroSorteado;
  }
}

// print(numeroSorteados);
// let maiorValor = 0;
// numeroSorteados.forEach((numeroSorteado) => {
//   if (numeroSorteado > maiorValor) {
//     maiorValor = numeroSorteado;
//   }
// });

print(maiorValor);
