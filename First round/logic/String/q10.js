// Given a string, determine if it is a palindrome, considering only alphanumeric characters

let str = "level"

// first method
let str2 = str.toLowerCase()
let str3 = (str.split("").reverse().join("").toLowerCase())

if (str2 === str3) {
    console.log("true")
}
else {
    console.log("false")
}

//method second

function checkPalim(string) {

    let str = string.toLowerCase()
    let start = 0
    let end = string.length- 1

    while (start < end) {
        if (str[start] !== str[end]) {
            return false
        }
        start++
        end--
    }
    return true
}

console.log((checkPalim(str)))