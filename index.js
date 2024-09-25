const nav = document.querySelector("nav");
// const div=document.querySelector(".div");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        nav.style.backgroundColor = "black";
        nav.style.transition = "1s";
    }
    if (window.scrollY < 100) {
        nav.style.backgroundColor = "transparent";
        nav.style.transition = "1s";
    }
   
})

