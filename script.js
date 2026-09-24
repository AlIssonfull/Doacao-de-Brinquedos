const btn = document.getElementById("btn");
const menu = document.getElementById("menu");
const menuC = document.getElementById("menuC");
const header = document.querySelector("header");

menu.addEventListener("click", () => {
    header.classList.add("menu-open");
});

menuC.addEventListener("click", () => {
    header.classList.remove("menu-open");
});