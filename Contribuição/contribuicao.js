var btn = document.querySelector('#show-or-hide');
var informacoes = document.querySelector('.informacoes');

btn.addEventListener('click', function() {
    if (informacoes.style.opacity === '1') {
        informacoes.style.opacity = '0';
        setTimeout(function() {
            informacoes.style.display = 'none';
        }, 500); // tempo igual à duração da transição em milissegundos
    } else {
        informacoes.style.display = 'block';
        setTimeout(function() {
            informacoes.style.opacity = '1';
        }, 10); // pequeno atraso para garantir que a transição ocorra
    }
});

