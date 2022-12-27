let url = "https://mystery-api.kushanksriraj.repl.co/get"

function apiFunc(url) {
    fetch(url).then(response => {
        if (!response.ok) {
            if (resp.status == 404) {
                throw new Error("page not found")
            } else if (resp.status == 401) {
                throw new Error(" You are not logged in")
            }
        }
        return response.json()
    }).then(response => console.log(response)).catch(error =>{
        console.log(error)
    })
}