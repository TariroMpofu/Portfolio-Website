// JavaScript to update navigation bar on scroll
const navContainer = document.querySelector('.nav-container');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navContainer.classList.add('nav-scrolled');
  } else {
    navContainer.classList.remove('nav-scrolled');
  }
});

