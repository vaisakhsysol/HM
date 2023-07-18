
const menuButton = document.querySelector(".menuButton");
const navLinks = document.querySelector(".navLinks");

menuButton.addEventListener("click",()=>{
    navLinks.classList.toggle("active");
    menuButton.classList.toggle("active")
})

document.querySelectorAll(".links").forEach(n=>n.addEventListener("click", ()=>{
    navLinks.classList.remove("active")
}))


const activePage = window.location.pathname
const nLinks = document.querySelectorAll('nav a').forEach(l =>{
    if(l.href.includes(`${activePage}`)){
        l.classList.add('activeated');
        console.log(`${activePage}`);
    }
})
