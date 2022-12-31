let btn = document.querySelector("#btn")
let list = document.querySelector("#list")
let url = " https://jsonplaceholder.typicode.com/todos"


function clickFunc() {
    fetch(url).then(response => response.json()).then(val => checkPrice(val))
}

function checkPrice(element) {
    let str = ""

    for (let i = 0; i < element.length; i++) {
        str+= `<li>${element[i].title}</li>`
        
    }
    list.innerHTML = str
}

btn.addEventListener("click",clickFunc)