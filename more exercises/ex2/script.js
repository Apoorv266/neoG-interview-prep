// Here is an API that returns a random joke. Call this API and display the joke on the click of a button. Also Disable the button when it is clicked more than 5 times. API : https://api.chucknorris.io/jokes/random

let url = "https://api.chucknorris.io/jokes/random"

let btn = document.querySelector("#btn")
let output = document.querySelector("#output")


let count = 0
function fetchFunc() {
    if (count <= 5) {
        output.innerText = `limited reached`
        btn.disabled = true
    }
    else {
        fetch(url).then(response => response.json()).then(val => {
            output.innerText = val.value
        })
    }
    count += 1
}


btn.addEventListener("click", fetchFunc)