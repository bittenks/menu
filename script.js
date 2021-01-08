const btn = document.getElementById("btn");
const nav = document.getElementById("nav");

btn.addEventListener("click", () => {
    nav.classList.toggle("active");
    btn.classList.toggle("active");
});
nav.addEventListener("mouseleave", () =>{
    nav.classList.toggle("active");
    btn.classList.toggle("active");
    
})

