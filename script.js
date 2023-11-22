


let menu = document.querySelector("#menu-icon");
let right = document.querySelector(".nright");
let section = document.querySelector(".Section")

menu.onclick =() => {
    menu.classList.toggle("bx-x");
    right.classList.toggle("open");
    section.classList.toogle("call");
    h1.classList.toggle("change");
    
}