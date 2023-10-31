class Pessoa {
  nome;
  idade;
  altura;

  constructor(nome, idade, altura) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
  }

  descrever() {
    console.log(
      `Meu nome e ${this.nome}, tenho ${this.idade} anos e ${this.altura}m de altura`
    );
  }
}

// marcos.descrever();
// jana.descrever();

function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} e mais velho(a) que ${p2.nome}`);
  } else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} e mais velho(a) que ${p1.nome}`);
  } else {
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
  }
}

const marcos = new Pessoa("Marcos", 28, 1.75);
const jana = new Pessoa("Jana Dubinski", 25, 1.65);

compararPessoas(marcos, jana);
