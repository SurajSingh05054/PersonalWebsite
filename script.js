


let menu = document.querySelector("#menu-icon");
let right = document.querySelector(".nright");

menu.onclick =() => {
    menu.classList.toggle("bx-x");
    right.classList.toggle("open");
    
}

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "suvi6579@gmail.com",
        Password : "67EDF7E978D626EE2971200AB054D0040784",
        To : 'suvi6579@gmail.com',
        From : document.querySelector("#email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );  
}