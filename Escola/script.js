const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
 
let index = 0;
 
nextBtn.addEventListener("click", () => {
    index = (index + 1) % 3; // Ajuste se adicionar mais imagens
    updateCarousel();
});
 
prevBtn.addEventListener("click", () => {
    index = (index - 1 + 3) % 3; // Ajuste se adicionar mais imagens
    updateCarousel();
});
 
function updateCarousel() {
carousel.style.transform = `translateX(${-index * 100}%)`;
}