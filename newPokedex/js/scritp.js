
const pokemonList = document.querySelector("#pokemonsList"); 
const loadMoreButton = document.querySelector("#loadMoreButton");

const maxRecords = 151;
const limit = 12;
let offset = 0;

function loadPokemonItens(limit, offset){
pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map((pokemon) => `
    <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div id="myModal" class="modal">
        <span class="close">&times;</span>
        <img id="modalImage" class="modal-content">
        <p id="modalText" class="modal-text">Texto de exemplo.</p>
    </div>
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${pokemon.type}">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}"
                 alt="${pokemon.name}">
        </div>
    </li>
`).join('');
    pokemonList.innerHTML += newHtml;

const modal = document.getElementById("myModal");
const modalImage = document.getElementById("modalImage");
const modalText = document.getElementById("modalText"); // Elemento de texto no modal
const closeSpan = document.querySelector(".close");

pokemonList.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
        const listItem = event.target.closest(".pokemon");
        if (listItem) {
            modal.style.display = "block";
            modalImage.src = event.target.src;
            modalText.textContent = `Você abriu o modal para o Pokémon ${listItem.querySelector(".name").textContent}.`; // Atualiza o texto do modal
            fetch("https://pokeapi.co/api/v2/pokemon/21/")
            .then((response) => response.json())
            .then((pokemon) => console.log(pokemon))
        }
    }
});    
    closeSpan.addEventListener("click", () => {
      modal.style.display = "none";
    });

// Fechar o modal ao clicar fora do conteúdo
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
  

})
}

loadPokemonItens(limit, offset)

loadMoreButton.addEventListener('click', () => {
    offset += limit;

    const qtdRecordNextPage = offset + limit;

    if (qtdRecordNextPage >= maxRecords){
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else{
        loadPokemonItens(limit, offset);
    }    
})