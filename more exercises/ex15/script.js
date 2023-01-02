// Create a web app, which On the Click of a button fetches data from the provided API and from the data, displays the item with the highest price on the screen, below the button.

let url = "https://mock-practice.prakhar10v.repl.co/items"


let btn = document.querySelector("#btn")
let output = document.querySelector("#output")

function fetchFunc() {

    fetch(url).then(response => response.json()).then(val => {
let prod = getFunc(val)
        output.innerText = prod
    })

}


function getFunc(arr) {
    let price = 0
    let item = ""

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].price > price) {
            price = arr[i].price
            item = arr[i].item
        }
 
    }
   return item 
}


btn.addEventListener("click", fetchFunc)