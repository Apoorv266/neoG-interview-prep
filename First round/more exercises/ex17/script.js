// Create a web app, which you have to create two btns one is start, second is stop, and input text on clicking of start btn the text color should change in every 1 sec and on clicking stop it should stop at a particular color.

let text = document.querySelector("#text")
let start = document.querySelector("#start")
let stop = document.querySelector("#stop")
let output = document.querySelector("#output")
let colors = ["red", "green", "orange", "yellow", "pink", "blue"]
let count = -1
let myInterval


function startFunc() {
    output.innerText = text.value
    myInterval = setInterval(intervalFunc, 1000);
}

function intervalFunc() {
    count++
    if (count === colors.length) {
        count = 0
    }
    output.style.color = `${colors[count]}`
    
}


function endFunc() {
    clearInterval(myInterval)
}


start.addEventListener("click", startFunc)
stop.addEventListener("click", endFunc)
