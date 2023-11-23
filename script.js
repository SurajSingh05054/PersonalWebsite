


let menu = document.querySelector("#menu-icon");
let right = document.querySelector(".nright");

menu.onclick =() => {
    menu.classList.toggle("bx-x");
    right.classList.toggle("open");
    
}