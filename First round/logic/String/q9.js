// Write a program which receives a string str that calculates the length of a string and return true if the length is greater than 7 without using strlen()

let str = "TestSng"
let count = 0

function checkLen(str) {
    
    for (let i = 0; i < str.length; i++) {
        count++
    }

    if (count > 7) {
        return true
    }
    else{
        return false
    }
}

console.log(checkLen(str))