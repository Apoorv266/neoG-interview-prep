// create a web app with a name input, checkbox for age 18+ and a submit button. when clicked on the submit button, if the checkbox is checked, then display you are eligible in green color else display you are not eligible in red color. ***Follow Up: include the input name in the output eg: John Doe is eligible.


let checkBox = document.querySelector("#age")
let output = document.querySelector("#output")
let name = document.querySelector("#name")
let btn = document.querySelector("#btn")
let timeout;
let time = 0

checkBox.addEventListener('input', function display() {

    if (checkBox.checked && name.value !== "") {
        output.innerText = `${name.value} is eligible`
        output.style.color = "green"
    }
    else if (name.value !== "") {
        output.innerText = `${name.value} is not eligible`
        output.style.color = "red"
    } else {
        checkBox.checked = false
        output.innerText = `Enter name first`
    }




})



name.addEventListener("input", function input() {
    output.innerText = ``
    time = 1000
    if (name.value == "") {
        output.innerText = `Enter name first`
        output.style.color = "Black"
        checkBox.checked = false
    }
    setTimeout(call, time);
})


function call() {
 if (!checkBox.checked && name.value !== "") {
        output.innerText = `${name.value} is not eligible`
        output.style.color = "red"
    }
    else if (checkBox.checked && name.value !== "") {
        output.innerText = `${name.value} is eligible`
        output.style.color = "green"
    }
}

