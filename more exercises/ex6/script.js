// create a web app that takes in an input text. Display the text in an output div also the output must be updated for each change in the input instantaneously. Create 10 buttons which when clicked will change the color of the output text.


let valInput = document.querySelector("#val")
let output = document.querySelector("#output")
let btn = document.querySelectorAll("#btn")


valInput.addEventListener('input',() => {
    output.innerText = valInput.value;
})

btn.forEach((item)=>{
    item.addEventListener('click',(e) => {
        output.style.color = e.target.innerText;
    })
})