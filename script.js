document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  // Check and apply saved theme preference
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
  }

  // Theme toggle button
  themeToggle.addEventListener('click', function () {
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      themeToggle.textContent = '🌙';
    } else {
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
      themeToggle.textContent = '☀️';
    }
  });

  // GSAP Animations
  gsap.from('#hero h1', { opacity: 0, y: -50, duration: 1, delay: 0.2 });
  gsap.from('#hero p', { opacity: 0, y: -30, duration: 1, delay: 0.5 });
  gsap.from('#hero a', { opacity: 0, scale: 0.5, duration: 1, delay: 0.8 });

  // Smooth Scroll Effect
  document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
});
