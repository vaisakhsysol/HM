console.log("hello");

const menuButton = document.querySelector(".menuButton");
const navLinks = document.querySelector(".navLinks");

menuButton.addEventListener("click",()=>{
    navLinks.classList.toggle("active");
})

document.querySelectorAll(".links").forEach(n=>n.addEventListener("click", ()=>{
    navLinks.classList.remove("active")
}))