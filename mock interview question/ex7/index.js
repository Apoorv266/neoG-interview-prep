// You have to create a profit and loss calculator, in which you will make two input sections one will take current price and other one will take the cost price and to show result one will click on a button and a message will be shown, if there is loss then you just have to show a message with loss amount and similarly for profit

let profit = document.querySelector("#profit")
let loss =  document.querySelector("#loss")
let btn = document.querySelector("#check")
let output = document.querySelector('#output')


function checkFunc() {
    let val1 = Number(profit.value)
    let val2 = Number(loss.value)
    if (val1 > val2) {
        output.innerText = `Your profit is ${val1 - val2}`
    }
    else if (val1 < val2) {
        output.innerText = `Your loss is ${val2 - val1}`
    }
    else{
        output.innerText = `No profit no loss`
    }
}

btn.addEventListener("click", checkFunc)