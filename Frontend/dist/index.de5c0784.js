///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
///////////////////////////////////////////////////////////
// Smooth scrolling animation
const alllinks = document.querySelectorAll("a:link");
alllinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const herf = link.getAttribute("href");
        //scroll back to top
        if (herf === "#") window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        if (herf !== "#" && herf.startsWith("#")) {
            const sectionEl = document.querySelector(herf);
            sectionEl.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

//# sourceMappingURL=index.de5c0784.js.map
