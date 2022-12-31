// Create a user name input, password input and a check button. If the password is username123 then display success message else display failure message. Follow Up : give green color to success message and red color to failure message

let name = document.querySelector("#name")
let password = document.querySelector("#password")
let btn = document.querySelector("#btn")
let output = document.querySelector("#output")

function checkFunc() {
    if (password.value === `${name.value}123`) {
        output.innerText = `failure`
        output.style.color = "red"
    }
    else{
        output.innerText = `success`
        output.style.color = "green"
    }
}

btn.addEventListener("click", checkFunc)