// Scroll Suave para navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Log de boas-vindas no console (Estilo NOC)
console.log("VH.tech Portfolio System Online...");
