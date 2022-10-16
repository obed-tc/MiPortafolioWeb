const navToggle=document.querySelector(".toggle")
const navmenu=document.querySelector(".nav-menu")

navToggle.addEventListener("click",()=>{
    navmenu.classList.toggle("navmenu_visible")
})