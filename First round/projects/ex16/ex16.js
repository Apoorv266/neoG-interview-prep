let obj1 = {
    name: "Ram",
    power: 2500,
    yuga: "Treta"
}

let obj2 = {
    name: "Krishna",
    power: 1325,
    yuga: "Dwapar"
}


function powerFunc(objOne, objTwo) {
    //first way

    // let score1 = 0
    // let score2 = 0

    // for (let i = 0; i < objOne.name.length; i++) {
    //     score1 += 35
    // }

    // for (let j = 0; j < objTwo.name.length; j++) {
    //     score2 += 35
    // }

    // better way
    let score1 = objOne.name.length * 35
    let score2 = objTwo.name.length * 35

    let totalPow1 = score1 + objOne.power
    let totalPow2 = score2 + objTwo.power

    if (totalPow1 > totalPow2) {

        return `${objOne.name} has more power overall`
    }
    else if(totalPow1 < totalPow2){
        return `${objTwo.name} has more power overall`
    }else{
        return `Both have same powers`
    }


}

console.log(powerFunc(obj1, obj2))