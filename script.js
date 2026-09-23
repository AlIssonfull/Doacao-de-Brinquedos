let btn = document.getElementById("btn");
let menu = document.getElementById("menu");
let menuC = document.getElementById("menuC");
let nav = document.getElementById("nav")
let nav2 = document.getElementById("nav2")

menu.addEventListener("click", () => {
    menuC.classList.add("menu");
    menuC.classList.remove("mn");
    menu.classList.add("mn");
    menu.classList.remove("menu");
    nav.style.display = "block"
    nav2.style.display = "block"
    nav.classList.add("navB")
    nav2.style.width = "100%"
    nav2.style.display = "flex"
})

menuC.addEventListener("click", () => {
    menuC.classList.remove("menu");
    menuC.classList.add("mn");
    menu.classList.add("menu");
    menu.classList.remove("mn");
    nav.style.display = "none"
    nav2.style.display = "none"
})