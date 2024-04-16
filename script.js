function sim() {
    
    // redireciona para um URL após clicar no SIM
    location.href = "https://www.youtube.com/watch?v=izGwDsrQ1eQ";
}

function desvia(btn) {
    // btn declarado na função
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}
// Evento de Transição de tela.
buttonYes.addEventListener('click',()=>{
    content1.style.display = 'none';
    content2.style.display = 'block';
    title.textContent = 'Você fez a melhor escolha!';
    title.style.fontSize = '3rem';
});
// Função de animação do coração.
function heartBeat(){
    if(heart.style.width == '320px' && heart.style.height == '300px'){
        heart.style.width = '270px';
        heart.style.height = '250px';
        heart.style.transition = 'ease .5s';
    }else{
        heart.style.width = '320px';
        heart.style.height = '300px';
        heart.style.transition = 'ease .5s';
    }

}