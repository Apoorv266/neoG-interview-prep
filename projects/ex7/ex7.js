const btnShowOutput = document.getElementById("btn-show");
const outputDiv = document.querySelector("#output");

const BASE_API_URL = "https://api.funtranslations.com/translate/minion.json"
const postValue = BASE_API_URL+"?text=apoorv"


btnShowOutput.addEventListener("click",getData)


function getData() {
    fetch(postValue).then(res => res.json()).then(response => displayData(response))
}

function displayData(data){
    outputDiv.innerText = (data.contents.translated).toUpperCase()
}