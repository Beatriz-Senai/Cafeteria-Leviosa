// script.js

// Obtém os elementos
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("entrar");
const closeBtn = document.getElementById("closeBtn");

// Quando o usuário clicar no botão, o modal será exibido
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// Quando o usuário clicar no "x", o modal será fechado
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clicar fora do conteúdo do modal, ele também será fechado
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
