// get a list of items. Display id and name of each item in the list in following format ID – Name


let url = 'https://stock-api.desaihetav.repl.co/list'

function fetchFunc(url) {
    fetch(url).then(response =>{
        return response.json()
    }).then(val =>{
        displayFunc(val.data)
    })
}

function displayFunc(val) {
    // val.map((item)=>{
    //  document.write(`${item.id} - ${item.name} <br>`)
    // })

    //or 
    for (let i = 0; i < val.length; i++) {
        document.write(`${val[i].id} - ${val[i].name} <br>`)

    }
}

fetchFunc(url)