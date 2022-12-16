let passwordVal = document.querySelector("#password")
let outputBtn = document.querySelector("#check")
let outputBox = document.querySelector("#output")


function checkFunc() {
    if (passwordVal.value.length === 10) {
        outputBox.innerText = "Success"
        passwordVal.style.border = "2px solid green"
    }
    else{
        outputBox.innerText = "Enter 10 digits"
        passwordVal.style.border = "2px solid red"
        outputBtn.disabled = true;
    }
}

outputBtn.addEventListener("click", checkFunc)