// Reverse the given string word wise. That is, the last word in given string should come at 1st place, last second word at 2nd place and so on. Individual words should remain as it is. example: Input : Welcome to NeoG Camp → Camp NeoG to Welcome

let str = "Welcome to NeoG Camp"


//first method
function reverseFunc(str) {
    return str.split(" ").reverse().join(" ")
}

console.log(reverseFunc(str))

//second method

function reverseStr(str) {
    let newStr = ""
    let arr = str.split(" ")

    for (let i = arr.length - 1; i >= 0 ; i--) {
        newStr+= arr[i]
        newStr+= ' '
    }
    return newStr
}

console.log(reverseStr(str))

