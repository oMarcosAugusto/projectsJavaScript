class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  imc() {
    const imc = this.peso / Math.pow(this.altura, 2);
    return imc.toFixed(2);
  }

  classificarIMC() {
    const imc = this.imc();
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
}

const jose = new Pessoa("Jose", 67, 1.75);
console.log(jose.imc());
console.log(jose.classificarIMC());
