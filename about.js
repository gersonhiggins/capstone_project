const hamburguer = document.querySelector('.hamburguer');
const navBar = document.querySelector('.nav-bar');
const nav = document.querySelector('nav');

hamburguer.addEventListener('click', () => {
  navBar.classList.toggle('active');
  hamburguer.classList.toggle('active');
});

document.querySelectorAll('.nav-bar').forEach((n) => n.addEventListener('click', () => {
  navBar.classList.remove('active');
}));
document.addEventListener('scroll', () => {
  navBar.classList.add('scroll');
});

window.onwheel = (e) => {
  if (e.deltaY >= 0) {
    nav.classList.add('scroll');
  } else {
    nav.classList.remove('scroll');
  }
};