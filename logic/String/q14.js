// Given a string "tic tac toe is a fun game" convert the first 6 characters to capital case

let str = "tic tac toe is a fun game"

function caseFunc(str) {
    let arr = str.split("")
    
    for (let i = 0; i < 7; i++) {
        if (arr[i] !== " ") {
            
            arr.splice(i, 1, arr[i].toUpperCase())
        }
        
    }
    return arr.join("")
}

console.log(caseFunc(str))