// Create a web app, which you have to create two btns one is start, second is stop, and input text on clicking of start btn the text color should change in every 1 sec and on clicking stop it should stop at a particular color.

let text = document.querySelector("#text")
let start = document.querySelector("#start")
let stop = document.querySelector("#stop")
let output = document.querySelector("#output")
let colors = ["red", "green", "orange", "yellow"]
let count = -1
let stopFunc = false

function startFunc() {
    output.innerText = text.value
    let myInterval = setInterval(intervalFunc, 500);
    if (stopFunc) {
        clearInterval(myInterval);
    }

}

function intervalFunc() {
    count++
    if (count === colors.length) {
        count = 0
    }
    output.style.color = `${colors[count]}`
}


function endFunc() {
    stopFunc = true
    // console.log("test")
}


start.addEventListener("click", startFunc)
stop.addEventListener("click", endFunc)
