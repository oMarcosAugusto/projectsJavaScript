// const numero = 11;

// const ePar = numero % 2 == 0;

// if (ePar == false) {
//   console.log("O numero " + numero + " e impar");
// } else {
//   console.log("O numero " + numero + " e par!");
// }

let etanol = 4.0;
let gasolina = 5.69;
let tipoCombustivel = gasolina;
let combustivelPorKM = 8.7;
const distanciaPercorrida = 349;

const totalCombustivelGasto = distanciaPercorrida / combustivelPorKM;
const totalGasto = totalCombustivelGasto * tipoCombustivel;

// console.log(totalCombustivelGasto.toFixed(2));
// console.log(totalGasto.toFixed(2));

if (tipoCombustivel === gasolina) {
  console.log("Total de gasolina gasta R$" + totalGasto.toFixed(2));
} else {
  console.log("Total de etanol gasto R$" + totalGasto.toFixed(2));
}
