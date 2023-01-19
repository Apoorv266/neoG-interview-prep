let btn1 = document.querySelector("#yjhd")
let btn2 = document.querySelector("#znmd")


function callApi(url) {
    fetch(url).then(response => response.json()).then(val => document.write(val.message))
}

let baseUrl = "https://mock-practice.prakhar10v.repl.co/bollywood?name="

function callFunc(e) {

    if (e.target.textContent == "YJHD") {
        let url = baseUrl + "YJHD"
        callApi(url)
    }
    else {
        let url = baseUrl + "ZNMD"
        callApi(url)
    }
}


btn1.addEventListener("click", (e) => callFunc(e))
btn2.addEventListener("click", (e) => callFunc(e))