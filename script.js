const hamMenu = document.querySelector(".hamMenu");
const navMenu = document.querySelector(".links");

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll("nav-item").forEach(n => n.addEventListener("click", () => {
    hamMenu.classList.remove("active");
    navMenu.classList.remove("active");
}))