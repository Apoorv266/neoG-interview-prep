// Create a web app which would take two inputs. It would also have 4 buttons: +, -, x /. Based on the button clicked perform the operation on the two inputs. You can do this in React or vanillaJS based on your choice.

let inputval1 = document.querySelector("#field1")
let inputval2 = document.querySelector("#field2")
let sum = document.querySelector("#sum")
let sub = document.querySelector("#sub")
let div = document.querySelector("#div")
let pro = document.querySelector("#pro")
let output = document.querySelector("#output")

function sumfunc() {
    let sum = Number(inputval1.value) + Number(inputval2.value)
    output.innerText = sum
}

function subfunc() {
    let sub = Number(inputval1.value) - Number(inputval2.value)
    output.innerText = sub
}

function divfunc() {
    let div = Number(inputval1.value) / Number(inputval2.value)
    output.innerText = div.toFixed(2)
}

function profunc() {
    let pro = Number(inputval1.value) * Number(inputval2.value)
    output.innerText = pro
}

sum.addEventListener("click", sumfunc)
sub.addEventListener("click", subfunc)
div.addEventListener("click", divfunc)
pro.addEventListener("click", profunc)
 
