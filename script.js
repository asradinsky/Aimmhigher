// Toggle mobile navigation menu
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
    const links = document.querySelectorAll("nav a");

    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // Close menu when a link is clicked
    links.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });
});
