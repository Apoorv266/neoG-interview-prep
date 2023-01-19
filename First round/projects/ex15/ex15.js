let obj1 = {
    name :"Ram", 
    power: 2500,
    yuga :"Treta"
}

let obj2 = {
    name :"Krishna", 
    power: 1325,
    yuga :"Dwapar"
}



function compAge(objone , objtwo) {
    if (objone.power > objtwo.power) {
        return `${objone.name} has more power`
    }
    else{
        return `${objtwo.name} has more power`
    }
}

console.log(compAge(obj1, obj2))