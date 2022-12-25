// Given a string "tic tac toe is a fun game" convert the first 6 characters to capital case

let str = "hellss"

function caseFunc(str) {
    let arr = str.split("")
    
    if ( arr.length >= 6) {
        
        for (let i = 0; i < 6; i++) {
            if (arr[i] !== " ") {
                
                arr.splice(i, 1, arr[i].toUpperCase())
            }
            
        }
        return arr.join("")
    }
    else{
        console.log("enter string with 6 characters")
    }
}

console.log(caseFunc(str))