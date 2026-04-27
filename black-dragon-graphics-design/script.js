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
}
