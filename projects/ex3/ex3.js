let h1 = document.querySelector("#h1")
let h2 = document.querySelector("#h2")
let h3 = document.querySelector("#h3")
let inputField = document.querySelector("#field")
let outputView = document.querySelector(".outputfield")
let reset = document.querySelector("#reset")



function changeHead(event) {
    let val = event.target.textContent
    if (inputField.value) {
        
        if (val === "h1") {
            outputView.innerHTML = `<h1>${inputField.value}</h1>`
        }
        else if (val == "h2") {
            outputView.innerHTML = `<h2>${inputField.value}</h2>`
        }
        else {
            outputView.innerHTML = `<h3>${inputField.value}</h3>`
        }
    }
    else{
        console.log("value", inputField.value)
        inputField.value = "enter valid string"
        console.log("value", inputField.value)
        console.log(inputField)
    }
}

function resetFunc() {
    outputView.innerHTML = ""
    inputField.value = ""
    let newElems = document.createElement("input")
    newElems.setAttribute = ("id , field")
    outputView.appendChild(newElems)
}


h1.addEventListener("click", changeHead)
h2.addEventListener("click", changeHead)
h3.addEventListener("click", changeHead)
reset.addEventListener("click", resetFunc)
