
const menuButton = document.querySelector(".menuButton");
const navLinks = document.querySelector(".navLinks");

menuButton.addEventListener("click",()=>{
    navLinks.classList.toggle("active");
    menuButton.classList.toggle("active")
})

document.querySelectorAll(".links").forEach(n=>n.addEventListener("click", ()=>{
    navLinks.classList.remove("active")
}))


linkHome = document.querySelector(".linkHome")
linkAbout = document.querySelector(".linkAbout")
linkDownload = document.querySelector(".linkDownload")
linkContact = document.querySelector(".linkContact")

linkHome.addEventListener("click",()=>{
    linkHome.classList.toggle('active')
})

linkAbout.addEventListener("click",()=>{
    linkAbout.classList.toggle('active')
})

linkDownload.addEventListener("click",()=>{
    linkDownload.classList.toggle('active')
})

linkContact.addEventListener("click",()=>{
    linkContact.classList.toggle('active')
})