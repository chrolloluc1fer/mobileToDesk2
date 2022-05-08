let hb = document.querySelector(".hamburger")
let nav = document.querySelector("nav")

hb.addEventListener("click",()=>{
    nav.classList.toggle("active");
    hb.classList.toggle("active")
})