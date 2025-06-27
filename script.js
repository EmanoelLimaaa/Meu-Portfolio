const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

function setupMenuToggle() {
  if (!menuToggle || !nav) return;

  menuToggle.addEventListener('click', () => {
    const isExpanded = nav.classList.toggle('show');
    menuToggle.innerHTML = isExpanded ? '✖' : '☰';
    menuToggle.setAttribute('aria-expanded', isExpanded);
  });

  menuToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const isExpanded = nav.classList.toggle('show');
      menuToggle.innerHTML = isExpanded ? '✖' : '☰';
      menuToggle.setAttribute('aria-expanded', isExpanded);
    }
  });

  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('show');
      menuToggle.innerHTML = '☰';
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

setupMenuToggle();

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    nav.classList.remove('show');
    menuToggle.innerHTML = '☰';
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 50);
});

const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if (!backToTop) return;
  backToTop.classList.toggle('show', window.scrollY > 300);
});

if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});