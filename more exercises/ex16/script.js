// Create a web app to take text input from the user and show the number of vowels and consonants. (spaces should not be counted)

let inputVal = document.querySelector("#input")
let btn = document.querySelector("#btn")
let output = document.querySelector("#output")
let vowels = ["a","e", "i", "o", "u"]


function evalFunc() {
    let vowelCount = 0
    let consonentCount = 0
    let arr = inputVal.value.split("")

    for (let i = 0; i < inputVal.value.length; i++) {
      if (vowels.includes(inputVal.value[i])) {
        vowelCount+=1
      }
      else{
        consonentCount+=1
      }
        
    }
    output.innerHTML = `<ul>No. of vowels : ${vowelCount}</ul><ul>No. of Consonents : ${consonentCount}</ul>`
}


btn.addEventListener("click", evalFunc)