// Display the results of this API's response : https://quick-access-api.desaihetav.repl.co/ on the screen

let url = "https://quick-access-api.desaihetav.repl.co/"

function printResult(url) {
    fetch(url).then(response => response.json()).then(response => document.write(response.message))
}

printResult(url)

