///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
///////////////////////////////////////////////////////////
// Smooth scrolling animation
const alllinks = document.querySelectorAll("a:link");

alllinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const herf = link.getAttribute("href");

    //scroll back to top
    if (herf === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (herf !== "#" && herf.startsWith("#")) {
      const sectionEl = document.querySelector(herf);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-moblie-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
