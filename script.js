// Vanta.js Background
VANTA.NET({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x0077ff,
  backgroundColor: 0xffffff,
  points: 12.00,
  maxDistance: 20.00,
  spacing: 18.00
});

// GSAP Animations
gsap.from(".intro h2", {opacity: 0, y: -50, duration: 1});
gsap.from(".intro p", {opacity: 0, y: 20, duration: 1, delay: 0.5});
gsap.from(".intro .btn", {opacity: 0, scale: 0.8, duration: 1, delay: 1});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});
// Custom Cursor Script
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// Hover effect on links and buttons
const hoverElements = document.querySelectorAll('a, button');
hoverElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hovered');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hovered');
  });
});
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
  document.querySelector('.custom-cursor').style.display = 'none';
}