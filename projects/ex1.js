// Create a web app which would take two inputs. It would also have 4 buttons: +, -, x /. Based on the button clicked perform the operation on the two inputs. You can do this in React or vanillaJS based on your choice.

let inputval1 = document.querySelector("#field1")
let inputval2 = document.querySelector("#field2")
let sum = document.querySelector("#sum")
let sub = document.querySelector("#sub")
let div = document.querySelector("#div")
let pro = document.querySelector("#pro")
let output = document.querySelector("#output")

function sumfunc(inputval1) {
    // let sum = Number(inputval1.value) + Number(inputval2.value)
    // output.innerText = sum
    console.log(inputval1.value)
}

sum.addEventListener("click", sumfunc)
// sub.addEventListener("click", subfunc)
// div.addEventListener("click", divfunc)
// pro.addEventListener("click", profunc)
 