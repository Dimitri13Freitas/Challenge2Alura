// NAVEGAÇÃO
const voltarMenu = document.querySelector("#voltarMenu") 
const menu = document.querySelector("#menuId")
const adicionarPalavra = document.querySelector("#menuAdicionarPalavra")
const jogo = document.querySelector("#jogoId")

function iniciaJogo() {
  voltarMenu.classList.remove("escondido")
  menu.classList.add("escondido")
  jogo.classList.remove("escondido")
}
function backToMenu() {
  menu.classList.remove("escondido")
  voltarMenu.classList.add("escondido")
  adicionarPalavra.classList.add("escondido")
  jogo.classList.add("escondido")

}
function adicionar() {
  menu.classList.add("escondido")
  voltarMenu.classList.remove("escondido")
  adicionarPalavra.classList.remove("escondido")
}

// JOGO
const palavras = ["DESIGN", "HTML", "COISAS", "FELIZ"]
const sorteiaPalavra = palavras[Math.floor(Math.random()*palavras.length)]
const letrasErradas = []
const letrasCertas = []

document.addEventListener("keydown", (evento) => {
  const code = evento.keyCode;
  if (isLetra(code)) {
    const letra = evento.key;
    if (letrasErradas.includes(letra)) {
      mostrarAvisoLetraRepetida()
    } else {
      if (sorteiaPalavra.includes(letra)){
        letrasCertas.push(letra)
      } else {
        letrasErradas.push(letra)
      }
    }
    atualizarJogo();
  }
})

function atualizarJogo(){
   mostrarLetrasErradas();
}

function mostrarLetrasErradas() {
  const div = document.querySelector(".letrasErros")
  letrasErradas.forEach(letra => {
    div.innerHTML += `<span>${letra}</span>`;
  })
}

function mostrarAvisoLetraRepetida() {
  
}
function isLetra(code) {
  return code >= 65 && code <= 90
}

