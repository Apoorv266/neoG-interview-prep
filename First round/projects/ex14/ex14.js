let outputBox = document.querySelector("#output")

let obj1 = {
    name :"Ram", 
    age: 25,
    yuga :"Treta"
}

let obj2 = {
    name :"Krishna", 
    age: 31,
    yuga :"Dwapar"
}


function compAge(objone , objtwo) {
    if (objone.age > objtwo.age) {
        return `${objone.name} has more age`
    }
    else{
        return `${objtwo.name} has more age`
    }
}

console.log(compAge(obj1, obj2))