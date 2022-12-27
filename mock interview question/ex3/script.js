// Fetch an API ( https://jsonplaceholder.typicode.com/todos ) and display it on the output on screen.

let url = "https://jsonplaceholder.typicode.com/todos"


function printResult(url) {
    fetch(url).then(response => response.json()).then(response => displayOutput(response))
}

function displayOutput(response) {
    for (let i = 0; i < response.length; i++) {
        document.write(`${response[i].title}<br>`)
        
    }
}

printResult(url)