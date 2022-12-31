// create an input field that takes in a number. Display that many number of images to the user. Use this API to get the images https://source.unsplash.com/random eg: if the user enters 10, 10 random images should be displayed.Follow Up : Can you style the images with curvy border and suitable width, height and margin?


let imgNum = document.querySelector('#num')
let btn = document.querySelector("#btn")
let output = document.querySelector("#output")
let loadImg = document.querySelector("#load")
let url = "https://source.unsplash.com/random"


function test() {
    let img= ""
    for (let i = 0; i < Number(imgNum.value); i++) {
       let newImg = `<img src=${url}>`
        img += newImg
    }
    return img
}

function displayFunc() {
    loadImg.style.display = 'block';
    new Promise(resolve => setTimeout(() => {
        resolve(test())
      }))
      .then((result) => {
        loadImg.style.display = "hidden" 
        output.innerHTML = result;  
      })
    

}

btn.addEventListener("click", displayFunc)

