document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});

function revealOnScroll() {
  const reveals = document.querySelectorAll('.scroll-reveal');
  reveals.forEach(function (element) {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const revealPoint = 150;

    // Jika elemen berada dalam viewport → tambah class
    if (elementTop < windowHeight - revealPoint && elementBottom > 0) {
      element.classList.add('revealed');
    } 
    // Jika elemen keluar dari viewport → buang class
    else {
      element.classList.remove('revealed');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Panggil masa mula load
