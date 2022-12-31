// Create a web app, which On the Click of a button fetches data from the provided API https://mock-practice.prakhar10v.repl.co/items and from the data, displays the item with the highest price on the screen, below the button.



let url = "https://mock-practice.prakhar10v.repl.co/items"
let btn = document.querySelector("#btn")
let output = document.querySelector("#output")


function clickFunc() {
    fetch(url).then(response => response.json()).then(val => checkPrice(val))
}

function checkPrice(element) {
    let highPrice = 0
    let val = ""

    for (let i = 0; i < element.length; i++) {
       if (element[i].price > highPrice) {
        highPrice = element[i].price
        val = element[i].item
       }
        
    }
    output.innerText = `Highest item is ${val} with price ${highPrice}`
}

btn.addEventListener("click",clickFunc)