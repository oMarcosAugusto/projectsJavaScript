class Carro {
  marca;
  cor;
  gastoMedioPorKm;

  constructor(marca, cor, gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }

  descrever() {
    console.log(
      `A marca do carro e ${this.marca} da cor ${this.cor} e tem o gasto medio ${this.gastoMedioPorKm} por litro`
    );
  }
  CalculoGasto(kmRodado, preco) {
    const total = (preco * kmRodado) / this.gastoMedioPorKm;
    return total.toFixed(2);
  }
}

const carro1 = new Carro("Honda", "Branco", 10);
console.log(carro1.CalculoGasto(70, 5));
carro1.descrever();
