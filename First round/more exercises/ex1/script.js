// Here is an API which returns the details of github users.Call this API with your GitHub username and display the profile picture and the names of repositories. API : https://api.github.com/users/

let img = document.querySelector("#avatar")
let list = document.querySelector("#repo")

let url = "https://api.github.com/users/Apoorv266"

function fetchFunc(url) {
    fetch(url).then(response => response.json()).then(val => {
        img.src = val.avatar_url
        // console.log(val)
        fetch(val.repos_url).then(response => response.json()).then(val =>{
            displayRepo(val)
        })
    })
}

function displayRepo(val) {
    let repoItems = '';
    val.map((item)=>{
        repoItems += `<li>${item.name}</li>`
    })
    list.innerHTML = repoItems
}
fetchFunc(url)