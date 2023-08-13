const glowBar = document.querySelector('.glow-bar');

window.addEventListener('scroll', () => {
  const scrollThreshold = 100; // Adjust the scroll threshold as needed

  if (window.scrollY > scrollThreshold) {
    const opacity = (window.scrollY - scrollThreshold) / 50; // Adjust the divisor for intensity
    glowBar.style.opacity = Math.min(opacity, 1);
  } else {
    glowBar.style.opacity = 0;
  }
});
