// GSAP Animations
gsap.registerPlugin(); // No extra plugin needed for basic

// Animate Hero on load
gsap.fromTo(".greeting", 
  { y: 60, opacity: 0 }, 
  { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
);

gsap.fromTo(".tagline", 
  { y: 60, opacity: 0 }, 
  { y: 0, opacity: 1, duration: 1.2, delay: 0.4, ease: "power3.out" }
);

gsap.fromTo(".hire-btn", 
  { y: 60, opacity: 0 }, 
  { y: 0, opacity: 1, duration: 1, delay: 0.8, ease: "power3.out" }
);

// Portfolio Images (using high-quality placeholder links)
const portfolioImages = [
  { src: "https://picsum.photos/id/1015/800/600", title: "Neon Brand Identity" },
  { src: "https://picsum.photos/id/201/800/600", title: "Social Media Campaign" },
  { src: "https://picsum.photos/id/237/800/600", title: "Logo Design" },
  { src: "https://picsum.photos/id/870/800/600", title: "Poster Series" },
  { src: "https://picsum.photos/id/1018/800/600", title: "Packaging Design" },
  { src: "https://picsum.photos/id/106/800/600", title: "Event Branding" }
];

const portfolioGrid = document.getElementById('portfolio-grid');

portfolioImages.forEach(item => {
  const div = document.createElement('div');
  div.className = 'portfolio-item';
  div.innerHTML = `
    <img src="\( {item.src}" alt=" \){item.title}">
    <div class="portfolio-overlay">
      <h3>${item.title}</h3>
    </div>
  `;
  portfolioGrid.appendChild(div);
});

// Hamburger Menu (same as before)
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Contact Form - Working (shows success message)
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // Simple validation
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (name === '' || email === '') {
    formMessage.style.color = '#ff5555';
    formMessage.textContent = 'Please fill all required fields.';
    return;
  }

  // Simulate sending
  formMessage.style.color = '#00ff9d';
  formMessage.textContent = '✅ Message sent successfully! I will reply soon.';

  // Reset form
  contactForm.reset();

  // Clear message after 5 seconds
  setTimeout(() => {
    formMessage.textContent = '';
  }, 5000);
});

// Scroll-triggered animations for sections (optional enhancement)
document.querySelectorAll('.section').forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    },
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out"
  });
});
