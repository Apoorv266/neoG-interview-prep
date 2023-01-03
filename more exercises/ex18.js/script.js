// Create a web app, which on the click of a button fetches and show profile photo of your github profile and all your repositories in ordered list.


let btn = document.querySelector("#btn")
let output = document.querySelector("#output")
let url = "https://api.github.com/users/apoorv266"
let list = document.querySelector("#list")

function fetchFunc() {
    fetch(url).then(response => response.json()).then(val =>{
        output.innerHTML = `<img src="${val.avatar_url}" alt="" srcset="">`
    fetch(val.repos_url).then(response => response.json()).then(val =>{
        fetchRepo(val)
    })
    })
}

function fetchRepo(repo) {
    let repoItem = ""
        for (let i = 0; i < repo.length; i++) {
            repoItem += `<li>${repo[i].name}</li>`
        }
   
   list.innerHTML = repoItem
}

btn.addEventListener("click", fetchFunc)