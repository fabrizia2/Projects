// Add any interactive functionality here
document.addEventListener('DOMContentLoaded', () => {
    // Example: Animate the hero content on load
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = 0;
    heroContent.style.transition = 'opacity 2s';
    setTimeout(() => {
        heroContent.style.opacity = 1;
    }, 500);
});

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function() {
        nav.classList.toggle("show");
    });
});