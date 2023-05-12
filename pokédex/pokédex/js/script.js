const alterarTema = document.querySelector("#botao-alterarTema");
const body = document.querySelector("body");

function temaEscuro() {
  body.classList.toggle("modo-escuro");
}

alterarTema.addEventListener("click", temaEscuro);
