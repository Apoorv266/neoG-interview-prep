let btn = document.querySelector("#loaded")
let val = document.querySelector("#loading")

function changeTxt() {
    val.style.display = "none"
    // or 
    // val.style.visibility = "hidden"
}

btn.addEventListener("click",changeTxt )