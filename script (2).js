document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      // Scroll to the target section smoothly
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Sticky Navigation Bar on Scroll
  const navbar = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });
  
  // Mobile Navigation Toggle
  const menuToggle = document.createElement('button');
  menuToggle.textContent = '☰'; // Hamburger icon
  menuToggle.classList.add('menu-toggle');
  navbar.appendChild(menuToggle);
  
  const menu = navbar.querySelector('ul');
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
  
  // Optional: Add smooth fade effect for contact section
  const contactSection = document.getElementById('contact');
  window.addEventListener('scroll', () => {
    if (window.scrollY > contactSection.offsetTop - window.innerHeight + 100) {
      contactSection.classList.add('fade-in');
    }
  });