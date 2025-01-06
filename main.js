// Include Typed.js library
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12';
document.head.appendChild(script);

// Toggle icon Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
};

// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        document
          .querySelector('.navbar a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });

  // Sticky Navbar
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Remove Toggle Icon and Navbar
  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
};

// Scroll reveal animation
ScrollReveal({
  distance: '60px',
  duration: 2800,
  reset: true,
  delay: 100,
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal(
  '.home-img, .skills-container, .project-box, .contact form',
  {
    origin: 'bottom',
  }
);
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

// Typed Js
const typed = new Typed('.multiple-text', {
  strings: [
    'Software Engineer',
    'Backend Developer',
    'Open Source Contributor',
  ],
  typeSpeed: 200,
  backSpeed: 60,
  backDelay: 1000,
  loop: true,
});

document.querySelector('.multiple-text').style.color = 'darkred';
