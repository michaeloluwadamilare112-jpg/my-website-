// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Highlight current page in navigation
const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.getAttribute('href') === currentPage || 
      (currentPage === "index.html" && link.getAttribute('href') === "#home")) {
    link.classList.add('active');
  }
});

// GSAP Animations (if GSAP is included)
if (typeof gsap !== "undefined") {
  gsap.from(".section h2", {
    scrollTrigger: { trigger: ".section h2", start: "top 80%" },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
}    <div class="portfolio-overlay">
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
