const nav = document.querySelector(".nav");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav-links a");
const revealElements = document.querySelectorAll(".reveal");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (nav) {
      nav.classList.remove("open");
    }
    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasGsap = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";

const getRevealDelay = (element) => {
  if (element.classList.contains("delay-2")) return 0.16;
  if (element.classList.contains("delay-1")) return 0.08;
  return 0;
};

if (!prefersReducedMotion && hasGsap) {
  document.documentElement.classList.add("js-gsap");
  window.gsap.registerPlugin(window.ScrollTrigger);

  revealElements.forEach((element) => {
    window.gsap.fromTo(
      element,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: getRevealDelay(element),
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          once: true,
        },
      }
    );
  });
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Mensagem enviada com sucesso. Retornaremos em breve.";
    contactForm.reset();
  });
}
