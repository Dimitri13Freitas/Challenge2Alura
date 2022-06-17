// NAVEGAÇÃO
const voltarMenu = document.querySelector("#voltarMenu") ;
const menu = document.querySelector("#menuId");
const adicionarPalavra = document.querySelector("#menuAdicionarPalavra");
const jogo = document.querySelector("#jogoId");

const palavras = [];
const letrasCertas = [];
const letrasErradas = [];

function iniciaJogo() {
  adicionarPalavra.classList.add("escondido");
  voltarMenu.classList.remove("escondido");
  menu.classList.add("escondido");
  jogo.classList.remove("escondido");
  
  const sorteiaPalavra = palavras[Math.floor(Math.random()*palavras.length)];
  
  // Logica do jogo
  document.addEventListener("keydown", (evento) => {
    const code = evento.keyCode;
    if(isLetra(code)) {
      const letra = evento.key;
      if(letrasErradas.includes(letra)){
        alert("VOCÊ JÁ TENTOU ESTA LETRA");
      }else {
        if(sorteiaPalavra.includes(letra)){
          letrasCertas.push(letra);
        }else{
          letrasErradas.push(letra);
        };
      };
      atualizaJogo();
    };
  });
  
  function atualizaJogo() {
    mostrarLetrasCertas();
    mostrarLetrasErradas();
    tentativas();
    fimDejogo();
  }
  
  function mostrarLetrasErradas() {
    const div = document.querySelector(".erros");
    div.innerHTML = "<h3>Letras erradas</h3>";
     letrasErradas.forEach((letra) => {
        div.innerHTML += `<span>${letra}</span>`;
     });
  };
  
  function mostrarLetrasCertas() {
    const container = document.querySelector(".palavraSecreta");
    container.innerHTML = "";
    sorteiaPalavra.split("").forEach((letra) => {
      if (letrasCertas.includes(letra)) {
        container.innerHTML += `<span>${letra}</span>`;
      } else {
        container.innerHTML += `<span>_</span>`;
      };
    });
  };
  
  function fimDejogo() {
    const container = document.querySelector(".palavraSecreta");
    const tentativaForca = document.querySelectorAll(".forca img");
  
    if(letrasErradas.length === tentativaForca.length - 1) {
      alert("Você Perdeu, Tente novamente");
    };
    if(sorteiaPalavra == container.innerText.toLowerCase()) {
      alert("Parabéns, você Ganhou!");
    };
  };
  
  function tentativas(){
    const tentativaForca = document.querySelectorAll(".forca img");
    let i = 0;
    while(i < letrasErradas.length){
      tentativaForca[i].classList.remove("selected");
      i++;
      tentativaForca[i].classList.add("selected");
    };
  };
  
  function isLetra(code) {
    return code >= 65 && code <= 90;
  };
};

function backToMenu() {
  menu.classList.remove("escondido");
  voltarMenu.classList.add("escondido");
  adicionarPalavra.classList.add("escondido");
  jogo.classList.add("escondido");
};

function adicionar() {
  menu.classList.add("escondido");
  voltarMenu.classList.remove("escondido");
  adicionarPalavra.classList.remove("escondido");
};

// Adiciona uma palavra no array
function addPalavra() {
  const adicao = document.querySelector(".msgAdicionado");
  const input = document.getElementById("add").value.toLowerCase();

  adicao.classList.remove("escondido");

  setTimeout(() => {
  adicao.classList.add("escondido");
  }, 1000);

  if(input.length > 8) {
    alert("Não é possivel adicionar palavras com mais de 8 caracteres!!")
  }else{
    palavras.push(input);
  };

};