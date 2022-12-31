// Create a username input and a password input and a submit button. if the password includes the username, then display weak password in red and disable the submit button. else, enable the button. Can you do a case-insensitive comparison for the same ?


let name = document.querySelector("#name")
let password = document.querySelector("#password")
let btn = document.querySelector("#btn")
let output = document.querySelector("#output")

function checkFunc() {
    if (password.value.includes(name.value)) {
        output.innerText = `weak password`
        output.style.color = "red"
        btn.disabled = true
    }
    else{
        output.innerText = `success`
        output.style.color = "green"
        btn.disabled = false
    }
}

btn.addEventListener("click", checkFunc)
password.addEventListener("input", function field() {
    btn.disabled = false
})