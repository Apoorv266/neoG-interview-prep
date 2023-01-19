let red = document.querySelector("#btn-red")
let green = document.querySelector("#btn-green")
let blue = document.querySelector("#btn-blue")
let inputField = document.querySelector("#text-input")


function redFunc() {
    inputField.style.color = 'red'
}


function greenFunc() {
    inputField.style.color = 'green'
}


function blueFunc() {
    inputField.style.color = 'blue'
}
red.addEventListener("click", redFunc)
green.addEventListener("click", greenFunc)
blue.addEventListener("click", blueFunc)