let searchbtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-form");
let navBar = document.querySelector("#nav-bar");
let navForm = document.querySelector("nav");
let imgBtn = document.querySelectorAll(".img-btn");


searchbtn.addEventListener('click',() =>{
    searchbtn.classList.toggle("fa-times");
    searchBar.classList.toggle("active");
})
navBar.addEventListener('click', ()=>{
    navBar.classList.toggle("fa-times");
    navForm.classList.toggle("rajesh");
})
imgBtn.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add("active");
        let src = btn.getAttribute("data-src");
        document.querySelector("#rajesh").src = src;
    })
})