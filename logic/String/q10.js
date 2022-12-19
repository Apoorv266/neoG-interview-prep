// Given a string, determine if it is a palindrome, considering only alphanumeric characters

let str = "radar"

// first method
let str2 = str.toLowerCase()
let str3 = (str.split("").reverse().join("").toLowerCase())
if (str2 === str3) {
    console.log("true")
}
else{
    console.log("false")
}