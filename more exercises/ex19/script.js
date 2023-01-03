// Create a counter with two buttons + and -. On clicking these buttons the number should increment and decrement respectively from the given value. Show error when you give any input other than number.


let decr = document.querySelector("#decr")
let incr = document.querySelector("#incr")
let input= document.querySelector("#input")
let output = document.querySelector("#output")

let val = input.value
let count = Number(val)


    function incrFunc() {

            input.value++
            output.innerText = input.value
       if (isNaN(input.value)) {
        output.innerText = "Please enter a number!!"
       }
    }
                                                                  
    function decrFunc() {
        input.value--
        output.innerText = input.value
        if (isNaN(input.value)) {
            output.innerText = "Please enter a number!!"
           }
    }


incr.addEventListener("click", incrFunc)

decr.addEventListener("click", decrFunc)