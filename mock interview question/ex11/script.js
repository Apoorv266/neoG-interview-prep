// Create a web app, where I input my name, and then I input a password. If the password contains the input name in it, show an error message "Password can't have name"

let name = document.querySelector("#name")
let pass = document.querySelector("#pass")
let check = document.querySelector("#check")
let output = document.querySelector("#output")

function validFunc() {
    if (pass.value.includes(name.value)) {
        output.innerText = "Password can't have name"
    }
    else{
        output.innerText = "Valid password"
    }
}

check.addEventListener("click", validFunc)