const btnShowOutput = document.getElementById("btn-result");
const outputDiv = document.querySelector(".output-div");

const BASE_API_URL = "https://api.funtranslations.com/translate/minion.json"
const postValue = BASE_API_URL+"?text=apoorv"


function fetchFunc() {
    fetch(postValue).then(response =>{
        if (!response.ok) {
            if (response.status == 404) {
                throw new Error(`page not found`);
            }else if(response.status == 401){
                throw new Error('you are not logged in');
            }
        }
        return response.json()
    }).then(val => console.log(val.contents.translated)).catch(error =>{
        console.log(error)
    }) 
}



btnShowOutput.addEventListener("click", fetchFunc)