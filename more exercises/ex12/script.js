// create an input field that takes in a number. Display that many number of images to the user. Use this API to get the images https://source.unsplash.com/random eg: if the user enters 10, 10 random images should be displayed.Follow Up : Can you style the images with curvy border and suitable width, height and margin?


let imgNum = document.querySelector('#num')
let btn = document.querySelector("#btn")
let output = document.querySelector("#output")
let loadImg = document.querySelector("#load")
let url = "https://source.unsplash.com/random"


function test() {
    let img = ""
    for (let i = 0; i < Number(imgNum.value); i++) {
        let newImg = `<img src=${url}>`
        img += newImg
    }
    return img
}


// since JavaScript is single-threaded, the test function is blocking the event loop and not giving the browser a chance to render the gif.
// used setTimeout to make the test function asynchronous and wrap that in a Promise so that the other assignments run after it completes.



async function displayFunc() {
    loadImg.style.display = 'block';
    new Promise(function (myResolve) {

        setTimeout(() => {
            myResolve(test())
        }, 500)

    }).then((result) => {
        loadImg.style.display = "hidden"
        output.innerHTML = result;
    })


    // loadImg.style.display = 'block';
    // let result = await new Promise((resolve, reject) => {
    //   setTimeout(() => resolve(test()))
    // })
    // loadImg.style.display = "hidden"
    // output.innerHTML = result; 


}

btn.addEventListener("click", displayFunc)





//reference = https://stackoverflow.com/questions/71943182/how-to-show-hide-animated-gif-during-the-execution-of-a-function