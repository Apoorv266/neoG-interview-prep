// Create a currency converter app that converts usd to inr. Use this API to fetch corresponding amounts. API : https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json

let output = document.querySelector("#output")
let inr = document.querySelector("#inr")
let btn = document.querySelector("#btn")

let url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json"

function valFunc() {
  
    fetch(url).then(response => response.json()).then(val =>{
      let usd = Math.trunc(Number(inr.value) * val.usd.inr)
      output.innerText = usd + " dollars"
    })
}

btn.addEventListener("click", valFunc)