// create an input field that takes in a number. Display that many number of images to the user. Use this API to get the images https://source.unsplash.com/random eg: if the user enters 10, 10 random images should be displayed.Follow Up : Can you style the images with curvy border and suitable width, height and margin?


let imgNum = document.querySelector('#num')
let btn = document.querySelector("#btn")
let output = document.querySelector("#output")
let url = "https://source.unsplash.com/random"

function displayFunc() {
    let img= ""

    for (let i = 0; i < Number(imgNum.value); i++) {
       let newImg = `<img src=${url}>`
        img += newImg
    }
   output.innerHTML = img
}

btn.addEventListener("click", displayFunc)