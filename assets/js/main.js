//Nodos
const menu = document.querySelector(".bx-grid-alt");
const navMenu = document.querySelector(".nav-menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", ()=>{
    navMenu.classList.toggle("nav-menu_visible");
})

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 60){
        nav.classList.add("scroll-nav")
    }else{
        nav.classList.remove("scroll-nav")
    }
})
