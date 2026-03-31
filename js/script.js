const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');
const icon = document.querySelector('.nav-toggle span');

toggle.addEventListener('click', () => {
  nav.classList.toggle('nav--open');

  if (nav.classList.contains('nav--open')) {
    icon.textContent = 'close';
  } else {
    icon.textContent = 'menu';
  }
});