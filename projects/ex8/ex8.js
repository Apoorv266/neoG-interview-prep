const btnShowOutput = document.getElementById("btn-result");
const outputDiv = document.querySelector(".output-div");

const BASE_API_URL = "https://api.funtranslations.com/translate/minion.json"
const postValue = BASE_API_URL+"?text=apoorv"


function errorfunc(error) {
    outputDiv.innerText = error
} A

function fetchFunc() {
    fetch(postValue).then(res => res.json()).then(response => outputDiv.innerText = response.contents.translated).catch(errorfunc)
}
// d
btnShowOutput.addEventListener("click", fetchFunc)