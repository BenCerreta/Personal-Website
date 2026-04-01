// Website loaded
console.log("Benjamin Cerreta | Portfolio loaded successfully.");

// Smooth scroll for any anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.course-card, .activity, .skill-group, .stat-item, .timeline-item, .project-card')
  .forEach(el => { el.classList.add('fade-in'); observer.observe(el); });

  window.addEventListener('scroll', () => {
  document.querySelector('.navbar').style.boxShadow =
    window.scrollY > 10
      ? '0 4px 24px rgba(0,0,0,0.35)'
      : '0 2px 12px rgba(0,0,0,0.3)';
});