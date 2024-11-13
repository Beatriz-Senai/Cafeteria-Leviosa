let indiceAtual = 0
// Representa qual imagem está aparecendo no momento no carrossel
const slides = document.querySelectorAll('.slide')
// Como é constante sempre todas as imagens vão estar aparecendo *slide está guardando todas as imagens
const totalSlides = slides.length
// Conta quantas imagens são
function mostrarSlide(indice){
    const carrosselSlide = document.querySelector('.carrossel');
    carrosselSlide.style.transform = `translateX(-${indice*100}%)`
}
// Faz alguma coisa que nós a programamos para *Tem que ter nome *Sempre precisa de parênteses para funcionar

// function proximo(){
//     indiceAtual = (indiceAtual + 1) % totalSlides;
//     mostrarSlide(indiceAtual);
// 
// % resto de uma divisão na programação. *O que esse código faz: Soma a posição com 1 e o resultado divide por 3, o resultado vai ser a posição, se não der pra dividir ele fica com a posição que é o número que está sendo dividido

// function anterior (){
//     indiceAtual = (indiceAtual - 1 + totalSlides) %
//     totalSlides;
//     mostrarSlide (indiceAtual);
// }

function um(){
    indiceAtual = 0;
    mostrarSlide(indiceAtual);
}
function dois(){
    indiceAtual = 1;
    mostrarSlide(indiceAtual);
}

// CÓDIGO DO CORAÇÃO

function troca(){
    let favorito = document.getElementById("coracao")
    if (favorito.src.includes("img/coracaoPreenchido.png")){
        favorito.src = 'img/coracao.png'
    } else{
        favorito.src = 'img/coracaoPreenchido.png'
    }
}

function mostrarAlerta() {
    alert('O seu pedido já está no carrinho!');
}