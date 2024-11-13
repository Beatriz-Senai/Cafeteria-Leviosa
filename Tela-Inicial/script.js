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

// script.js

// Obtém os elementos
const modal2 = document.getElementById("modall");
const openModallBtn = document.getElementById("criCont");
const closeBtn2 = document.getElementById("closeBtn2");

// Quando o usuário clicar no botão, o modal será exibido
openModallBtn.onclick = function() {
    modal2.style.display = "block";
}

// Quando o usuário clicar no "x", o modal será fechado
closeBtn2.onclick = function() {
    modal2.style.display = "none";
}

// Quando o usuário clicar fora do conteúdo do modal, ele também será fechado
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

// CARROSSEL

let currentSlide = 0; // Variável que armazena o índice do slide atual

// Função que exibe o slide baseado no índice fornecido
function showSlide(index) {
    const slides = document.querySelectorAll('.slide'); // Seleciona todas as imagens do carrossel
    // Ajusta o índice se estiver fora dos limites
    if (index >= slides.length) {
        currentSlide = 0; // Retorna ao primeiro slide
    } else if (index < 0) {
        currentSlide = slides.length - 1; // Volta para o último slide
    } else {
        currentSlide = index; // Define o slide atual como o índice fornecido
    }
    const offset = -currentSlide * 100; // Calcula o deslocamento horizontal
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`; // Aplica o deslocamento
}

// Função que muda o slide com base na direção (anterior ou próximo)
function changeSlide(n) {
    showSlide(currentSlide + n); // Chama a função showSlide com o novo índice
}

// Inicializa o carrossel mostrando o primeiro slide
showSlide(currentSlide);

// Adiciona um intervalo para mudar o slide automaticamente a cada 3 segundos
setInterval(() => {
    changeSlide(1); // Muda para o próximo slide
}, 3000); // Intervalo em milissegundos (3000 ms = 3 segundos)

  function irParaPagina() {
  window.location.href = "#" }
