// Atualiza automaticamente o ano exibido no rodapé.
const yearElement = document.querySelector('#current-year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Filtro de projetos: mostra apenas os cards da categoria selecionada.
const filterButtons = document.querySelectorAll('[data-filter]');
const projectCards = document.querySelectorAll('.project-card[data-category]');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isSelected = item === button;
      item.classList.toggle('is-active', isSelected);
      item.setAttribute('aria-pressed', String(isSelected));
    });

    projectCards.forEach((card) => {
      const shouldShow = selectedFilter === 'todos' || card.dataset.category === selectedFilter;
      card.hidden = !shouldShow;
    });
  });
});

// Menu recolhível para telas pequenas.
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    siteNav.classList.toggle('is-open', !isOpen);
  });

  // Ao escolher um link, fecha o menu no celular.
  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      siteNav.classList.remove('is-open');
    });
  });
}
