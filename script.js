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

  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      nav.classList.remove('show');
      menuToggle.innerHTML = '☰';
      menuToggle.setAttribute('aria-expanded', 'false');
    }
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

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
  themeToggle.innerHTML = '☀️';
} else {
  themeToggle.innerHTML = '🌙';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  if (body.classList.contains('light-theme')) {
    localStorage.setItem('theme', 'light');
    themeToggle.innerHTML = '☀️';
  } else {
    localStorage.setItem('theme', 'dark');
    themeToggle.innerHTML = '🌙';
  }
});

document.querySelectorAll('.project-actions .btn-primary').forEach(btn => {
  if (btn.getAttribute('href') === '#') {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Este projeto ainda não está disponível para visualização. Em breve!');
    });
  }
});
