let field = document.querySelector("#field")
let btn = document.querySelector("#btn")
let output = document.querySelector("#output")

function validateFunc() {
    let arr = field.value.split("")
for (let i = 0; i < arr.length; i++) {
    if (i %2 === 0) {
        arr.splice(i, 1, arr[i].toUpperCase())
    }  
}
output.innerText = arr.join("")
}



btn.addEventListener("click", validateFunc)

