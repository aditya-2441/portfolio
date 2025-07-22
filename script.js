const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
  multiplier: 0.9
});

gsap.from("h1", { opacity: 0, y: -50, duration: 1, delay: 0.2 });
gsap.from("p.animate-fadeIn", { opacity: 0, y: 30, duration: 1, delay: 0.6 });
gsap.from("a", { opacity: 0, scale: 0.8, duration: 1, delay: 1 });

const cursor = document.createElement('div');
cursor.style.width = '16px';
cursor.style.height = '16px';
cursor.style.border = '2px solid white';
cursor.style.borderRadius = '50%';
cursor.style.position = 'absolute';
cursor.style.pointerEvents = 'none';
cursor.style.transform = 'translate(-50%, -50%)';
cursor.style.transition = 'transform 0.1s ease';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});