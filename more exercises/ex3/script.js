// Add a text field. Insert a sentence. Now create a button. On clicking the button, highlight the word in the sentence with most number of characters.

let field = document.querySelector("#field")
let btn = document.querySelector("#btn")

function checkFunc() {
    let arr = field.value.split(" ")
    console.log(arr)
}



btn.addEventListener("click", checkFunc)