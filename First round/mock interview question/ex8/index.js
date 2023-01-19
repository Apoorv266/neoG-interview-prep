// Make another input section that asks the user to guess the OTP and for checking whether the guess is equal to the actual one or not add a button "Validate" which on clicking shows the message "Success " or "Failure" depending.

let field = document.querySelector("#text")
let output = document.querySelector("#output")
let validateInput = document.querySelector("#validateInput")
let valBtn = document.querySelector("#validate")

let baseUrl = "https://otpgenerator.ishanjirety.repl.co/get-otp?name="
let otpVal 
function fetchFunc() {
    let url = baseUrl+field.value
    fetch(url).then(response => response.json()).then(val =>{
        output.innerText = val.otp
        console.log(val.otp)
        validateFunc(val.otp.slice(-6))
    } )
}

function validateFunc(otp) {
    if (otp == validateInput.value) {
        output.innerText = `guessed it correct, your otp was ${otp}`
        output.style.color = "green"
    }
    else{
        output.innerText = `wrong guess , your otp was ${otp}`
        output.style.color = "red"
    }
   
}


valBtn.addEventListener("click", fetchFunc)