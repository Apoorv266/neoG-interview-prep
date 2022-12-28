// Add a text field. Insert a sentence. Now create a button. On clicking the button, highlight the word in the sentence with most number of characters.

let field = document.querySelector("#field")
let btn = document.querySelector("#btn")
let output = document.querySelector("#output")

function checkFunc() {
    let count = 0
    let word
    let arr = field.value.split(" ")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > count) {
            count = arr[i].length
            word = arr[i]
        }
    }
    let newStr = field.value.replace(word, `<span>${word}</span>`)
    output.innerHTML = newStr
}



btn.addEventListener("click", checkFunc)