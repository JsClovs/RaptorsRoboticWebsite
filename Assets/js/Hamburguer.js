let hamburguer_open = document.getElementById("Hamburgueropen")
let hamburguer_close = document.getElementById("Hamburguerclose")
let conteudohamburguer = document.getElementById("iconteudoheaderhamburguer")

function abrirHamburguer() {
   hamburguer_open.style.display = "none";
   hamburguer_close.style.display = "block";
   conteudohamburguer.classList.add("ativo");
}

function fecharHamburguer() {
   hamburguer_open.style.display = "block";
   hamburguer_close.style.display = "none";
   conteudohamburguer.classList.remove("ativo");
}

function ajustarVisibilidade() {
   if (window.innerWidth >= 624) {
      hamburguer_open.style.display = "none";
      hamburguer_close.style.display = "none";
      conteudohamburguer.classList.add("ativo");
   } else {
      hamburguer_open.style.display = "block";
      hamburguer_close.style.display = "none";
      conteudohamburguer.classList.remove("ativo");
   }
}


