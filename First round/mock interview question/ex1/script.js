// Create a web app and render your name using any heading or paragraph tag. It should have a border of 1px around it. Create 2 buttons, '5px' and '10px' below your name. The width of border should change to 5px and 10px by clicking respective buttons.


let head = document.querySelector("#heading")
let btn1 = document.querySelector("#five")
let btn2 = document.querySelector("#ten")

function changeBorder(e) {
    
    if (e.target.textContent === "5px") {
        head.style.border = "5px solid black"
    }
    else{
        head.style.border = "10px solid black"
    }
}

btn1.addEventListener("click", changeBorder)
btn2.addEventListener("click", changeBorder)