// js/script.js
document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Efecto de scroll en navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.padding = '15px 0';
        }
    });
    
    // Animación para las barras de habilidades al hacer scroll
    const skillBars = document.querySelectorAll('.habilidad-progress');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.transition = 'width 1.5s ease-in-out';
                bar.style.width = width;
            }, 300);
        });
    }
    
    // Detectar cuando la sección de habilidades es visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const habilidadesSection = document.getElementById('habilidades');
    if (habilidadesSection) {
        observer.observe(habilidadesSection);
    }
});