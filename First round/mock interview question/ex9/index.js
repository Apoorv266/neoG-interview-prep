// Input a single-digit number and check whether the number is an Automorphic number or not.

let input = document.querySelector("#input")
let btn = document.querySelector("#check")
let output = document.querySelector("#output")


function validateFunc() {
    let val = Number(input.value)
    let sqr = val * val
    if (val == String(sqr).slice(-1)) {
        output.innerText = `${val} is an Automorphic Number`
    }
    else{
        output.innerText = `${val} is not an Automorphic Number`
    }
}


btn.addEventListener("click", validateFunc)