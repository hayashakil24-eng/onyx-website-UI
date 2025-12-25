document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your inquiry! We will get back to you shortly.");
  this.reset();
});
// Accordion logic: click to expand/collapse with smooth height animation. document.querySelectorAll(".card").forEach((card) => { const header = card.querySelector(".card-header"); const content = card.querySelector(".card-content"); header.addEventListener("click", () => { const expanded = header.getAttribute("aria-expanded") === "true"; // Collapse any other open card for cleaner UX (optional) document.querySelectorAll(".card-header[aria-expanded='true']").forEach((openHeader) => { if (openHeader !== header) { openHeader.setAttribute("aria-expanded", "false"); const openContent = document.getElementById(openHeader.getAttribute("aria-controls")); openContent.style.maxHeight = 0; } }); header.setAttribute("aria-expanded", String(!expanded)); if (!expanded) { content.style.maxHeight = content.scrollHeight + "px"; } else { content.style.maxHeight = 0; } }); // Initialize to ensure correct maxHeight if content is pre-opened if (header.getAttribute("aria-expanded") === "true") { content.style.maxHeight = content.scrollHeight + "px"; } }); // Improve resize behavior: recompute heights for open items window.addEventListener("resize", () => { document.querySelectorAll(".card-header[aria-expanded='true']").forEach((header) => { const content = document.getElementById(header.getAttribute("aria-controls")); content.style.maxHeight = content.scrollHeight + "px"; }); });
// Select all service cards
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h6").innerText;
    alert(`You clicked on: ${title}`);
  });
});
//about
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateX(0)";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe why choose us steps
document.addEventListener("DOMContentLoaded", () => {
  const whySteps = document.querySelectorAll(".why-step");
  whySteps.forEach((step) => {
    observer.observe(step);
  });
});

// Add hover ripple effect to steps
document.querySelectorAll(".why-step").forEach((step) => {
  step.addEventListener("mouseenter", function () {
    this.style.background =
      "linear-gradient(135deg, var(--bg-cream), var(--bg-primary))";
  });

  step.addEventListener("mouseleave", function () {
    this.style.background = "var(--bg-primary)";
  });
});

// Animate step circles on scroll
const circleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const circle = entry.target;
      circle.style.animation = "pulse 1.5s ease infinite";
      circleObserver.unobserve(circle);
    }
  });
}, observerOptions);

document.querySelectorAll(".step-circle").forEach((circle) => {
  circleObserver.observe(circle);
});

// Add pulse animation CSS dynamically
const style = document.createElement("style");
style.textContent = `
    @keyframes pulse {
        0%, 100% {
            box-shadow: 0 4px 15px rgba(201, 168, 117, 0.3);
        }
        50% {
            box-shadow: 0 6px 25px rgba(201, 168, 117, 0.6);
        }
    }
`;
document.head.appendChild(style);

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.style.padding = "0.4rem 0";
  } else {
    navbar.style.padding = "0.65rem 0";
  }

  lastScroll = currentScroll;
});

// Add click animation to CTA button
const ctaButton = document.querySelector(".cta-button");
if (ctaButton) {
  ctaButton.addEventListener("click", function (e) {
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "translateY(-3px)";
    }, 100);
  });
}

// Counter animation for numbers (if you want to add statistics later)
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = Math.ceil(target);
      clearInterval(timer);
    } else {
      element.textContent = Math.ceil(current);
    }
  }, 16);
}

// Mobile menu close on link click
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse);
      bsCollapse.hide();
    }
  });
});

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);
});

// Parallax effect for decorative circles
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(
    ".about-section::before, .why-choose-section::before"
  );

  parallaxElements.forEach((element) => {
    const speed = 0.5;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});
// counter
