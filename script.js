document.querySelectorAll('.cursos .icons img').forEach(img => {
    img.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s';
    });
    img.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});

    document.getElementById("search-bar").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            alert("Você pesquisou por: " + this.value);
            this.value = ""; 
        }
    })

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetID = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetID);
     
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, 
                    behavior: 'smooth'
                });
            }
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        
        const cardConfirmacao = document.getElementById("card-confirmacao");
        const btnConfirmarFinal = document.getElementById("confirmar-inscricao-final");
        const btnCancelarFinal = document.getElementById("cancelar-inscricao-final");
        const cursoSelecionado = document.getElementById("curso-selecionado");
     
        
        cardConfirmacao.style.display = "none";
     
        
        const cursos = document.querySelectorAll(".cursos .icons img");
     
        cursos.forEach((curso) => {
            curso.addEventListener("click", function () {
                
                const nomeCurso = this.alt; 
                cursoSelecionado.textContent = `Você tem certeza que deseja se inscrever no curso de ${nomeCurso}?`;
                
                cardConfirmacao.style.display = "flex";
            });
        });
     
        btnCancelarFinal.addEventListener("click", () => {
            cardConfirmacao.style.display = "none"; 
        });
     
        btnConfirmarFinal.addEventListener("click", () => {
            alert("Inscrição realizada com sucesso!");
            cardConfirmacao.style.display = "none"; 
        });
     
        window.addEventListener("click", function (event) {
            if (event.target === cardConfirmacao) {
                cardConfirmacao.style.display = "none"; 
            }
        });
    });
