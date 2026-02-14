// Seleciona todos os elementos com animação
const elements = document.querySelectorAll('.fade-in');

// Função para verificar posição na tela
function revealOnScroll() {
  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // quando o elemento entra na tela
    if (elementTop < windowHeight - 80) {
      el.classList.add('visible');
    }
  });
}

// Executa ao rolar
window.addEventListener('scroll', revealOnScroll);

// Executa ao carregar a página (importante)
window.addEventListener('load', revealOnScroll);
