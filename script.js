document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("fade-in");
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, index * 300);
    });
});

// Smooth Scrolling for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});
