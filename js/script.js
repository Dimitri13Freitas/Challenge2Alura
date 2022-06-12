// NAVEGAÇÃO

const voltarMenu = document.querySelector("#voltarMenu") 
const menu = document.querySelector("#menuId")
const adicionarPalavra = document.querySelector("#menuAdicionarPalavra")

function iniciaJogo() {
  voltarMenu.classList.remove("escondido")
  menu.classList.add("escondido")
}
function backToMenu() {
  menu.classList.remove("escondido")
  voltarMenu.classList.add("escondido")
  adicionarPalavra.classList.add("escondido")
  console.log(adicionarPalavra)
}
function adicionar() {
  menu.classList.add("escondido")
  voltarMenu.classList.remove("escondido")
  adicionarPalavra.classList.remove("escondido")
}


