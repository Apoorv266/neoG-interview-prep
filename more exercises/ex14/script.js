// Create a counter app which consist of counter value with two buttons + and -. On clicking these buttons the number should increment and decrement respectively. Add on :- make '-' button disable while counter value is 0, only enable when the counter value is greater than 0 and again disable '-' button when counter value becomes 0.

let decr = document.querySelector("#decr")
let incr = document.querySelector("#incr")
let valueInput = document.querySelector("#value")
let count = 0

if (count == 0) {
    decr.disabled = true;
}

function decrFunc() {
    count--
    if (count == 0) {
        decr.disabled = true
    }
    valueInput.innerText = count
}

function incrFunc() {

    count++
    decr.disabled = false
    valueInput.innerText = count
}



decr.addEventListener("click", decrFunc)
incr.addEventListener("click", incrFunc)