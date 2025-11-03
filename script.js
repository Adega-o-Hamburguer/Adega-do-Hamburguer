const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Lógica do Hamburger Menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Lógica do Intersection Observer (Animação de Seção)
const sections = document.querySelectorAll('.section');
const options = {
  threshold: 0.1, // Começa a animação quando 10% do elemento está visível
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      // Opcional: remove a classe se sair da tela para reaparecer ao scroll back
      entry.target.classList.remove('visible'); 
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});