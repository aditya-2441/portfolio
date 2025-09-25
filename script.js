// Vanta Background
VANTA.BIRDS({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0xffffff,
  color1: 0x0077ff,
  color2: 0xff6600,
  birdSize: 1.5,
  wingSpan: 20,
  separation: 50,
  alignment: 50,
  cohesion: 20,
  quantity: 3
});

// GSAP Animations
gsap.from(".intro h2", {opacity:0, y:-50, duration:1});
gsap.from(".intro p", {opacity:0, y:20, duration:1, delay:0.5});
gsap.from(".intro .btn", {opacity:0, scale:0.8, duration:1, delay:1});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    const target=document.querySelector(this.getAttribute("href"));
    if(target){
      window.scrollTo({top:target.offsetTop-70,behavior:"smooth"});
    }
  });
});

// Custom Cursor
const cursor=document.querySelector('.custom-cursor');
document.addEventListener('mousemove',e=>{
  cursor.style.top=`${e.clientY}px`;
  cursor.style.left=`${e.clientX}px`;
});
document.querySelectorAll('a, button').forEach(el=>{
  el.addEventListener('mouseenter',()=>cursor.classList.add('hovered'));
  el.addEventListener('mouseleave',()=>cursor.classList.remove('hovered'));
});

// Animate project cards
document.querySelectorAll('.project-card').forEach(card=>{
  card.addEventListener('mouseenter',()=>gsap.to(card,{scale:1.05,duration:0.3}));
  card.addEventListener('mouseleave',()=>gsap.to(card,{scale:1,duration:0.3}));
});

// Stats Counter
function animateCounter(id,end,duration){
  let obj=document.getElementById(id);
  let start=0;
  let step=Math.ceil(duration/end);
  let interval=setInterval(()=>{
    start++;
    obj.innerText=start;
    if(start>=end) clearInterval(interval);
  },step);
}
window.addEventListener("scroll",()=>{
  let stats=document.getElementById("stats");
  let rect=stats.getBoundingClientRect();
  if(rect.top<window.innerHeight && !stats.dataset.animated){
    stats.dataset.animated=true;
    animateCounter("stat1",10,2000);
    animateCounter("stat2",5,2000);
    animateCounter("stat3",2,2000);
    animateCounter("stat4",1000,2000);
  }
});
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});