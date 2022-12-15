let plusbtn = document.querySelector("#add")
let minusbtn = document.querySelector("#sub")
let inputField = document.querySelector("#field")
let initFont = 14

function plusFont() {
    initFont+=2
    inputField.style.fontSize = `${initFont}px`
    plusbtn.style.fontSize = `${initFont}px`
    minusbtn.style.fontSize = `${initFont}px`
}

function minusFont() {
    initFont-=2
    inputField.style.fontSize = `${initFont}px`
    plusbtn.style.fontSize = `${initFont}px`
    minusbtn.style.fontSize = `${initFont}px`
}



plusbtn.addEventListener("click", plusFont)
minusbtn.addEventListener("click", minusFont)