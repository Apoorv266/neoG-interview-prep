// Create a web app where I can input a text. Now, If the number of characters is divisible by 3 the text color should change to red.

let txt = document.querySelector("#input-text")
let output = document.querySelector("#output")

function funCheck() {
    output.innerText = txt.value
    if (txt.value.length % 3 == 0) {
        output.style.color = "red"
    }
    else{
        output.style.color = "black"
    }
}

txt.addEventListener("input", funCheck)