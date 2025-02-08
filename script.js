document.getElementById("menu-btn").addEventListener("click", function() {
    let menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
});

// Fecha o menu ao clicar fora
document.addEventListener("click", function(event) {
    let menu = document.getElementById("menu");
    let button = document.getElementById("menu-btn");
    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.style.display = "none";
    }
});

let index = 0;

function moveSlide(direction) {
    const slides = document.querySelector(".carousel-container");
    index += direction;

    if (index > 2) index = 0;  // Volta para a primeira imagem
    if (index < 0) index = 2;  // Vai para a última imagem

    slides.style.transform = `translateX(${-index * 621}px)`;
}

setInterval(() => moveSlide(1), 3000);

let indexo = 0;

function mover(direcao) {
    const container = document.querySelector('.carrossel-container');
    const totalImagens = document.querySelectorAll('.carrossel img').length;

    indexo += direcao;

    if (indexo < 0) {
        indexo = totalImagens - 5; // Volta para a última posição
    } else if (indexo > totalImagens - 5) {
        indexo = 0; // Volta para a primeira posição
    }

    container.style.transform = `translateX(-${index * 20}%)`; // 20% porque cada imagem ocupa 20%
}