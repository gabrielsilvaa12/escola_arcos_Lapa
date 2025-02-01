document.addEventListener("DOMContentLoaded", function () {
    const titulo = document.querySelector(".titulo");
    titulo.addEventListener("mouseover", function () {
        titulo.style.color = "#483d8b";
    });
    titulo.addEventListener("mouseout", function () {
        titulo.style.color = "#6a5acd";
    });
});
